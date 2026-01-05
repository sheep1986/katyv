'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();

  // Disable browser's automatic scroll restoration on mount
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // Handle scroll on page load and navigation
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      // If there's a hash, scroll to the element after a short delay
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const navHeight = 80; // Account for fixed nav
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      // No hash, scroll to top immediately
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
