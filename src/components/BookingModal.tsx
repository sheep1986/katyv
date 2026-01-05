'use client';

import { useState } from 'react';
import styles from './BookingModal.module.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_URL = 'https://calendly.com/fun-adventures-by-katy/30min';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    service: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    goal: '',
    message: ''
  });

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.service === 'discovery') {
      openCalendlyPopup();
      onClose();
      return;
    }

    alert('Thank you! Katerina will be in touch within 24 hours.');
    onClose();
    setFormData({
      service: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      goal: '',
      message: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>

        <div className={styles.header}>
          <span className={styles.headerTag}>Start Your Journey</span>
          <h2>Book a Session</h2>
          <p>Choose how you&apos;d like to begin your emotional intelligence transformation</p>
        </div>

        <div className={styles.body}>
          <form onSubmit={handleSubmit}>
            <div className={styles.programSection}>
              <p className={styles.sectionTitle}>Select Your Program</p>

              <div
                className={`${styles.programCard} ${styles.discoveryCard} ${formData.service === 'discovery' ? styles.selected : ''}`}
                onClick={() => setFormData({ ...formData, service: 'discovery' })}
              >
                <div className={styles.programHeader}>
                  <h3>Free Discovery Call</h3>
                  <span className={styles.programPrice}>30 min</span>
                </div>
                <p className={styles.programDesc}>Let&apos;s chat about your goals and see if we&apos;re a good fit</p>
              </div>

              <div className={styles.paidPrograms}>
                <div
                  className={`${styles.programCard} ${formData.service === 'single' ? styles.selected : ''}`}
                  onClick={() => setFormData({ ...formData, service: 'single' })}
                >
                  <div className={styles.programHeader}>
                    <h3>EQ Intensive</h3>
                    <span className={styles.programPrice}>€200</span>
                  </div>
                  <p className={styles.programDesc}>Single deep-dive session</p>
                </div>

                <div
                  className={`${styles.programCard} ${formData.service === 'core' ? styles.selected : ''}`}
                  onClick={() => setFormData({ ...formData, service: 'core' })}
                >
                  <div className={styles.programHeader}>
                    <h3>CORE Program</h3>
                    <span className={styles.programPrice}>€1,400</span>
                  </div>
                  <p className={styles.programDesc}>8-week transformation</p>
                </div>

                <div
                  className={`${styles.programCard} ${formData.service === 'vip' ? styles.selected : ''}`}
                  onClick={() => setFormData({ ...formData, service: 'vip' })}
                >
                  <div className={styles.programHeader}>
                    <h3>VIP Immersion</h3>
                    <span className={styles.programPrice}>€4,200</span>
                  </div>
                  <p className={styles.programDesc}>6-month deep partnership</p>
                </div>
              </div>
            </div>

            {formData.service === 'discovery' && (
              <button type="button" className={styles.discoveryBtn} onClick={openCalendlyPopup}>
                Book Your Free Call
              </button>
            )}

            {formData.service && formData.service !== 'discovery' && (
              <div className={styles.formSection}>
                <p className={styles.sectionTitle}>Your Details</p>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Country *</label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                      <option value="">Select country</option>
                      <option value="AT">Austria</option>
                      <option value="BE">Belgium</option>
                      <option value="DE">Germany</option>
                      <option value="ES">Spain</option>
                      <option value="FR">France</option>
                      <option value="IE">Ireland</option>
                      <option value="IT">Italy</option>
                      <option value="NL">Netherlands</option>
                      <option value="PT">Portugal</option>
                      <option value="CH">Switzerland</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>What brings you to EQ coaching?</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  >
                    <option value="">Select your primary goal</option>
                    <option value="leadership">Leadership Development</option>
                    <option value="relationships">Better Relationships</option>
                    <option value="anxiety">Stress & Anxiety Management</option>
                    <option value="communication">Communication Skills</option>
                    <option value="self-awareness">Self-Awareness</option>
                    <option value="career">Career Advancement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Tell me about your situation (optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share what you'd like to work on..."
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>Request Booking</button>
              </div>
            )}

            {!formData.service && (
              <p className={styles.selectPrompt}>Please select a program above to continue</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
