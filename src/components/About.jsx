'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 shadow-lg overflow-hidden">
                <svg 
                  viewBox="0 0 400 500" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  {/* IT Professional illustration */}
                  {/* Head */}
                  <circle cx="200" cy="80" r="30" fill="#FFD4B3"/>
                  
                  {/* Body - Torso */}
                  <rect x="170" y="110" width="60" height="80" fill="#ffffff" rx="5"/>
                  
                  {/* Arms */}
                  <rect x="100" y="130" width="70" height="20" fill="#FFD4B3" rx="10"/>
                  <rect x="230" y="130" width="70" height="20" fill="#FFD4B3" rx="10"/>
                  
                  {/* Legs */}
                  <rect x="180" y="190" width="18" height="80" fill="#333333" rx="5"/>
                  <rect x="202" y="190" width="18" height="80" fill="#333333" rx="5"/>
                  
                  {/* Shoes */}
                  <ellipse cx="189" cy="275" rx="15" ry="8" fill="#1a1a1a"/>
                  <ellipse cx="211" cy="275" rx="15" ry="8" fill="#1a1a1a"/>
                  
                  {/* Laptop in hand */}
                  <rect x="250" y="120" width="100" height="70" fill="#FF6B35" rx="8"/>
                  <rect x="260" y="130" width="80" height="50" fill="#ffffff" rx="5"/>
                  
                  {/* Laptop display lines */}
                  <line x1="270" y1="145" x2="330" y2="145" stroke="#1a1a1a" strokeWidth="1"/>
                  <line x1="270" y1="160" x2="330" y2="160" stroke="#1a1a1a" strokeWidth="1"/>
                  
                  {/* Background elements */}
                  <circle cx="80" cy="150" r="40" fill="#ffffff" fillOpacity="0.1"/>
                  <circle cx="320" cy="400" r="50" fill="#ffffff" fillOpacity="0.1"/>
                  <rect x="100" y="350" width="200" height="2" fill="#FF6B35" fillOpacity="0.3"/>
                </svg>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-full p-6 text-center w-32 h-32 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <p className="text-sm font-semibold text-gray-600">Years of Trust</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block text-primary font-semibold text-sm">
              About Bionic Computer
            </div>
            <h2 className="section-title">Who Are We?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Bionic Computer, a Karachi-based IT services and total computing solutions company incorporated in 1999. We deliver reliable IT consulting, infrastructure management, hardware and software support, networking, cybersecurity, cloud solutions, and maintenance services tailored to business needs.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl text-secondary">✓</div>
                <div>
                  <h4 className="font-bold text-dark">Expertise and Experience</h4>
                  <p className="text-gray-600">Serving businesses since 1999</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl text-secondary">✓</div>
                <div>
                  <h4 className="font-bold text-dark">Reliable Support</h4>
                  <p className="text-gray-600">On-site and remote help when your business needs it</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl text-secondary">✓</div>
                <div>
                  <h4 className="font-bold text-dark">Transparent Communication</h4>
                  <p className="text-gray-600">Clear and honest business practices</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl text-secondary">✓</div>
                <div>
                  <h4 className="font-bold text-dark">Long-Term Partnership</h4>
                  <p className="text-gray-600">Cost-effective, value-driven service focused on uptime</p>
                </div>
              </div>
            </div>

            <a href="#services" className="btn-primary mt-4 inline-block">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
