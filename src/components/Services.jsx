'use client';

import React from 'react';
import Link from 'next/link';
import {
  FiHardDrive,
  FiTrendingUp,
  FiWifi,
  FiCode,
  FiLock,
  FiPhoneCall,
  FiCloud,
  FiTool,
  FiArrowUpRight,
} from 'react-icons/fi';
import { services as seoServices } from '@/lib/seoData';

export default function Services() {
  const services = [
    {
      icon: FiHardDrive,
      title: 'Computer Hardware & Repairs',
      href: `/services/${seoServices[0].slug}`,
      description: 'Sales, upgrades, component replacement, diagnostics, and repair support for computers, laptops, printers, accessories, UPS, and stabilizers.',
    },
    {
      icon: FiTrendingUp,
      title: 'IT Consulting & Support',
      href: '/#contact',
      description: 'Practical guidance, troubleshooting, Windows and Linux support, software assistance, and on-site services for offices and enterprises.',
    },
    {
      icon: FiWifi,
      title: 'Networking & Structured Cabling',
      href: `/services/${seoServices[1].slug}`,
      description: 'Secure LAN/WAN installation, network support, structured cabling, and infrastructure designed around your business requirements.',
    },
    {
      icon: FiLock,
      title: 'Cybersecurity & Data Protection',
      href: `/services/${seoServices[3].slug}`,
      description: 'Security-focused planning, protection practices, backups, and risk reduction to keep your systems and business data safer.',
    },
    {
      icon: FiCloud,
      title: 'Cloud & Infrastructure Management',
      href: '/#contact',
      description: 'Cloud solutions, server support, infrastructure management, preventive maintenance, and system upgrades for better uptime.',
    },
    {
      icon: FiTool,
      title: 'Annual Maintenance Agreements',
      href: `/services/${seoServices[2].slug}`,
      description: 'Preventive maintenance, scheduled support, repairs, replacements, and dependable service contracts for long-term reliability.',
    },
    {
      icon: FiCode,
      title: 'Software & Website Development',
      href: `/services/${seoServices[5].slug}`,
      description: 'Business software and responsive websites tailored to your workflow, goals, and digital presence.',
    },
    {
      icon: FiPhoneCall,
      title: 'Emergency IT Assistance',
      href: '/#contact',
      description: 'Fast support for urgent IT issues so your team can recover quickly and reduce downtime.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F0F7FF]/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E82BC] bg-blue-100/60 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Our Core Competencies
          </span>
          <h2 className="section-title">Professional IT Solutions</h2>
          <p className="section-subtitle">
            Engineered to keep your computer hardware, servers, networks, and business infrastructure running smoothly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="group bg-white p-7 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:border-[#1E82BC]/40 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#F0F7FF] group-hover:bg-[#1E82BC] text-[#1E82BC] group-hover:text-white flex items-center justify-center text-2xl transition duration-300 mb-6">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] group-hover:text-[#1E82BC] transition mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#1E82BC] group-hover:translate-x-1 transition">
                  Learn More <FiArrowUpRight className="text-base" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
