'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/data/posts';
import ScrollToTop from '@/components/ScrollToTop';
import styles from './page.module.css';

const categories = ['All Posts', 'Self-Awareness', 'Leadership', 'Relationships', 'Stress & Anxiety'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [email, setEmail] = useState('');

  const filteredPosts = activeCategory === 'All Posts'
    ? posts
    : posts.filter(post => post.category === activeCategory || (activeCategory === 'All Posts' && post.featured));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! Check your inbox for confirmation.');
    setEmail('');
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>Katerina <span>V.</span></Link>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>The Blog</span>
          <h1>EQ <em>Insights</em></h1>
          <p>Practical wisdom for emotional mastery, leadership, and living a more connected life.</p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.statNumber}>EQ</span>
              <span className={styles.statLabel}>Leadership</span>
            </div>
            <div className={styles.heroDivider} />
            <div className={styles.heroStat}>
              <span className={styles.statNumber}>Self</span>
              <span className={styles.statLabel}>Awareness</span>
            </div>
            <div className={styles.heroDivider} />
            <div className={styles.heroStat}>
              <span className={styles.statNumber}>Growth</span>
              <span className={styles.statLabel}>Mindset</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blogContent}>
        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.blogGrid}>
          {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`${styles.blogCard} ${post.featured && index === 0 ? styles.featured : ''}`}
            >
              <div className={styles.blogImage}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={500}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className={styles.blogCardContent}>
                <span className={styles.blogTag}>{post.category.toUpperCase()}</span>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    READ MORE →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.newsletter}>
        <h2>Get EQ Insights Weekly</h2>
        <p>Join 5,000+ leaders receiving practical emotional intelligence tips every Thursday.</p>
        <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </section>
      <ScrollToTop />
    </>
  );
}
