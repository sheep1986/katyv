'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import ScrollToTop from '@/components/ScrollToTop';
import styles from './page.module.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`.${styles.animate}`).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav onBookClick={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Emotional Intelligence Coach</p>
            <h1>Master Your <em>Emotions,</em> Transform Your Life</h1>
            <p className={styles.heroText}>
              I help high-achievers and sensitive souls develop emotional mastery to lead with clarity, build deeper connections, and live authentically.
            </p>
            <button onClick={() => setIsModalOpen(true)} className={styles.heroBtn}>
              BEGIN YOUR JOURNEY →
            </button>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <h3>500+</h3>
                <p>Lives Transformed</p>
              </div>
              <div className={styles.stat}>
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.stat}>
                <h3>98%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/WhatsApp Image 2026-01-03 at 21.29.48 (1).jpeg"
              alt="Katerina Vladimirovna - Certified EQ Coach and Emotional Intelligence Trainer"
              width={600}
              height={800}
              priority
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about} id="about">
        <div className={styles.aboutInner}>
          <div className={styles.aboutImages}>
            <Image
              src="/images/WhatsApp Image 2026-01-03 at 21.29.48.jpeg"
              alt="Katerina Vladimirovna - EQ Training and Emotional Intelligence Coaching Expert"
              width={500}
              height={600}
            />
            <Image
              src="/images/WhatsApp Image 2026-01-03 at 21.29.47 (1).jpeg"
              alt="Emotional Intelligence Coach Katerina V - Professional EQ Assessment Sessions"
              width={275}
              height={350}
              className={styles.aboutOverlay}
            />
          </div>
          <div className={styles.aboutContent}>
            <p className="section-eyebrow">About Katerina</p>
            <h2>Emotions Are Not Obstacles — They Are <em>Intelligence</em></h2>
            <p>In a world that taught us to suppress what we feel, I guide visionary leaders and sensitive souls to harness their emotional landscape as their greatest strategic advantage.</p>
            <p>Through neuroscience, somatic wisdom, and evidence-based coaching, we transform emotions into clarity, connection, and conscious leadership.</p>
            <div className={styles.aboutFeatures}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎓</div>
                <div>
                  <h4>Certified Practitioner</h4>
                  <p>Six Seconds Global EQ</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🧠</div>
                <div>
                  <h4>Neuroscience-Based</h4>
                  <p>Evidence-driven methods</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🌍</div>
                <div>
                  <h4>Global Reach</h4>
                  <p>Clients in 30+ countries</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>💎</div>
                <div>
                  <h4>Premium Experience</h4>
                  <p>High-touch coaching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Help */}
      <section className={styles.whoIHelp} id="who">
        <div className={styles.whoInner}>
          <div className="section-header">
            <p className="section-eyebrow">Who I Work With</p>
            <h2>Is EQ Coaching Right For You?</h2>
            <p>I work with driven individuals ready to transform their relationship with emotions.</p>
          </div>
          <div className={styles.whoCards}>
            {[
              { title: 'Executives & Leaders', desc: 'You lead teams but struggle with difficult conversations, managing stress, or inspiring others authentically.' },
              { title: 'High Achievers', desc: "You've achieved success but feel disconnected, anxious, or like something's missing despite your accomplishments." },
              { title: 'Sensitive Souls', desc: 'You feel deeply and want to harness your sensitivity as a strength rather than feeling overwhelmed by it.' },
              { title: 'Relationship Seekers', desc: 'You want deeper connections but find yourself in repeating patterns or struggling to communicate your needs.' },
            ].map((card, i) => (
              <div key={i} className={`${styles.whoCard} ${styles.animate}`}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EQ */}
      <section className={styles.whyEq}>
        <div className={styles.whyEqInner}>
          <div className="section-header">
            <p className="section-eyebrow">Why Emotional Intelligence?</p>
            <h2>EQ is the #1 Predictor of Success</h2>
            <p>Research shows emotional intelligence accounts for 58% of performance across all job types.</p>
          </div>
          <div className={styles.eqCards}>
            {[
              { icon: '💼', title: 'Career & Leadership', stat: '90%', label: 'of top performers', desc: 'Leaders with high EQ create teams that are 20% more productive.' },
              { icon: '❤️', title: 'Relationships', stat: '3x', label: 'more satisfied', desc: 'High EQ means dramatically better personal relationships.' },
              { icon: '🧘', title: 'Wellbeing', stat: '58%', label: 'less anxiety', desc: 'Emotional regulation directly reduces stress levels.' },
            ].map((card, i) => (
              <div key={i} className={`${styles.eqCard} ${styles.animate}`}>
                <div className={styles.eqCardIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
                <div className={styles.eqCardStat}>{card.stat}</div>
                <div className={styles.eqCardLabel}>{card.label}</div>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className={styles.method} id="method">
        <div className={styles.methodInner}>
          <div className={`section-header ${styles.methodHeader}`}>
            <p className="section-eyebrow">The Method</p>
            <h2>The CORE EQ Framework™</h2>
            <p>My proprietary 4-pillar system for lasting emotional transformation.</p>
          </div>
          <div className={styles.methodCards}>
            {[
              { num: '01', title: 'Consciousness', sub: 'Awareness', desc: 'Develop self-awareness through somatic sensing and emotional mapping.' },
              { num: '02', title: 'Ownership', sub: 'Responsibility', desc: 'Take radical responsibility for your emotional responses.' },
              { num: '03', title: 'Regulation', sub: 'Mastery', desc: 'Calm your nervous system and process difficult emotions.' },
              { num: '04', title: 'Expression', sub: 'Connection', desc: 'Authentic communication and empathic listening.' },
            ].map((card, i) => (
              <div key={i} className={`${styles.methodCard} ${styles.animate}`}>
                <div className={styles.methodNum}>{card.num}</div>
                <h3>{card.title}</h3>
                <p className={styles.methodCardSub}>{card.sub}</p>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        {[
          'WhatsApp Image 2026-01-03 at 21.29.47.jpeg',
          'WhatsApp Image 2026-01-03 at 21.29.46 (1).jpeg',
          'WhatsApp Image 2026-01-03 at 21.29.46.jpeg',
          'WhatsApp Image 2026-01-03 at 21.29.48 (1).jpeg',
        ].map((img, i) => (
          <div key={i} className={styles.galleryItem}>
            <Image
              src={`/images/${img}`}
              alt={`Katerina Vladimirovna EQ Coach - Image ${i + 1}`}
              width={400}
              height={400}
            />
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials} id="results">
        <div className={styles.testimonialsInner}>
          <div className="section-header">
            <p className="section-eyebrow">Transformations</p>
            <h2>Real Results, Real People</h2>
          </div>
          <div className={styles.testimonialCards}>
            {[
              { tag: 'Promoted 2x in 18 months', quote: 'I went from dreading Mondays to leading with genuine confidence. My sensitivity became my superpower as a leader.', name: 'Sarah Chen', role: 'VP of Product', initials: 'SC' },
              { tag: 'Transformed his marriage', quote: 'After 15 years, we were roommates. Through EQ work, I learned to truly hear my wife. We fell in love again.', name: 'Michael Torres', role: 'Surgeon', initials: 'MT' },
              { tag: 'Anxiety reduced 80%', quote: "Panic attacks before presentations are gone. Now I actually enjoy speaking. The nervous system work was life-changing.", name: 'Priya Patel', role: 'Consultant', initials: 'PP' },
            ].map((testimonial, i) => (
              <div key={i} className={`${styles.testimonialCard} ${styles.animate}`}>
                <span className={styles.testimonialQuote}>"</span>
                <span className={styles.testimonialTag}>{testimonial.tag}</span>
                <p>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{testimonial.initials}</div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing} id="pricing">
        <div className={styles.pricingInner}>
          <div className="section-header">
            <p className="section-eyebrow">Investment</p>
            <h2>Choose Your Path</h2>
          </div>
          <div className={styles.pricingCards}>
            <div className={`${styles.pricingCard} ${styles.animate}`}>
              <p className={styles.pricingDuration}>Single Session</p>
              <h3>EQ Intensive</h3>
              <p className={styles.pricingPrice}>€200</p>
              <p>A powerful 60-minute deep-dive for breakthrough clarity.</p>
              <ul className={styles.pricingFeatures}>
                <li>60-minute deep-dive session</li>
                <li>Personalized EQ insights</li>
                <li>Breakthrough strategies</li>
                <li>Follow-up action plan</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className={styles.pricingCta}>BOOK SESSION</button>
            </div>
            <div className={`${styles.pricingCard} ${styles.featured} ${styles.animate}`}>
              <span className={styles.pricingBadge}>BEST VALUE</span>
              <p className={styles.pricingDuration}>8 Weeks</p>
              <h3>CORE Transformation</h3>
              <p className={styles.pricingPrice}>€1,400</p>
              <p>The complete journey through my CORE framework.</p>
              <ul className={styles.pricingFeatures}>
                <li>8 weekly 60-min sessions</li>
                <li>Full assessment suite</li>
                <li>WhatsApp support</li>
                <li>Techniques library</li>
                <li>Save €200</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className={styles.pricingCta}>APPLY NOW</button>
            </div>
            <div className={`${styles.pricingCard} ${styles.animate}`}>
              <p className={styles.pricingDuration}>6 Months</p>
              <h3>VIP Immersion</h3>
              <p className={styles.pricingPrice}>€4,200</p>
              <p>White-glove support for executives.</p>
              <ul className={styles.pricingFeatures}>
                <li>24 weekly 60-min sessions</li>
                <li>Unlimited messaging</li>
                <li>Priority scheduling</li>
                <li>Save €600</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className={styles.pricingCta}>INQUIRE</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} id="faq">
        <div className={styles.faqInner}>
          <div className="section-header">
            <p className="section-eyebrow">Questions</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqItems}>
            {[
              { q: 'What is Emotional Intelligence (EQ)?', a: "Emotional Intelligence is the ability to recognize, understand, and manage your own emotions while also being able to recognize, understand, and influence the emotions of others. It's a skill that can be developed and has been proven to be more important than IQ for success in life and work." },
              { q: 'How is EQ coaching different from therapy?', a: "While therapy often focuses on healing past wounds, EQ coaching is forward-focused and action-oriented. We work on developing practical skills for emotional mastery, communication, and leadership. I help you build new capabilities rather than process trauma (though the two can complement each other)." },
              { q: 'How long until I see results?', a: 'Most clients report noticeable shifts within the first 2-3 sessions. However, lasting transformation typically occurs over 8-12 weeks of consistent practice. The CORE Transformation program is designed for sustainable, long-term change.' },
              { q: 'Do you work with clients outside Europe?', a: "Yes! I work with clients worldwide via video call. I've coached individuals in over 30 countries. Sessions are conducted in English, and I accommodate various time zones." },
              { q: 'What happens in a typical session?', a: "Each 60-minute session includes check-in, focused coaching on your current challenge, practical exercises, and action steps. We use a combination of neuroscience-based techniques, somatic practices, and evidence-based coaching methods tailored to your needs." },
            ].map((faq, i) => (
              <div key={i} className={`${styles.faqItem} ${activeFaq === i ? styles.active : ''}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  <span>+</span>
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} id="contact">
        <div className={styles.ctaInner}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>Start Your Journey</span>
            <h2>Ready to Transform Your Emotional Intelligence?</h2>
            <p>Book a free 30-minute discovery call. We'll discuss your goals, challenges, and how EQ coaching can help you achieve the breakthrough you're looking for.</p>
            <div className={styles.ctaButtons}>
              <button onClick={() => setIsModalOpen(true)} className={styles.ctaBtn}>
                BOOK FREE DISCOVERY CALL
              </button>
              <a href="/eq-assessment" className={styles.ctaBtnSecondary}>
                Take Free EQ Assessment
              </a>
            </div>
            <p className={styles.ctaNote}>No pressure. No pitch. Just clarity.</p>
          </div>
          <div className={styles.ctaFeatures}>
            <div className={styles.ctaFeature}>
              <span className={styles.ctaIcon}>✓</span>
              <span>30-minute video call</span>
            </div>
            <div className={styles.ctaFeature}>
              <span className={styles.ctaIcon}>✓</span>
              <span>Personalized insights</span>
            </div>
            <div className={styles.ctaFeature}>
              <span className={styles.ctaIcon}>✓</span>
              <span>No obligation</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ScrollToTop />
    </>
  );
}
