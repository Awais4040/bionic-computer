'use client';

import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Message sent successfully! We\'ll contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F0F7FF]/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#1E82BC] bg-blue-100/60 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Contact Bionic
          </span>
          <h2 className="section-title">Get In Touch With Our Engineers</h2>
          <p className="section-subtitle">Have a computer hardware repair, network project, or IT inquiry? Send us a message!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-3xl text-center border border-blue-100 shadow-sm hover:shadow-lg transition duration-200">
            <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] text-[#1E82BC] mx-auto mb-4 flex items-center justify-center text-2xl">
              <FiPhone />
            </div>
            <h3 className="font-bold text-[#0B2545] text-lg mb-2">Call Us Direct</h3>
            <a href="tel:+923111444299" className="text-slate-600 hover:text-[#1E82BC] font-semibold text-sm transition">
              +92 311 1444299
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl text-center border border-blue-100 shadow-sm hover:shadow-lg transition duration-200">
            <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] text-[#1E82BC] mx-auto mb-4 flex items-center justify-center text-2xl">
              <FiMail />
            </div>
            <h3 className="font-bold text-[#0B2545] text-lg mb-2">Email Support</h3>
            <a href="mailto:contact@bioniccomputer.com.pk" className="text-slate-600 hover:text-[#1E82BC] font-semibold text-sm transition">
              contact@bioniccomputer.com.pk
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl text-center border border-blue-100 shadow-sm hover:shadow-lg transition duration-200">
            <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] text-[#1E82BC] mx-auto mb-4 flex items-center justify-center text-2xl">
              <FiMapPin />
            </div>
            <h3 className="font-bold text-[#0B2545] text-lg mb-2">Karachi Office</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Office No: 102, FL 1 Block 5<br />Gulshan-e-Iqbal, Karachi, 73500</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-blue-100 shadow-xl mb-16">
          <h3 className="text-2xl font-bold text-[#0B2545] mb-6 text-center">Send Us a Direct Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#0B2545] mb-2 uppercase tracking-wide">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F0F7FF]/50 border border-blue-100 rounded-xl focus:border-[#1E82BC] focus:bg-white outline-none transition text-sm text-[#0B2545]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0B2545] mb-2 uppercase tracking-wide">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F0F7FF]/50 border border-blue-100 rounded-xl focus:border-[#1E82BC] focus:bg-white outline-none transition text-sm text-[#0B2545]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#0B2545] mb-2 uppercase tracking-wide">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F0F7FF]/50 border border-blue-100 rounded-xl focus:border-[#1E82BC] focus:bg-white outline-none transition text-sm text-[#0B2545]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0B2545] mb-2 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Inquiry Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F0F7FF]/50 border border-blue-100 rounded-xl focus:border-[#1E82BC] focus:bg-white outline-none transition text-sm text-[#0B2545]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0B2545] mb-2 uppercase tracking-wide">Message *</label>
              <textarea
                name="message"
                placeholder="How can we help your business technology?"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-[#F0F7FF]/50 border border-blue-100 rounded-xl focus:border-[#1E82BC] focus:bg-white outline-none transition text-sm text-[#0B2545] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 text-base font-bold disabled:opacity-50"
            >
              <FiSend /> {loading ? 'Sending Message...' : 'Submit Message'}
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B2545] text-center mb-8">Visit Our Karachi Office</h3>
          <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-xl h-96 md:h-[450px] mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2575033268395!2d67.08950497571288!3d24.92329624273961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341542a064bd7%3A0x9d0d5f4657ad7243!2sBionic%20Computer!5e0!3m2!1sen!2s!4v1775334711191!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bionic Computer Location"
            ></iframe>
          </div>
          
          {/* Office Info */}
          <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-md text-center max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-[#0B2545] mb-3">Office Working Hours</h4>
            <p className="text-slate-600 text-xs mb-3 leading-relaxed">
              <strong>Address:</strong> Office No: 102, FL 1 Block 5, Gulshan-e-Iqbal, Karachi, 73500, Pakistan
            </p>
            <p className="text-slate-600 text-xs mb-4">
              <strong>Timings:</strong> Monday – Saturday: 10:00 AM – 8:00 PM | Sunday: Closed
            </p>
            <p className="text-[#1E82BC] font-bold text-sm inline-flex items-center gap-2 bg-[#F0F7FF] px-4 py-2 rounded-full border border-blue-100">
              <FiClock /> Available 24/7 for Enterprise Emergency IT Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
