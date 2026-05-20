'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { faqs } from '@/lib/seoData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common queries</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <h3 className="text-lg font-bold text-dark text-left">{faq.question}</h3>
                {openIndex === index ? (
                  <FiChevronUp className="text-2xl text-primary flex-shrink-0" />
                ) : (
                  <FiChevronDown className="text-2xl text-primary flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t-2 border-gray-200">
                  <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
