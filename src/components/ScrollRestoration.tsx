'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;

    if (hash) {
      // If there's a hash, scroll to the element after a short delay
      // to allow the page to render
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
