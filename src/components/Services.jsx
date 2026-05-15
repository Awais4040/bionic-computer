'use client';

import React from 'react';
import {
  FiHardDrive,
  FiTrendingUp,
  FiWifi,
  FiCode,
  FiLock,
  FiPhoneCall,
  FiCloud,
  FiTool,
} from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: FiHardDrive,
      title: 'Computer Hardware & Repairs',
      description: 'Sales, upgrades, component replacement, diagnostics, and repair support for computers, laptops, printers, accessories, UPS, and stabilizers.',
    },
    {
      icon: FiTrendingUp,
      title: 'IT Consulting & Support',
      description: 'Practical guidance, troubleshooting, Windows and Linux support, software assistance, and on-site services for offices and enterprises.',
    },
    {
      icon: FiWifi,
      title: 'Networking & Structured Cabling',
      description: 'Secure LAN/WAN installation, network support, structured cabling, and infrastructure designed around your business requirements.',
    },
    {
      icon: FiLock,
      title: 'Cybersecurity & Data Protection',
      description: 'Security-focused planning, protection practices, backups, and risk reduction to keep your systems and business data safer.',
    },
    {
      icon: FiCloud,
      title: 'Cloud & Infrastructure Management',
      description: 'Cloud solutions, server support, infrastructure management, preventive maintenance, and system upgrades for better uptime.',
    },
    {
      icon: FiTool,
      title: 'Annual Maintenance Agreements',
      description: 'Preventive maintenance, scheduled support, repairs, replacements, and dependable service contracts for long-term reliability.',
    },
    {
      icon: FiCode,
      title: 'Software & Website Development',
      description: 'Business software and responsive websites tailored to your workflow, goals, and digital presence.',
    },
    {
      icon: FiPhoneCall,
      title: 'Emergency IT Assistance',
      description: 'Fast support for urgent IT issues so your team can recover quickly and reduce downtime.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive IT solutions tailored to your business needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <Icon className="text-4xl text-primary mb-4" />
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
