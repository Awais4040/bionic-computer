'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Do you offer on-site repair services?',
      answer:
        'Yes, Bionic Computer offers on-site repair services for hardware issues. Our skilled technicians will come to your location to diagnose and fix the problem, ensuring minimal disruption to your workflow.',
    },
    {
      question: 'How can I contact Bionic Computer for support?',
      answer:
        'You can reach us through our Contact Us page, call us at +92 311 1444299, or send an email to contact@bioniccomputer.com.pk. Our team is always ready to assist you.',
    },
    {
      question: 'Can I purchase hardware directly from Bionic Computer?',
      answer:
        'Absolutely! We offer a wide range of high-quality hardware products for purchase. Whether you need new laptops, PCs, or other hardware components, we have you covered.',
    },
    {
      question: 'Do you offer warranties on repair services?',
      answer:
        'Yes, we offer warranties on our repair services to ensure customer satisfaction. The duration and terms depend on the specific service provided.',
    },
    {
      question: 'Can I get a custom IT solution for my business?',
      answer:
        'Definitely! We tailor our IT solutions to meet your business needs. Contact us to discuss your requirements, and we will create a customized plan aligned with your goals.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
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
