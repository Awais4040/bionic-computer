'use client';

import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiArrowRight, FiGlobe } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bionic<span className="text-secondary">Computer</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Leading IT and hardware solutions provider in Karachi. Trusted by 500+ clients for over a decade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition inline-flex items-center gap-1">
                    <FiArrowRight className="text-sm" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {['Hardware Repair', 'Networking', 'Website Dev', 'IT Support'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition inline-flex items-center gap-1">
                    <FiArrowRight className="text-sm" /> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="tel:+923111444299" className="hover:text-primary transition">
                  +92 311 1444299
                </a>
              </li>
              <li>
                <a href="mailto:contact@bioniccomputer.com.pk" className="hover:text-primary transition">
                  contact@bioniccomputer.com.pk
                </a>
              </li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-gray-400">© 2025 Bionic Computer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/thebioniccomputer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-2xl transition" title="Follow on Facebook">
              <FiFacebook />
            </a>
            <a href="https://www.instagram.com/bionic_computer/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-2xl transition" title="Follow on Instagram">
              <FiInstagram />
            </a>
            <a href="https://share.google/1Ac0XtKE9eCRl9g0F" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-2xl transition" title="View on Google Business">
              <FiGlobe />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
