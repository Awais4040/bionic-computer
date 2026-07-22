'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone, FiClock, FiMail } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/#about' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#0B2545] text-white text-xs py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-blue-200">
              <FiClock className="text-[#1E82BC]" /> Mon - Sat: 10:00 AM - 8:00 PM
            </span>
            <a href="mailto:contact@bioniccomputer.com.pk" className="flex items-center gap-1.5 hover:text-blue-300 transition">
              <FiMail className="text-[#1E82BC]" /> contact@bioniccomputer.com.pk
            </a>
          </div>
          <a
            href="tel:+923111444299"
            className="flex items-center gap-1.5 font-bold text-white bg-[#1E82BC] hover:bg-[#16699B] px-3 py-1 rounded-full transition"
          >
            <FiPhone /> +92 311 1444299
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Text Logo */}
          <a href="/" className="flex flex-col group py-1">
            <span className="text-2xl font-black tracking-tight text-[#0B2545] group-hover:text-[#1E82BC] transition leading-none">
              BIONIC <span className="text-[#1E82BC]">COMPUTER</span>
            </span>
            <span className="text-[10px] font-extrabold tracking-widest text-[#1E82BC] uppercase italic mt-1">
              We Care Your System
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#0B2545] hover:text-[#1E82BC] transition font-semibold text-sm tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1E82BC] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4 items-center">
            <a
              href="/#contact"
              className="btn-primary"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-[#0B2545] p-2 rounded-lg hover:bg-blue-50 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-blue-50 mt-3 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-[#0B2545] hover:text-[#1E82BC] hover:bg-blue-50 px-3 py-2 rounded-md font-medium transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center mt-3"
            >
              Get a Free Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
