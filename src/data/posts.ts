export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
  readTime: string;
  tags: string[];
}

export const author = {
  name: 'Katerina Vladimirovna',
  role: 'EQ Coach & Leadership Consultant',
  image: '/images/WhatsApp Image 2026-01-03 at 21.29.46.jpeg',
  bio: 'I help leaders develop emotional mastery for more fulfilling careers, relationships, and lives. With over 15 years of experience, I have guided hundreds of executives and entrepreneurs to breakthrough results.',
};

export const posts: BlogPost[] = [
  {
    slug: 'science-of-emotional-intelligence',
    title: 'The Science of Emotional Intelligence: Why EQ Matters More Than IQ',
    excerpt: 'Research from Harvard Business School shows that emotional intelligence accounts for nearly 90% of what sets high performers apart. Discover why developing your EQ is the most important investment you can make in your career and relationships.',
    readTime: '6 min read',
    tags: ['Emotional Intelligence', 'Research', 'Career Growth', 'Leadership'],
    content: `
# The Science of Emotional Intelligence: Why EQ Matters More Than IQ

For decades, we've been told that intelligence—as measured by IQ—is the primary predictor of success. Yet research consistently shows that emotional intelligence (EQ) plays a far more significant role in determining who thrives in work and life.

## What the Research Shows

A groundbreaking study from Harvard Business School found that emotional intelligence accounts for nearly 90% of what sets high performers apart from their peers. This isn't about being "emotional"—it's about being intelligent with emotions.

### The Four Pillars of EQ

1. **Self-Awareness**: The ability to recognize and understand your own emotions
2. **Self-Regulation**: Managing your emotional responses effectively
3. **Social Awareness**: Reading and understanding others' emotions
4. **Relationship Management**: Using emotional intelligence in interactions

## Why EQ Matters for Leaders

Leaders with high EQ create environments where teams thrive. They:

- Navigate difficult conversations with grace
- Inspire and motivate through connection, not coercion
- Make better decisions by incorporating emotional data
- Build cultures of psychological safety

## Developing Your EQ

Unlike IQ, which remains relatively stable throughout life, emotional intelligence can be developed at any age. Through targeted practice and coaching, you can:

- Expand your emotional vocabulary
- Learn to pause before reacting
- Develop deeper empathy
- Master the art of influence

The journey to emotional mastery starts with awareness. Are you ready to invest in the skill that matters most?

---

*Ready to develop your emotional intelligence? [Book a free discovery call](/contact) to explore how EQ coaching can transform your leadership and relationships.*
    `,
    category: 'Featured',
    date: 'January 2, 2026',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    featured: true,
  },
  {
    slug: 'leadership-eq-upgrade',
    title: '5 Signs Your Leadership Style Needs an EQ Upgrade',
    excerpt: 'Are you leading with logic alone? These five warning signs reveal when it\'s time to develop your emotional intelligence as a leader.',
    readTime: '5 min read',
    tags: ['Leadership', 'Self-Assessment', 'Team Management', 'Growth'],
    content: `
# 5 Signs Your Leadership Style Needs an EQ Upgrade

Leadership isn't just about strategy and execution—it's about people. And people are emotional beings. If you're leading with logic alone, you might be missing the most powerful tool in your leadership toolkit.

## Sign #1: Your Team Avoids Giving You Feedback

When your direct reports hesitate to share concerns or disagree with you, it's often a sign that they don't feel emotionally safe. High-EQ leaders create environments where honest feedback flows freely.

## Sign #2: Difficult Conversations Keep Getting Postponed

If you find yourself putting off hard conversations, it may be because you lack confidence in navigating the emotional territory. EQ gives you the skills to have these conversations with both honesty and compassion.

## Sign #3: You're Often Surprised by Team Dynamics

Do conflicts seem to "come out of nowhere"? Leaders with strong emotional intelligence pick up on subtle tensions before they escalate, allowing them to address issues proactively.

## Sign #4: High Performers Keep Leaving

People leave managers, not companies. If you're losing your best people, consider whether they feel seen, valued, and understood—the hallmarks of emotionally intelligent leadership.

## Sign #5: You Take Criticism Personally

When feedback triggers defensiveness, it limits your growth. High-EQ leaders can receive criticism with curiosity rather than reactivity, extracting value from every perspective.

## The Good News

Emotional intelligence isn't fixed—it can be developed. With intention and practice, you can transform your leadership style and create the kind of environment where both you and your team thrive.

---

*Want to assess your leadership EQ? [Take our free assessment](/eq-assessment) to discover your strengths and growth areas.*
    `,
    category: 'Leadership',
    date: 'December 28, 2025',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  },
  {
    slug: 'identify-emotional-triggers',
    title: 'How to Identify Your Emotional Triggers (And What to Do About Them)',
    excerpt: 'Understanding your triggers is the first step to emotional freedom. Learn my 3-step process for identifying and managing reactive patterns.',
    readTime: '7 min read',
    tags: ['Self-Awareness', 'Emotional Triggers', 'Personal Development', 'Mindfulness'],
    content: `
# How to Identify Your Emotional Triggers (And What to Do About Them)

We all have them—those situations, words, or behaviors that instantly hijack our emotions. One moment you're calm and composed; the next, you're flooded with anger, anxiety, or hurt. These are your emotional triggers.

## What Are Emotional Triggers?

Triggers are stimuli that provoke intense emotional reactions, often disproportionate to the current situation. They're usually connected to past experiences, unmet needs, or core beliefs about ourselves.

## The 3-Step Process

### Step 1: Notice the Physical Response

Your body often knows before your mind. Pay attention to:
- Tension in your jaw, shoulders, or stomach
- Changes in breathing
- Heat rising in your face or chest
- The urge to flee or fight

### Step 2: Name the Trigger Pattern

Look for common themes. Ask yourself:
- What situations consistently activate me?
- What was happening just before the reaction?
- Who tends to trigger me, and why?

### Step 3: Trace It Back

Most triggers have roots. Consider:
- When have I felt this way before?
- What does this remind me of?
- What belief or need is being threatened?

## Moving from Reactive to Responsive

Once you understand your triggers, you can:
1. Create space between stimulus and response
2. Challenge the story you're telling yourself
3. Choose a conscious response aligned with your values

The goal isn't to eliminate triggers—it's to recognize them so quickly that they lose their power over you.

---

*Ready to master your emotional triggers? [Book a session](/contact) to work through your patterns with guided support.*
    `,
    category: 'Self-Awareness',
    date: 'December 21, 2025',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80',
  },
  {
    slug: 'emotional-validation',
    title: 'The Art of Emotional Validation: Why "I Understand" Isn\'t Enough',
    excerpt: 'True connection requires more than sympathy. Discover the four levels of emotional validation that transform relationships.',
    readTime: '6 min read',
    tags: ['Relationships', 'Communication', 'Empathy', 'Connection'],
    content: `
# The Art of Emotional Validation: Why "I Understand" Isn't Enough

When someone shares their feelings with us, our instinct is often to help, fix, or reassure. But what people need most is to feel truly heard and validated. And that requires more than saying "I understand."

## Why Validation Matters

Emotional validation communicates: "Your feelings make sense. You're not crazy for feeling this way." This simple acknowledgment can:
- Defuse intense emotions
- Deepen trust and connection
- Help the other person process their experience
- Create safety for honest communication

## The Four Levels of Validation

### Level 1: Being Present
Give your full attention. Put down your phone. Make eye contact. Show through your body language that you're completely there.

### Level 2: Accurate Reflection
Reflect back what you're hearing: "It sounds like you're feeling frustrated because the project was dismissed without consideration."

### Level 3: Reading the Unspoken
Validate emotions they might not be expressing directly: "I imagine that might also feel a bit scary, wondering what this means for your future there."

### Level 4: Historical Validation
Connect their reaction to their history: "Given what happened with your last manager, it makes complete sense that you'd be worried about this."

## Common Validation Mistakes

- **Rushing to solutions**: "Here's what you should do..."
- **Minimizing**: "It's not that bad..."
- **Comparing**: "I went through something similar..."
- **Toxic positivity**: "Just look on the bright side!"

## Practice Makes Perfect

Validation is a skill that develops with practice. Start by simply listening longer before you respond, and notice how your relationships transform.

---

*Want to deepen your relationship skills? [Explore our coaching programs](/pricing) designed for relationship transformation.*
    `,
    category: 'Relationships',
    date: 'December 15, 2025',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80',
  },
  {
    slug: '90-second-rule',
    title: 'The 90-Second Rule: How to Process Any Emotion',
    excerpt: 'Neuroscientist Jill Bolte Taylor discovered that emotions only last 90 seconds. Here\'s how to use this insight to master emotional regulation.',
    readTime: '5 min read',
    tags: ['Emotional Regulation', 'Neuroscience', 'Stress Management', 'Techniques'],
    content: `
# The 90-Second Rule: How to Process Any Emotion

Here's a liberating truth: the chemical lifespan of an emotion is just 90 seconds. Neuroscientist Dr. Jill Bolte Taylor discovered that when an emotion is triggered, it takes less than 90 seconds for the chemical reaction to run its course through your body.

## So Why Do Emotions Last Longer?

If emotions naturally fade in 90 seconds, why do we sometimes feel anxious for hours or angry for days? The answer: we keep re-triggering the cycle through our thoughts.

Every time you replay the upsetting event, tell yourself a story about what it means, or imagine future scenarios—you restart the 90-second chemical cascade.

## How to Use the 90-Second Rule

### 1. Feel It Fully
When an emotion arises, allow yourself to experience it completely. Don't resist, suppress, or analyze. Just feel.

### 2. Notice Where It Lives
Where in your body do you feel this emotion? Chest? Stomach? Throat? Bring curious attention to the physical sensations.

### 3. Breathe Into It
Take slow, deep breaths. Imagine breathing directly into the area where you feel the emotion most intensely.

### 4. Watch It Change
Stay present and notice how the sensation shifts, moves, or dissipates. Emotions are energy in motion—they're meant to flow.

### 5. Catch the Stories
When your mind tries to restart the cycle with thoughts and narratives, gently notice and return to pure sensation.

## The Freedom This Brings

Once you truly understand that you're never more than 90 seconds away from calm, emotions become less frightening. You develop confidence in your ability to handle whatever arises.

This doesn't mean emotions are unimportant—they carry vital information. But you can learn to receive that information without being overwhelmed by it.

---

*Ready to master emotional regulation? [Book a free discovery call](/contact) to learn more about the CORE EQ Framework.*
    `,
    category: 'Stress & Anxiety',
    date: 'December 8, 2025',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
  },
  {
    slug: 'difficult-conversations-framework',
    title: 'Difficult Conversations: A Framework for Honest Communication',
    excerpt: 'The conversations we avoid become the walls in our relationships. Learn my CLEAR framework for navigating any difficult discussion.',
    readTime: '7 min read',
    tags: ['Communication', 'Leadership', 'Conflict Resolution', 'Frameworks'],
    content: `
# Difficult Conversations: A Framework for Honest Communication

The conversations we avoid don't go away—they become walls. Unspoken truths create distance in relationships, breed resentment, and limit our growth. Yet most of us never learned how to navigate emotionally charged discussions with skill.

## Why We Avoid Hard Conversations

- Fear of damaging the relationship
- Uncertainty about how to express ourselves
- Worry about the other person's reaction
- Past experiences of conversations going badly

## The CLEAR Framework

### C - Center Yourself
Before the conversation, regulate your own nervous system. You can't navigate someone else's emotions if you're dysregulated yourself.

### L - Lead with Curiosity
Start by genuinely trying to understand their perspective. Ask questions before making statements. "Help me understand..." opens doors.

### E - Express Your Experience
Use "I" statements to share your perspective without blame. "I felt concerned when..." is different from "You always..."

### A - Acknowledge Their Reality
Validate their experience, even if you see it differently. "I can see why you'd feel that way given your perspective."

### R - Request Specifically
Be clear about what you need or what you're asking for. Vague complaints lead nowhere; specific requests create paths forward.

## During the Conversation

- **Pause often**: Create space for processing
- **Check understanding**: "What I'm hearing is..."
- **Stay present**: Don't let past grievances hijack the discussion
- **Remember the goal**: Connection, not winning

## After the Conversation

Follow up. Check in on how the other person is feeling. Express appreciation for their willingness to engage. This reinforces that hard conversations can bring you closer.

---

*Want to master difficult conversations? [Explore coaching options](/pricing) to develop your communication skills.*
    `,
    category: 'Leadership',
    date: 'December 1, 2025',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80',
  },
  {
    slug: 'highly-sensitive-person',
    title: 'Your Sensitivity Is a Superpower: Thriving as a Highly Sensitive Person',
    excerpt: 'Being highly sensitive isn\'t a weakness to overcome—it\'s a gift to harness. Here\'s how to turn emotional depth into your greatest strength.',
    readTime: '6 min read',
    tags: ['Sensitivity', 'Self-Awareness', 'Personal Strengths', 'HSP'],
    content: `
# Your Sensitivity Is a Superpower: Thriving as a Highly Sensitive Person

If you've ever been told you're "too sensitive" or that you need to "toughen up," this article is for you. Being highly sensitive isn't a flaw to fix—it's a trait to understand and leverage.

## What Is High Sensitivity?

Approximately 15-20% of the population are Highly Sensitive People (HSPs). This isn't a disorder—it's a normal variation in temperament characterized by:

- Deep processing of experiences
- High emotional reactivity
- Sensitivity to subtleties
- Easy overstimulation

## The Hidden Strengths

### Exceptional Empathy
You pick up on what others miss—subtle shifts in mood, unspoken tensions, hidden needs. This makes you an extraordinary friend, partner, and leader.

### Deep Thinking
You process information thoroughly, leading to insights and creativity that others don't access.

### Rich Inner Life
Your capacity to experience beauty, meaning, and connection runs deep.

### Conscientious Decision-Making
You consider impacts carefully, making you reliable and thoughtful.

## The Challenges

- Overstimulation and overwhelm
- Taking on others' emotions
- Difficulty with criticism
- Need for more downtime than others

## Thriving Strategies

### 1. Honor Your Needs
You need more rest, quiet time, and careful scheduling than others. This isn't weakness—it's self-knowledge.

### 2. Create Boundaries
Learn to distinguish between your emotions and others'. You can be empathic without absorbing everything.

### 3. Reframe the Narrative
Replace "I'm too sensitive" with "I have a gift for depth and nuance."

### 4. Find Your Environment
Seek roles and relationships that appreciate sensitivity rather than pathologizing it.

---

*Ready to harness your sensitivity as a strength? [Book a discovery call](/contact) to explore how EQ coaching can help you thrive.*
    `,
    category: 'Self-Awareness',
    date: 'November 24, 2025',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All Posts') return posts;
  return posts.filter(post => post.category === category);
}
