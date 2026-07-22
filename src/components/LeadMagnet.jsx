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
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#0B2545] via-[#133663] to-[#1E82BC] text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="text-[#48CAE4] bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Free Security Resource
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Is Your Office Network Secure?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Get Our Free IT Audit Checklist — Download Instantly
            </p>
          </div>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-3 items-start bg-white/5 p-4 rounded-2xl border border-white/10">
              <FiCheck className="text-[#48CAE4] text-2xl flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white mb-1">Identify Security Gaps</h3>
                <p className="text-blue-100/80 text-xs">Discover vulnerabilities in your current IT setup</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-white/5 p-4 rounded-2xl border border-white/10">
              <FiCheck className="text-[#48CAE4] text-2xl flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white mb-1">Reduce IT Costs</h3>
                <p className="text-blue-100/80 text-xs">Optimize infrastructure spending and operational efficiency</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-white/5 p-4 rounded-2xl border border-white/10">
              <FiCheck className="text-[#48CAE4] text-2xl flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white mb-1">Ensure Compliance</h3>
                <p className="text-blue-100/80 text-xs">Meet industry data protection standards and best practices</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-white/5 p-4 rounded-2xl border border-white/10">
              <FiCheck className="text-[#48CAE4] text-2xl flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white mb-1">Boost Productivity</h3>
                <p className="text-blue-100/80 text-xs">Eliminate downtime and frequent computer hardware issues</p>
              </div>
            </div>
          </div>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl bg-white text-[#0B2545] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E82BC] font-medium"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-white py-4 px-8 text-base font-bold whitespace-nowrap"
              >
                <FiDownload /> {loading ? 'Sending...' : 'Download Checklist'}
              </button>
            </div>
            <p className="text-blue-100/80 text-xs mt-4 text-center">
              ✓ Free PDF checklist delivered instantly | ✓ No credit card required | ✓ 100% Privacy Guaranteed
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
