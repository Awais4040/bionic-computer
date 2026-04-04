'use client';

import React from 'react';
import { FiWifi, FiHardDrive, FiShield, FiPhone, FiClock, FiTool } from 'react-icons/fi';

export default function ServiceBundles() {
  const bundles = [
    {
      title: 'Office Infrastructure Setup',
      description: 'Complete networking and hardware deployment for your office',
      price: 'Custom Quote',
      color: 'from-blue-500 to-blue-600',
      services: [
        { icon: <FiWifi className="text-2xl" />, name: 'Network Design & Installation', desc: 'Secure, scalable infrastructure' },
        { icon: <FiHardDrive className="text-2xl" />, name: 'Hardware Deployment', desc: 'Servers, workstations, peripherals' },
        { icon: <FiShield className="text-2xl" />, name: 'Security Configuration', desc: 'Firewalls, access control, monitoring' },
      ],
      cta: 'Get Setup Consultation'
    },
    {
      title: 'Managed IT Support Retainer',
      description: 'Round-the-clock support to keep your systems running smoothly',
      price: 'From PKR 50,000/month',
      color: 'from-purple-500 to-purple-600',
      featured: true,
      services: [
        { icon: <FiClock className="text-2xl" />, name: '24/7 Remote Support', desc: 'Instant issue resolution anytime' },
        { icon: <FiPhone className="text-2xl" />, name: 'On-Site Support', desc: 'Professional technicians on-call' },
        { icon: <FiTool className="text-2xl" />, name: 'Routine Maintenance', desc: 'Proactive system optimization' },
      ],
      cta: 'Start Your Retainer'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Service Bundles for Business Growth</h2>
          <p className="section-subtitle">Enterprise-grade solutions designed for mid-market companies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bundles.map((bundle, idx) => (
            <div key={idx} className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105 ${bundle.featured ? 'md:col-span-1 md:row-span-1 ring-2 ring-secondary' : ''}`}>
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bundle.color} opacity-90`}></div>
              
              {/* Featured Badge */}
              {bundle.featured && (
                <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-3">{bundle.title}</h3>
                  <p className="text-lg opacity-90">{bundle.description}</p>
                </div>

                {/* Services */}
                <div className="space-y-6 flex-1">
                  {bundle.services.map((service, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-secondary flex-shrink-0">{service.icon}</div>
                      <div>
                        <p className="font-bold text-lg">{service.name}</p>
                        <p className="text-sm opacity-85">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                  <p className="text-2xl font-bold mb-4">{bundle.price}</p>
                  <a href="#contact" className={`block w-full text-center py-4 px-6 rounded-lg font-bold transition ${bundle.featured ? 'bg-secondary hover:bg-orange-600 text-white' : 'bg-white hover:bg-gray-100 text-dark'}`}>
                    {bundle.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-dark mb-6">Why Choose Our Bundles?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-primary font-bold text-lg mb-2">💰 Better Value</p>
              <p className="text-gray-600">Get more services at lower cost than à la carte pricing</p>
            </div>
            <div>
              <p className="text-primary font-bold text-lg mb-2">🎯 Predictable Costs</p>
              <p className="text-gray-600">Fixed monthly retainers with no surprise charges</p>
            </div>
            <div>
              <p className="text-primary font-bold text-lg mb-2">⚡ Priority Support</p>
              <p className="text-gray-600">Dedicated team handles your infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
