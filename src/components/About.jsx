'use client';

import React from 'react';
import { FiCheckCircle, FiShield, FiAward, FiClock } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Graphic / Illustration */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0B2545] via-[#133663] to-[#1E82BC] rounded-3xl p-8 shadow-2xl overflow-hidden border border-blue-100">
                <svg
                  viewBox="0 0 400 480"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-lg"
                >
                  <defs>
                    <linearGradient id="aboutBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#48CAE4" />
                      <stop offset="100%" stopColor="#1E82BC" />
                    </linearGradient>
                  </defs>

                  {/* Tech Infrastructure Illustration */}
                  <rect x="50" y="60" width="300" height="360" fill="#FFFFFF" fillOpacity="0.05" rx="20" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.2" />

                  {/* Shield Core */}
                  <path d="M 200 110 L 290 150 V 250 C 290 320 200 360 200 360 C 200 360 110 320 110 250 V 150 Z" fill="url(#aboutBlueGrad)" fillOpacity="0.9" />
                  
                  {/* Inner Check mark inside Shield */}
                  <path d="M 160 230 L 190 260 L 245 190" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Orbit Nodes */}
                  <circle cx="90" cy="120" r="14" fill="#FFFFFF" fillOpacity="0.2" />
                  <circle cx="310" cy="120" r="14" fill="#FFFFFF" fillOpacity="0.2" />
                  <circle cx="310" cy="380" r="14" fill="#FFFFFF" fillOpacity="0.2" />
                  <circle cx="90" cy="380" r="14" fill="#FFFFFF" fillOpacity="0.2" />
                </svg>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl border border-blue-100 rounded-3xl p-6 text-center w-36 h-36 flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-[#1E82BC]">25+</div>
                <p className="text-xs font-bold text-[#0B2545] mt-1">Years of Trust</p>
                <p className="text-[10px] text-slate-500">Since 1999</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#1E82BC] bg-[#F0F7FF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              About Bionic Computer
            </span>
            
            <h2 className="section-title">
              Complete Computer & IT Solutions Engineered for Reliability
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Welcome to **Bionic Computer**, a Karachi-based total computing solutions provider incorporated in 1999. Our motto — <span className="text-[#1E82BC] font-bold italic">"We Care Your System"</span> — guides everything we do. We deliver enterprise-grade IT consulting, hardware supply & repairs, structured cabling, cybersecurity, and managed IT maintenance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-[#F0F7FF] p-4 rounded-2xl border border-blue-100">
                <FiAward className="text-2xl text-[#1E82BC] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B2545] text-sm">25+ Years Experience</h4>
                  <p className="text-slate-600 text-xs mt-1">Established reputation serving businesses across Karachi & Pakistan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F0F7FF] p-4 rounded-2xl border border-blue-100">
                <FiClock className="text-2xl text-[#1E82BC] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B2545] text-sm">Rapid On-Site Support</h4>
                  <p className="text-slate-600 text-xs mt-1">Quick response time to minimize business downtime and revenue loss.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F0F7FF] p-4 rounded-2xl border border-blue-100">
                <FiShield className="text-2xl text-[#1E82BC] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B2545] text-sm">Certified Engineers</h4>
                  <p className="text-slate-600 text-xs mt-1">Expert technicians specializing in Windows, Linux, network & server hardware.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F0F7FF] p-4 rounded-2xl border border-blue-100">
                <FiCheckCircle className="text-2xl text-[#1E82BC] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B2545] text-sm">Transparent Pricing</h4>
                  <p className="text-slate-600 text-xs mt-1">Upfront diagnostics and honest recommendations without hidden charges.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="#services" className="btn-primary">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
