'use client';

import Link from 'next/link';
import styles from './Nav.module.css';

interface NavProps {
  onBookClick?: () => void;
}

export default function Nav({ onBookClick }: NavProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          Katerina <span>V.</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/#about">About</Link>
          <Link href="/#method">Method</Link>
          <Link href="/#results">Results</Link>
          <Link href="/#pricing">Investment</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/eq-assessment" className={styles.navFree}>Free Assessment</Link>
          <button onClick={onBookClick} className={styles.navCta}>
            BOOK A CALL
          </button>
        </div>
      </div>
    </nav>
  );
}
