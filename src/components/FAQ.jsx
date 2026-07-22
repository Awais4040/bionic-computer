'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { faqs } from '@/lib/seoData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#1E82BC] bg-[#F0F7FF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Got Questions?
          </span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Clear answers to your IT hardware, service & network questions.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-100 rounded-2xl overflow-hidden shadow-sm transition duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`w-full p-6 flex justify-between items-center text-left transition ${openIndex === index ? 'bg-[#F0F7FF] text-[#1E82BC]' : 'bg-white text-[#0B2545] hover:bg-blue-50/50'}`}
              >
                <h3 className="text-base md:text-lg font-bold pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <FiChevronUp className="text-2xl text-[#1E82BC] flex-shrink-0" />
                ) : (
                  <FiChevronDown className="text-2xl text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-blue-50">
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
