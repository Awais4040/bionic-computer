'use client';

import React from 'react';
import {
  FiHardDrive,
  FiTrendingUp,
  FiWifi,
  FiCode,
  FiLock,
  FiPhoneCall,
} from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: FiHardDrive,
      title: 'Hardware Purchase & Repair',
      description: 'Wide range of high-quality hardware products and professional repair services to extend equipment life.',
    },
    {
      icon: FiTrendingUp,
      title: 'Hardware & Software Support',
      description: 'Professional support to ensure your systems operate smoothly and efficiently. 24/7 assistance available.',
    },
    {
      icon: FiWifi,
      title: 'Networking Services',
      description: 'Robust, secure, and efficient network infrastructures designed for your business requirements.',
    },
    {
      icon: FiCode,
      title: 'Website Development',
      description: 'Responsive, user-friendly websites tailored to your business goals and digital presence.',
    },
    {
      icon: FiLock,
      title: 'IT Strategy & Planning',
      description: 'Expert consulting to optimize your technology strategy and achieve business objectives.',
    },
    {
      icon: FiPhoneCall,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to handle any IT challenges and ensure minimal downtime.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive IT solutions tailored to your business needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
