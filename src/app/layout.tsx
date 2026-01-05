import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ScrollRestoration from "@/components/ScrollRestoration";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Katerina Vladimirovna | EQ Coach & Emotional Intelligence Training",
  description: "Transform your leadership and relationships with certified EQ coaching. Katerina Vladimirovna offers emotional intelligence training, EQ assessments, and personalized coaching for executives and professionals worldwide.",
  keywords: "EQ Coach, Emotional Intelligence Coach, EQ Training, Emotional Intelligence Training, EQ Assessment, Leadership Coaching, Executive Coach, Emotional Mastery, Self-Awareness Coach",
  authors: [{ name: "Katerina Vladimirovna" }],
  metadataBase: new URL('https://katerinav.com'),
  openGraph: {
    title: "Katerina Vladimirovna | EQ Coach & Emotional Intelligence Training",
    description: "Transform your leadership and relationships with certified EQ coaching and emotional intelligence training.",
    type: "website",
    url: "https://katerinav.com",
    siteName: "Katerina Vladimirovna - EQ Coach",
    images: [
      {
        url: "/images/WhatsApp Image 2026-01-03 at 21.29.46.jpeg",
        width: 1200,
        height: 630,
        alt: "Katerina Vladimirovna - EQ Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katerina Vladimirovna | EQ Coach",
    description: "Transform your leadership and relationships with certified EQ coaching.",
    images: ["/images/WhatsApp Image 2026-01-03 at 21.29.46.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-theme="light" style={{ colorScheme: 'light' }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }
              // Always scroll to top on page load/refresh
              window.scrollTo(0, 0);
              // Clear hash on home page refresh (but keep for other pages)
              if (window.location.pathname === '/' && window.location.hash) {
                history.replaceState(null, '', '/');
              }
            `,
          }}
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body>
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
