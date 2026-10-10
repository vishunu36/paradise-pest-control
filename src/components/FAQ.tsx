import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../config/faq';
import './FAQ.css';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section id="faq" className="section section--alt faq" aria-labelledby="faq-title">
      <div className="container">
        <header className="section__header text-center" style={{ margin: '0 auto var(--space-2xl)' }}>
          <span className="section__label">FAQs</span>
          <h2 className="section__title" id="faq-title">Frequently Asked Questions</h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Answers to common questions about our pest control services, coverage areas,
            and how to get in touch.
          </p>
        </header>

        <div className="faq__list" role="list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const itemId = `faq-item-${i}`;
            const answerId = `faq-answer-${i}`;
            return (
              <div
                key={i}
                className={`faq__item${isOpen ? ' faq__item--open' : ''}`}
                role="listitem"
              >
                <button
                  id={itemId}
                  className="faq__question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>
                  {isOpen
                    ? <ChevronUp size={20} className="faq__chevron" aria-hidden="true" />
                    : <ChevronDown size={20} className="faq__chevron" aria-hidden="true" />
                  }
                </button>
                <div
                  id={answerId}
                  className={`faq__answer${isOpen ? ' faq__answer--open' : ''}`}
                  role="region"
                  aria-labelledby={itemId}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
