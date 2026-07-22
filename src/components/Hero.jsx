'use client';

import React from 'react';
import { FiArrowRight, FiShield, FiCheckCircle, FiPhoneCall, FiCpu, FiServer } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2545] via-[#133663] to-[#1E82BC] text-white py-16 md:py-24">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-white/20 text-blue-100 shadow-inner">
              <FiShield className="text-[#449BD3]" /> Trusted IT Solutions Provider in Karachi
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              We Care Your System — <span className="text-[#48CAE4] block sm:inline">Total IT Excellence</span>
            </h1>

            <p className="text-base md:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Complete hardware, enterprise networking, cybersecurity, cloud setup, and round-the-clock computer maintenance engineered for growing Pakistan businesses.
            </p>

            {/* Feature Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-sm text-blue-50 font-medium">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#48CAE4] text-lg flex-shrink-0" /> Enterprise Network Setup
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#48CAE4] text-lg flex-shrink-0" /> Hardware & Server Repair
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#48CAE4] text-lg flex-shrink-0" /> 24/7 Managed IT Support
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#48CAE4] text-lg flex-shrink-0" /> Cloud & Security Deployment
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-white text-base py-3.5 px-8">
                Get Free IT Audit <FiArrowRight className="text-lg" />
              </a>
              <a href="tel:+923111444299" className="btn-outline border-white text-white hover:bg-white hover:text-[#0B2545] text-base py-3.5 px-8">
                <FiPhoneCall className="text-lg" /> Call +92 311 1444299
              </a>
            </div>
          </div>

          {/* Right - High Quality Full Enterprise Network Server Rack Image Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#0B2545]">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                  alt="Full Enterprise Network Server Rack Cabinet - Bionic Computer"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-transparent to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1E82BC] flex items-center justify-center text-white flex-shrink-0">
                      <FiServer className="text-xl" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-white">Full Enterprise Network Rack</p>
                      <p className="text-[11px] text-blue-100/80">Data Center & Server Cabinet Setup</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#48CAE4] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    25+ Yrs
                  </span>
                </div>
              </div>

              {/* Floating stats badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-[#0B2545] px-6 py-3.5 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F0F7FF] flex items-center justify-center text-[#1E82BC] font-bold text-lg">
                  <FiCpu />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Enterprise Server Setup</p>
                  <p className="text-sm font-extrabold text-[#0B2545]">99.9% Network Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
