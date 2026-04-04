'use client';

import React from 'react';

export default function ElevatedTestimonial() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-primary rounded-xl p-10 shadow-lg">
            {/* 5 Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-yellow-400 fill-yellow-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-dark font-semibold mb-6 leading-relaxed italic">
              "Implemented their services in my office & we don't feel any need of IT department after then. From networking to camera installations, they never let us disappoint. Staff is very cooperative and professional."
            </blockquote>

            {/* Author Info */}
            <div className="border-t border-blue-200 pt-6">
              <p className="font-bold text-lg text-dark">Muneeba Ahmed</p>
              <p className="text-primary font-semibold">Business Owner</p>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-blue-200">
              <p className="text-dark mb-4">
                Join hundreds of satisfied businesses that trust us with their IT operations.
              </p>
              <a href="#contact" className="inline-block bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Schedule Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
