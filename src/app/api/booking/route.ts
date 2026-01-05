import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Program display names
const programNames: { [key: string]: string } = {
  discovery: 'Free Discovery Call',
  single: 'EQ Intensive (Single Session)',
  core: 'CORE Program (8 weeks)',
  vip: 'VIP Immersion (6 months)',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, goals } = body;

    const programName = programNames[service] || service;

    // Send email notification to Katerina
    await resend.emails.send({
      from: 'Katerina V. Website <onboarding@resend.dev>', // Change to hello@katerinav.com after domain verification
      to: 'hello@katerinav.com',
      subject: `New Coaching Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">
            New Coaching Inquiry
          </h2>

          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Hi Katerina,
          </p>

          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Great news! <strong>${name}</strong> has just expressed interest in your
            <strong>${programName}</strong> program and has been directed to complete their payment.
          </p>

          <div style="background: #FAF9F7; border-left: 4px solid #e8847c; padding: 20px; margin: 30px 0;">
            <h3 style="color: #1a1a1a; font-size: 18px; margin: 0 0 15px 0;">Contact Details</h3>
            <p style="color: #333; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="color: #333; margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #e8847c;">${email}</a></p>
            <p style="color: #333; margin: 5px 0;"><strong>Selected Program:</strong> ${programName}</p>
            ${goals ? `<p style="color: #333; margin: 5px 0;"><strong>Goals & Challenges:</strong> ${goals}</p>` : ''}
          </div>

          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            If they complete the purchase, you'll receive a confirmation from Stripe.
            If not, you may want to follow up with a friendly check-in.
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />

          <p style="color: #888; font-size: 14px;">
            This notification was sent from your website at katerinav.com
          </p>
        </div>
      `,
    });

    // Return success
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
