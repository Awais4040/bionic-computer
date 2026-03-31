'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Your One-Stop IT Solution
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Comprehensive IT Solutions in Karachi
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              For over a decade, Bionic Computer has been the trusted name in IT and hardware solutions in Pakistan. From advanced network setups to reliable hardware and software support, we ensure your business runs smoothly.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="btn-primary inline-flex items-center gap-2">
                Get Started <FiArrowRight />
              </button>
              <a href="tel:+923111444299" className="btn-secondary inline-flex items-center gap-2">
                Call Now
              </a>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Main image container */}
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                <svg 
                  viewBox="0 0 400 400" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto animate-pulse"
                >
                  {/* Computer/Monitor illustration */}
                  <rect x="50" y="80" width="300" height="200" fill="#ffffff" fillOpacity="0.1" rx="20" stroke="#ffffff" strokeWidth="2"/>
                  
                  {/* Screen display lines */}
                  <rect x="70" y="100" width="260" height="160" fill="none" stroke="#FF6B35" strokeWidth="2" rx="10"/>
                  <line x1="80" y1="120" x2="320" y2="120" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
                  <line x1="80" y1="140" x2="320" y2="140" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
                  <line x1="80" y1="160" x2="280" y2="160" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
                  <line x1="80" y1="180" x2="300" y2="180" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
                  <line x1="80" y1="200" x2="270" y2="200" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
                  <line x1="80" y1="220" x2="290" y2="220" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
                  
                  {/* Monitor base */}
                  <rect x="160" y="280" width="80" height="15" fill="#ffffff" fillOpacity="0.2" rx="3"/>
                  <rect x="140" y="295" width="120" height="8" fill="#ffffff" fillOpacity="0.1" rx="2"/>
                  
                  {/* Decorative elements */}
                  <circle cx="100" cy="320" r="5" fill="#FF6B35"/>
                  <circle cx="200" cy="330" r="4" fill="#FF6B35"/>
                  <circle cx="300" cy="325" r="5" fill="#FF6B35"/>
                </svg>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-6 py-3 rounded-full shadow-lg font-bold">
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
