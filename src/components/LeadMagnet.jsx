'use client';

import React, { useState } from 'react';
import { FiDownload, FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    setLoading(true);
    
    try {
      // Store lead locally
      const leads = JSON.parse(localStorage.getItem('leads') || '[]');
      leads.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('leads', JSON.stringify(leads));
      
      // Open OneDrive PDF download link in new tab
      window.open('https://1drv.ms/b/c/181ca3a4e2597344/IQDnUPo7H3svSpDZsULOiu4WAVuzoibgUylNgduaV5H2rv4?download=1', '_blank');
      
      toast.success('Checklist downloading! Check your downloads folder.');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Is Your Office Network Secure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get Our Free IT Audit Checklist
            </p>
          </div>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-3 items-start">
              <FiCheck className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Identify Security Gaps</h3>
                <p className="text-blue-100 text-sm">Discover vulnerabilities in your current setup</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <FiCheck className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Reduce IT Costs</h3>
                <p className="text-blue-100 text-sm">Optimize infrastructure spending and efficiency</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <FiCheck className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Ensure Compliance</h3>
                <p className="text-blue-100 text-sm">Meet industry standards and best practices</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <FiCheck className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Boost Productivity</h3>
                <p className="text-blue-100 text-sm">Eliminate downtime and infrastructure issues</p>
              </div>
            </div>
          </div>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center gap-2 transition disabled:opacity-50 whitespace-nowrap"
              >
                <FiDownload /> {loading ? 'Sending...' : 'Download Now'}
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-4 text-center">
              ✓ Free checklist delivered instantly | ✓ No credit card required | ✓ Unsubscribe anytime
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
