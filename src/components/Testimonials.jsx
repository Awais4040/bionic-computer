'use client';

import React from 'react';
import { FiStar } from 'react-icons/fi';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Muneeba Ahmed',
      role: 'Business Owner',
      feedback:
        'Implemented their services in my office & we don\'t feel any need of IT department after then. From networking to camera installations, they never let us disappoint. Staff is very cooperative and professional.',
      rating: 5,
    },
    {
      name: 'Mamoona Tahir',
      role: 'Freelancer',
      feedback:
        'Excellent Service & Affordable Prices! The technician was incredibly humble, helpful, and professional. The service was smooth, efficient, and honest.',
      rating: 5,
    },
    {
      name: 'Khair un Nisa Kashan',
      role: 'Student',
      feedback: 'Great experience at Bionic Computer today. The work was done really well and the service was quick. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Syed Saif',
      role: 'Freelancer',
      feedback:
        'I\'ve visited several computer shops, but this one truly stood out. Staff were incredibly professional. Got my laptop repaired urgently at a fair price. 10/10',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F0F7FF]/60 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#1E82BC] bg-blue-100/60 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Client Feedback
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by hundreds of satisfied businesses and individuals across Karachi.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-blue-100 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-[#1E82BC] fill-[#1E82BC]" />
                  ))}
                </div>
                <p className="text-slate-700 text-base mb-6 leading-relaxed italic">"{testimonial.feedback}"</p>
              </div>
              <div className="border-t border-blue-50 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E82BC] text-white flex items-center justify-center font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#0B2545]">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
