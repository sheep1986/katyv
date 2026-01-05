'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function ScrollRestoration() {
  const pathname = usePathname();

  // Disable browser's automatic scroll restoration immediately
  useIsomorphicLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top on initial load (before paint)
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Handle scroll on navigation
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
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
