'use client';

import React from 'react';
import { FiFacebook, FiInstagram, FiArrowRight, FiGlobe, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#06162B] text-white py-16 border-t border-blue-900/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <a href="/" className="inline-block group py-1">
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-[#48CAE4] transition leading-none">
                BIONIC <span className="text-[#1E82BC]">COMPUTER</span>
              </span>
            </a>
            <p className="text-blue-100/70 text-xs leading-relaxed">
              Trusted total computing solutions, computer hardware repairs, networking, and managed IT services in Karachi since 1999.
            </p>
            <p className="text-[#48CAE4] font-bold text-xs italic">
              "We Care Your System"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services Showcase', href: '/services' },
                { label: 'About Company', href: '/#about' },
                { label: 'Frequently Asked Questions', href: '/faq' },
                { label: 'Get In Touch', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-blue-100/70 hover:text-[#48CAE4] transition inline-flex items-center gap-1.5">
                    <FiArrowRight className="text-xs text-[#1E82BC]" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">IT Services</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Computer Hardware & Repairs', href: '/services/computer-repair-karachi' },
                { label: 'Network Cabling & Setup', href: '/services/network-support-karachi' },
                { label: 'Cybersecurity & Data Protection', href: '/services/cybersecurity-backup-karachi' },
                { label: 'Annual Maintenance Contracts', href: '/services/annual-maintenance-contract-karachi' },
                { label: 'Software & Web Development', href: '/services/software-development-karachi' },
              ].map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="text-blue-100/70 hover:text-[#48CAE4] transition inline-flex items-center gap-1.5">
                    <FiArrowRight className="text-xs text-[#1E82BC]" /> {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-xs text-blue-100/80">
              <li>
                <a href="tel:+923111444299" className="hover:text-[#48CAE4] transition flex items-center gap-2">
                  <FiPhone className="text-[#1E82BC]" /> +92 311 1444299
                </a>
              </li>
              <li>
                <a href="mailto:contact@bioniccomputer.com.pk" className="hover:text-[#48CAE4] transition flex items-center gap-2">
                  <FiMail className="text-[#1E82BC]" /> contact@bioniccomputer.com.pk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="text-[#1E82BC] text-sm flex-shrink-0 mt-0.5" />
                <span>Office 102, FL 1 Block 5, Gulshan-e-Iqbal, Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-blue-900/50 pt-8 flex justify-between items-center flex-wrap gap-4 text-xs text-blue-100/60">
          <p>© {new Date().getFullYear()} Bionic Computer. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/thebioniccomputer" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1E82BC] text-white flex items-center justify-center text-base transition" title="Follow on Facebook">
              <FiFacebook />
            </a>
            <a href="https://www.instagram.com/bionic_computer/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1E82BC] text-white flex items-center justify-center text-base transition" title="Follow on Instagram">
              <FiInstagram />
            </a>
            <a href="https://share.google/1Ac0XtKE9eCRl9g0F" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1E82BC] text-white flex items-center justify-center text-base transition" title="View on Google Business">
              <FiGlobe />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
