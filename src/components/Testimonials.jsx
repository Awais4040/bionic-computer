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
    <section id="testimonials" className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by hundreds of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">"{testimonial.feedback}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
