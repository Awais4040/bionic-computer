'use client';

import React from 'react';
import { FiWifi, FiHardDrive, FiShield, FiPhone, FiClock, FiTool } from 'react-icons/fi';

export default function ServiceBundles() {
  const bundles = [
    {
      title: 'Office Infrastructure Setup',
      description: 'Complete networking and hardware deployment for your office',
      price: 'Custom Quote',
      color: 'from-[#0B2545] to-[#1E82BC]',
      services: [
        { icon: <FiWifi className="text-2xl text-[#48CAE4]" />, name: 'Network Design & Installation', desc: 'Secure, scalable infrastructure' },
        { icon: <FiHardDrive className="text-2xl text-[#48CAE4]" />, name: 'Hardware Deployment', desc: 'Servers, workstations, peripherals' },
        { icon: <FiShield className="text-2xl text-[#48CAE4]" />, name: 'Security Configuration', desc: 'Firewalls, access control, monitoring' },
      ],
      cta: 'Get Setup Consultation'
    },
    {
      title: 'Managed IT Support Retainer',
      description: 'Round-the-clock support to keep your systems running smoothly',
      price: 'From PKR 50,000/month',
      color: 'from-[#1E82BC] to-[#133663]',
      featured: true,
      services: [
        { icon: <FiClock className="text-2xl text-[#48CAE4]" />, name: '24/7 Remote Support', desc: 'Instant issue resolution anytime' },
        { icon: <FiPhone className="text-2xl text-[#48CAE4]" />, name: 'On-Site Support', desc: 'Professional technicians on-call' },
        { icon: <FiTool className="text-2xl text-[#48CAE4]" />, name: 'Routine Maintenance', desc: 'Proactive system optimization' },
      ],
      cta: 'Start Your Retainer'
    }
  ];

  return (
    <section id="service-bundles" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E82BC] bg-[#F0F7FF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Tailored Packages
          </span>
          <h2 className="section-title">Service Bundles for Business Growth</h2>
          <p className="section-subtitle">Enterprise-grade IT solutions designed for growing companies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bundles.map((bundle, idx) => (
            <div key={idx} className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 ${bundle.featured ? 'ring-2 ring-[#1E82BC]' : ''}`}>
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bundle.color}`}></div>
              
              {/* Featured Badge */}
              {bundle.featured && (
                <div className="absolute top-4 right-4 bg-white text-[#1E82BC] px-4 py-1.5 rounded-full text-xs font-extrabold shadow-md uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 text-white h-full flex flex-col justify-between">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-3">{bundle.title}</h3>
                  <p className="text-blue-100 text-sm md:text-base">{bundle.description}</p>
                </div>

                {/* Services */}
                <div className="space-y-6 flex-1 my-4">
                  {bundle.services.map((service, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 mt-1">{service.icon}</div>
                      <div>
                        <p className="font-bold text-base text-white">{service.name}</p>
                        <p className="text-xs text-blue-100/80">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-2xl font-black text-white mb-4">{bundle.price}</p>
                  <a href="#contact" className="btn-white w-full text-center py-3.5 text-base">
                    {bundle.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-[#F0F7FF] border border-blue-100 rounded-3xl p-8 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#0B2545] text-center mb-8">Why Choose Bionic Service Bundles?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm">
              <p className="text-[#1E82BC] font-extrabold text-base mb-2">💰 Cost Optimization</p>
              <p className="text-slate-600 text-xs leading-relaxed">Save up to 30% compared to paying for individual repairs and IT support services.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm">
              <p className="text-[#1E82BC] font-extrabold text-base mb-2">🎯 Predictable Budgeting</p>
              <p className="text-slate-600 text-xs leading-relaxed">Transparent agreements with fixed terms and no hidden diagnostic fees.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm">
              <p className="text-[#1E82BC] font-extrabold text-base mb-2">⚡ Priority Response</p>
              <p className="text-slate-600 text-xs leading-relaxed">Fast turnarounds with dedicated senior engineers assigned to your company.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
