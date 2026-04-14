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
              Your Complete Outsourced IT Department in Karachi
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              From secure network infrastructure to 24/7 hardware support, we handle your tech so you can focus on your business.
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

          {/* Right - Server Illustration */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Main server container */}
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                <svg 
                  viewBox="0 0 400 450" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto animate-pulse"
                >
                  {/* Rack */}
                  <rect x="80" y="80" width="240" height="280" fill="#ffffff" fillOpacity="0.08" rx="15" stroke="#ffffff" strokeWidth="2"/>
                  
                  {/* Server 1 */}
                  <rect x="100" y="110" width="200" height="60" fill="#FF6B35" rx="5" stroke="#FFB84D" strokeWidth="2"/>
                  <circle cx="120" cy="135" r="6" fill="#00FF00"/>
                  <circle cx="140" cy="135" r="6" fill="#00FF00"/>
                  <circle cx="160" cy="135" r="6" fill="#FFD700"/>
                  <rect x="280" y="120" width="8" height="40" fill="#1a1a1a"/>
                  
                  {/* Server 2 */}
                  <rect x="100" y="190" width="200" height="60" fill="#FF6B35" rx="5" stroke="#FFB84D" strokeWidth="2"/>
                  <circle cx="120" cy="215" r="6" fill="#00FF00"/>
                  <circle cx="140" cy="215" r="6" fill="#00FF00"/>
                  <circle cx="160" cy="215" r="6" fill="#FF4444"/>
                  <rect x="280" y="200" width="8" height="40" fill="#1a1a1a"/>
                  
                  {/* Server 3 */}
                  <rect x="100" y="270" width="200" height="60" fill="#FF6B35" rx="5" stroke="#FFB84D" strokeWidth="2"/>
                  <circle cx="120" cy="295" r="6" fill="#00FF00"/>
                  <circle cx="140" cy="295" r="6" fill="#00FF00"/>
                  <circle cx="160" cy="295" r="6" fill="#00FF00"/>
                  <rect x="280" y="280" width="8" height="40" fill="#1a1a1a"/>
                  
                  {/* Power cables - Left side */}
                  <path d="M 95 135 Q 50 135 45 180" stroke="#FF6B35" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M 95 215 Q 40 215 35 260" stroke="#FF6B35" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M 95 295 Q 50 295 45 340" stroke="#FF6B35" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  
                  {/* Network cables - Right side */}
                  <path d="M 305 135 Q 350 135 360 100" stroke="#4169E1" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M 305 215 Q 355 215 365 180" stroke="#4169E1" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M 305 295 Q 350 295 360 330" stroke="#4169E1" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  
                  {/* Cable connectors */}
                  <circle cx="360" cy="100" r="5" fill="#4169E1"/>
                  <circle cx="365" cy="180" r="5" fill="#4169E1"/>
                  <circle cx="360" cy="330" r="5" fill="#4169E1"/>
                  

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
