'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Does Bionic Computer offer on-site IT support in Karachi?',
      answer:
        'Yes. Bionic Computer provides on-site IT support, hardware repair, networking, cabling, maintenance, and troubleshooting services for businesses and offices in Karachi.',
    },
    {
      question: 'How can I contact Bionic Computer for IT support?',
      answer:
        'You can call Bionic Computer at +92 311 1444299, email contact@bioniccomputer.com.pk, or send a message through the website contact form for IT support and consultation.',
    },
    {
      question: 'Can I buy computer hardware and accessories from Bionic Computer?',
      answer:
        'Yes. Bionic Computer supplies computers, laptops, printers, accessories, parts, UPS/stabilizers, and branded products including Dell, HP, Lenovo, Microsoft, and networking products.',
    },
    {
      question: 'Does Bionic Computer provide annual maintenance agreements?',
      answer:
        'Yes. Bionic Computer provides annual maintenance agreements, preventive maintenance, system upgrades, repair/replacement support, and scheduled IT support for businesses.',
    },
    {
      question: 'Can Bionic Computer design a custom IT solution for my business?',
      answer:
        'Yes. Bionic Computer designs custom IT solutions for offices and enterprises, including infrastructure management, LAN/WAN networking, cybersecurity, cloud, Windows/Linux support, software development, and website development.',
    },
  ];

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
