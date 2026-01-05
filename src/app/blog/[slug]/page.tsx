import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, author } from '@/data/posts';
import styles from './page.module.css';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const siteUrl = 'https://katerinav.com';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Katerina Vladimirovna`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: 'Katerina Vladimirovna - EQ Coach',
      images: [
        {
          url: post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: ['Katerina Vladimirovna'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>Katerina <span>V.</span></Link>
          <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
        </div>
      </nav>

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>

          <div className={styles.authorBar}>
            <div className={styles.authorInfo}>
              <div className={styles.authorImage}>
                <Image
                  src={author.image}
                  alt={author.name}
                  width={48}
                  height={48}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <div className={styles.authorText}>
                <span className={styles.authorName}>{author.name}</span>
                <span className={styles.authorDate}>{post.date}</span>
              </div>
            </div>
            <div className={styles.shareIcons}>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://katerinav.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareIcon}
                aria-label="Share on LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://katerinav.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareIcon}
                aria-label="Share on X"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`I thought you might find this interesting: https://katerinav.com/blog/${post.slug}`)}`}
                className={styles.shareIcon}
                aria-label="Share via Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              <a
                href={`https://katerinav.com/blog/${post.slug}`}
                className={styles.shareIcon}
                aria-label="Copy link"
                title="Copy link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </a>
            </div>
          </div>
        </header>

        <div className={styles.heroImage}>
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            priority
          />
        </div>

        <div className={styles.content} dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />

        {post.tags && post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}

        <div className={styles.shareBottom}>
          <span className={styles.shareLabel}>Share this article</span>
          <div className={styles.shareIconsBottom}>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://katerinav.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareIconBottom}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://katerinav.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareIconBottom}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X / Twitter</span>
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`I thought you might find this interesting: https://katerinav.com/blog/${post.slug}`)}`}
              className={styles.shareIconBottom}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className={styles.authorCard}>
          <div className={styles.authorCardImage}>
            <Image
              src={author.image}
              alt={author.name}
              width={80}
              height={80}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <div className={styles.authorCardContent}>
            <span className={styles.authorCardLabel}>Written by</span>
            <h4 className={styles.authorCardName}>{author.name}</h4>
            <p className={styles.authorCardRole}>{author.role}</p>
            <p className={styles.authorCardBio}>{author.bio}</p>
          </div>
        </div>

        <div className={styles.cta}>
          <h3>Ready to develop your emotional intelligence?</h3>
          <p>Book a free 15-minute discovery call to explore how EQ coaching can transform your leadership and relationships.</p>
          <Link href="/#contact" className={styles.ctaBtn}>BOOK YOUR FREE CALL</Link>
        </div>

        {relatedPosts.length > 0 && (
          <div className={styles.relatedPosts}>
            <h3>Related Articles</h3>
            <div className={styles.relatedGrid}>
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={400}
                      height={250}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <span className={styles.relatedCategory}>{relatedPost.category}</span>
                    <h4>{relatedPost.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}

function formatContent(content: string): string {
  // Simple markdown-like formatting
  let result = content
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/---/g, '<hr>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Wrap lists
  result = result.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>');
  result = result.replace(/<\/ul>\s*<ul>/g, '');

  return result;
}
