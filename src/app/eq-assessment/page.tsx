'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';
import styles from './page.module.css';

// Based on Daniel Goleman's 5 components of Emotional Intelligence
const questions = [
  // Self-Awareness (Q1-4)
  {
    id: 1,
    category: 'selfAwareness',
    text: 'When you experience a strong negative emotion, how quickly can you identify exactly what you\'re feeling?',
    options: [
      { text: 'I often can\'t tell what I\'m feeling until much later', score: 1 },
      { text: 'I know I feel bad, but struggle to name the specific emotion', score: 2 },
      { text: 'I can usually identify the emotion within a few minutes', score: 3 },
      { text: 'I recognize emotions immediately and can distinguish nuances (e.g., disappointment vs. frustration)', score: 4 }
    ]
  },
  {
    id: 2,
    category: 'selfAwareness',
    text: 'How aware are you of your emotional triggers - the specific situations that tend to provoke strong reactions in you?',
    options: [
      { text: 'I\'m often surprised by my emotional reactions', score: 1 },
      { text: 'I know a few triggers but am often caught off guard', score: 2 },
      { text: 'I\'m aware of most situations that trigger strong emotions', score: 3 },
      { text: 'I have a clear map of my triggers and understand their origins', score: 4 }
    ]
  },
  {
    id: 3,
    category: 'selfAwareness',
    text: 'When receiving feedback about your behavior or performance, you typically...',
    options: [
      { text: 'Feel defensive and focus on why the feedback is wrong', score: 1 },
      { text: 'Accept it outwardly but internally dismiss it', score: 2 },
      { text: 'Consider it thoughtfully, even when it\'s uncomfortable', score: 3 },
      { text: 'Actively seek patterns in feedback and use it for growth', score: 4 }
    ]
  },
  {
    id: 4,
    category: 'selfAwareness',
    text: 'How well do you understand your core values and how they influence your decisions?',
    options: [
      { text: 'I haven\'t really thought about my core values', score: 1 },
      { text: 'I have a vague sense of what matters to me', score: 2 },
      { text: 'I know my values and usually make decisions aligned with them', score: 3 },
      { text: 'I have a clear value system and use it to navigate complex decisions', score: 4 }
    ]
  },
  // Self-Regulation (Q5-8)
  {
    id: 5,
    category: 'selfRegulation',
    text: 'When you feel angry in a professional setting, you typically...',
    options: [
      { text: 'React immediately - sometimes I regret what I say', score: 1 },
      { text: 'Suppress the feeling, but it affects my behavior and mood', score: 2 },
      { text: 'Take a moment to calm down before responding', score: 3 },
      { text: 'Acknowledge the emotion, understand its source, and respond constructively', score: 4 }
    ]
  },
  {
    id: 6,
    category: 'selfRegulation',
    text: 'When facing a major setback or failure, how do you typically respond?',
    options: [
      { text: 'I dwell on it and have trouble moving forward', score: 1 },
      { text: 'I try to forget about it and move on without processing it', score: 2 },
      { text: 'I allow myself to feel disappointed, then focus on solutions', score: 3 },
      { text: 'I analyze what happened objectively and extract lessons for the future', score: 4 }
    ]
  },
  {
    id: 7,
    category: 'selfRegulation',
    text: 'How do you handle situations where you need to wait for results or delayed gratification?',
    options: [
      { text: 'I find it very difficult to wait and often make impulsive decisions', score: 1 },
      { text: 'I can wait but feel anxious and distracted', score: 2 },
      { text: 'I manage the wait fairly well with occasional impatience', score: 3 },
      { text: 'I\'m comfortable with uncertainty and can stay focused on long-term goals', score: 4 }
    ]
  },
  {
    id: 8,
    category: 'selfRegulation',
    text: 'When your plans change unexpectedly, you typically...',
    options: [
      { text: 'Feel frustrated and have trouble adapting', score: 1 },
      { text: 'Eventually adapt but it takes significant mental energy', score: 2 },
      { text: 'Adjust fairly quickly while acknowledging disappointment', score: 3 },
      { text: 'Embrace the change as an opportunity and adapt with ease', score: 4 }
    ]
  },
  // Motivation (Q9-12)
  {
    id: 9,
    category: 'motivation',
    text: 'What primarily drives you to achieve your goals?',
    options: [
      { text: 'External rewards like money, recognition, or approval', score: 1 },
      { text: 'A mix of external rewards and avoiding negative consequences', score: 2 },
      { text: 'Internal satisfaction and the desire to improve', score: 3 },
      { text: 'Deep purpose and alignment with my values, regardless of external validation', score: 4 }
    ]
  },
  {
    id: 10,
    category: 'motivation',
    text: 'When you encounter obstacles in pursuing something important, you usually...',
    options: [
      { text: 'Give up or look for an easier path', score: 1 },
      { text: 'Push through with frustration and resentment', score: 2 },
      { text: 'Persist with determination while managing stress', score: 3 },
      { text: 'See obstacles as challenges to overcome and learn from', score: 4 }
    ]
  },
  {
    id: 11,
    category: 'motivation',
    text: 'How do you approach setting and pursuing personal goals?',
    options: [
      { text: 'I rarely set specific goals or struggle to follow through', score: 1 },
      { text: 'I set goals but often abandon them when motivation fades', score: 2 },
      { text: 'I set meaningful goals and generally follow through', score: 3 },
      { text: 'I set ambitious yet achievable goals with clear plans and regularly review progress', score: 4 }
    ]
  },
  {
    id: 12,
    category: 'motivation',
    text: 'When you achieve a significant goal, you typically...',
    options: [
      { text: 'Quickly move on to the next thing without celebrating', score: 1 },
      { text: 'Feel relief more than satisfaction', score: 2 },
      { text: 'Take time to appreciate the achievement before moving forward', score: 3 },
      { text: 'Celebrate, reflect on lessons learned, and use the momentum strategically', score: 4 }
    ]
  },
  // Empathy (Q13-16)
  {
    id: 13,
    category: 'empathy',
    text: 'When someone shares a problem with you, what\'s your first instinct?',
    options: [
      { text: 'Offer solutions or tell them what they should do', score: 1 },
      { text: 'Share a similar experience of my own', score: 2 },
      { text: 'Listen and try to understand how they\'re feeling', score: 3 },
      { text: 'Create space for them to express themselves fully and ask if I can help', score: 4 }
    ]
  },
  {
    id: 14,
    category: 'empathy',
    text: 'In group settings, how well do you pick up on unspoken dynamics?',
    options: [
      { text: 'I rarely notice unless something is very obvious', score: 1 },
      { text: 'I sometimes sense tension but can\'t pinpoint the source', score: 2 },
      { text: 'I usually notice when something feels off in the group', score: 3 },
      { text: 'I pick up on subtle cues and can often identify underlying issues', score: 4 }
    ]
  },
  {
    id: 15,
    category: 'empathy',
    text: 'When someone has a very different perspective than yours, you typically...',
    options: [
      { text: 'Struggle to understand how they could see it that way', score: 1 },
      { text: 'Try to convince them why my perspective is correct', score: 2 },
      { text: 'Agree that we may see things differently and move on', score: 3 },
      { text: 'Genuinely explore their perspective and often gain new insights', score: 4 }
    ]
  },
  {
    id: 16,
    category: 'empathy',
    text: 'How would you describe your ability to sense what others are feeling without them telling you?',
    options: [
      { text: 'I usually need to be told directly', score: 1 },
      { text: 'I notice strong emotions but miss subtle ones', score: 2 },
      { text: 'I\'m fairly attuned to others\' emotional states', score: 3 },
      { text: 'I often sense emotions before the person fully recognizes them themselves', score: 4 }
    ]
  },
  // Social Skills (Q17-20)
  {
    id: 17,
    category: 'socialSkills',
    text: 'When you need to have a difficult conversation, you typically...',
    options: [
      { text: 'Avoid it or delay until the situation escalates', score: 1 },
      { text: 'Have the conversation but struggle to stay calm or clear', score: 2 },
      { text: 'Address it directly while being mindful of the other person', score: 3 },
      { text: 'Navigate it skillfully, balancing honesty with compassion', score: 4 }
    ]
  },
  {
    id: 18,
    category: 'socialSkills',
    text: 'How effectively do you influence others without using authority or pressure?',
    options: [
      { text: 'I struggle to get buy-in unless I have formal authority', score: 1 },
      { text: 'I can sometimes persuade others but it feels like an effort', score: 2 },
      { text: 'I rely on facts and logic to make my case', score: 3 },
      { text: 'I naturally create buy-in by connecting with others\' values and motivations', score: 4 }
    ]
  },
  {
    id: 19,
    category: 'socialSkills',
    text: 'In team or collaborative settings, you typically...',
    options: [
      { text: 'Prefer to work independently and find collaboration draining', score: 1 },
      { text: 'Collaborate when necessary but don\'t seek it out', score: 2 },
      { text: 'Work well with others and contribute to team success', score: 3 },
      { text: 'Elevate team performance by fostering trust and bringing out others\' strengths', score: 4 }
    ]
  },
  {
    id: 20,
    category: 'socialSkills',
    text: 'When conflicts arise between people around you, you typically...',
    options: [
      { text: 'Avoid getting involved or take sides', score: 1 },
      { text: 'Feel uncomfortable but try to help if asked', score: 2 },
      { text: 'Encourage both parties to calm down and talk it out', score: 3 },
      { text: 'Facilitate resolution while addressing underlying issues and emotions', score: 4 }
    ]
  },
];

const categoryLabels: { [key: string]: string } = {
  selfAwareness: 'Self-Awareness',
  selfRegulation: 'Self-Regulation',
  motivation: 'Motivation',
  empathy: 'Empathy',
  socialSkills: 'Social Skills'
};

const categoryDescriptions: { [key: string]: { low: string; high: string } } = {
  selfAwareness: {
    low: 'Developing clearer insight into your emotions and triggers could unlock new levels of personal effectiveness.',
    high: 'You have strong insight into your emotional patterns and how they influence your behavior.'
  },
  selfRegulation: {
    low: 'Building skills to manage impulses and adapt to change could significantly improve your resilience.',
    high: 'You demonstrate excellent ability to manage emotions and adapt to changing circumstances.'
  },
  motivation: {
    low: 'Connecting more deeply with your intrinsic motivation could boost your drive and persistence.',
    high: 'You show strong internal drive and commitment to meaningful goals.'
  },
  empathy: {
    low: 'Developing deeper attunement to others\' emotions could transform your relationships.',
    high: 'You demonstrate strong ability to understand and connect with others\' emotional experiences.'
  },
  socialSkills: {
    low: 'Strengthening your interpersonal skills could open new opportunities for influence and collaboration.',
    high: 'You excel at building relationships, resolving conflicts, and inspiring others.'
  }
};

export default function EQAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (score: number) => {
    setAnswers({ ...answers, [currentQuestion]: score });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateOverallScore = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 4; // 20 questions × 4 max points
    return Math.round((total / maxScore) * 100);
  };

  const calculateCategoryScores = () => {
    const categories = ['selfAwareness', 'selfRegulation', 'motivation', 'empathy', 'socialSkills'];
    const scores: { [key: string]: number } = {};

    categories.forEach(cat => {
      const categoryQuestions = questions.filter(q => q.category === cat);
      const categoryAnswers = categoryQuestions.map((q, idx) => {
        const questionIndex = questions.findIndex(question => question.id === q.id);
        return answers[questionIndex] || 0;
      });
      const total = categoryAnswers.reduce((a, b) => a + b, 0);
      const maxCategoryScore = categoryQuestions.length * 4;
      scores[cat] = Math.round((total / maxCategoryScore) * 100);
    });

    return scores;
  };

  const getResultText = (score: number) => {
    if (score >= 85) {
      return {
        title: "Exceptional Emotional Intelligence",
        text: "Your EQ assessment reveals remarkable emotional mastery. You demonstrate sophisticated self-awareness, strong emotional regulation, and excellent interpersonal skills. Your capacity for empathy and motivation positions you well for leadership roles. EQ coaching could help you leverage these strengths for even greater impact.",
        level: "exceptional"
      };
    } else if (score >= 70) {
      return {
        title: "Strong Emotional Intelligence",
        text: "You show well-developed emotional intelligence across most areas. Your self-awareness and ability to connect with others are notable strengths. With targeted development in specific areas, you could elevate your EQ to exceptional levels and see significant gains in leadership and relationship quality.",
        level: "strong"
      };
    } else if (score >= 55) {
      return {
        title: "Developing Emotional Intelligence",
        text: "You have a solid foundation in emotional intelligence with clear areas of strength. Some aspects of EQ may come more naturally than others. This is an ideal starting point for coaching—with focused development, you can expect meaningful improvements in both your professional effectiveness and personal fulfillment.",
        level: "developing"
      };
    } else if (score >= 40) {
      return {
        title: "Emerging Emotional Awareness",
        text: "You're building the foundation for stronger emotional intelligence. While some areas need development, this awareness itself is valuable. Many highly successful leaders have transformed their EQ from similar starting points. Dedicated practice and guidance can lead to remarkable growth.",
        level: "emerging"
      };
    } else {
      return {
        title: "Opportunity for Transformation",
        text: "Emotional intelligence is a skill set that can be dramatically developed at any stage. Your results suggest significant potential for growth across all EQ dimensions. With commitment and proper guidance, you can develop the emotional mastery that drives success in career, relationships, and life satisfaction.",
        level: "opportunity"
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const score = calculateOverallScore();
  const categoryScores = calculateCategoryScores();
  const result = getResultText(score);

  const getLowestCategories = () => {
    const sorted = Object.entries(categoryScores).sort((a, b) => a[1] - b[1]);
    return sorted.slice(0, 2);
  };

  if (showResults) {
    const lowestCategories = getLowestCategories();

    return (
      <>
        <nav className={styles.nav}>
          <div className={styles.navInner}>
            <Link href="/" className={styles.logo}>Katerina <span>V.</span></Link>
            <Link href="/" className={styles.backLink}>← Back to Home</Link>
          </div>
        </nav>

        <section className={styles.results}>
          <div className={styles.resultsHeader}>
            <span className={styles.resultsEyebrow}>Your Results</span>
            <div className={styles.scoreCircle}>
              <div className={styles.scoreNumber}>{score}</div>
              <div className={styles.scoreLabel}>EQ SCORE</div>
            </div>
            <h2>{result.title}</h2>
            <p className={styles.resultsText}>{result.text}</p>
          </div>

          <div className={styles.categories}>
            {Object.entries(categoryScores).map(([category, catScore]) => (
              <div key={category} className={styles.category}>
                <div className={styles.categoryHeader}>
                  <h4>{categoryLabels[category]}</h4>
                  <span className={styles.categoryScore}>{catScore}%</span>
                </div>
                <div className={styles.categoryBar}>
                  <div className={styles.categoryFill} style={{ width: `${catScore}%` }} />
                </div>
                <p className={styles.categoryDesc}>
                  {catScore >= 70 ? categoryDescriptions[category].high : categoryDescriptions[category].low}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.focusAreas}>
            <h3>Recommended Focus Areas</h3>
            <div className={styles.focusGrid}>
              {lowestCategories.map(([category]) => (
                <div key={category} className={styles.focusCard}>
                  <span className={styles.focusIcon}>○</span>
                  <h4>{categoryLabels[category]}</h4>
                  <p>{categoryDescriptions[category].low}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.nextSteps}>
            <h3>Ready to Elevate Your EQ?</h3>
            <p>A personalized coaching program can accelerate your emotional intelligence development, helping you achieve breakthrough results in leadership, relationships, and personal fulfillment.</p>
            <Link href="/#contact" className={styles.ctaBtn}>BOOK A FREE DISCOVERY CALL</Link>
          </div>
        </section>
        <ScrollToTop />
      </>
    );
  }

  const question = questions[currentQuestion];

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
          <span className={styles.heroEyebrow}>Free Assessment</span>
          <h1>Discover Your <em>EQ Score</em></h1>
          <p>This comprehensive 20-question assessment measures five key dimensions of emotional intelligence based on proven psychological frameworks.</p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop"
            alt="Person reflecting"
            width={600}
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section className={styles.assessment}>
        <div className={styles.progressContainer}>
          <div className={styles.progressInfo}>
            <span className={styles.progressText}>Question {currentQuestion + 1} of {questions.length}</span>
            <span className={styles.progressCategory}>{categoryLabels[question.category]}</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className={styles.question}>
          <h2>{question.text}</h2>
          <div className={styles.options}>
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`${styles.option} ${answers[currentQuestion] === option.score ? styles.selected : ''}`}
                onClick={() => handleOptionSelect(option.score)}
              >
                <div className={styles.optionCircle} />
                <span className={styles.optionText}>{option.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.navButtons}>
          <button
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={handlePrev}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={handleNext}
            disabled={answers[currentQuestion] === undefined}
          >
            {currentQuestion === questions.length - 1 ? 'See My Results →' : 'Next →'}
          </button>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
