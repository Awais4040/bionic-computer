'use client';

import React from 'react';
import { FiStar } from 'react-icons/fi';

export default function ElevatedTestimonial() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#F0F7FF] via-blue-50 to-[#EBF5FB] border-l-4 border-[#1E82BC] rounded-3xl p-8 md:p-10 shadow-lg border border-blue-100">
            {/* 5 Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-[#1E82BC] fill-[#1E82BC] w-6 h-6" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-[#0B2545] font-semibold mb-6 leading-relaxed italic">
              "Implemented their services in my office & we don't feel any need of IT department after then. From networking to camera installations, they never let us disappoint. Staff is very cooperative and professional."
            </blockquote>

            {/* Author Info */}
            <div className="border-t border-blue-200/60 pt-6">
              <p className="font-bold text-lg text-[#0B2545]">Muneeba Ahmed</p>
              <p className="text-[#1E82BC] font-semibold text-sm">Business Owner</p>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-blue-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[#0B2545] text-sm font-medium">
                Join hundreds of satisfied businesses that trust us with their IT operations.
              </p>
              <a href="#contact" className="btn-primary text-sm whitespace-nowrap">
                Free IT Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
