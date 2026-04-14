'use client';

import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
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
    <section id="contact" className="py-12 md:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition">
            <FiPhone className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="font-bold text-dark mb-2">Call Us</h3>
            <a href="tel:+923111444299" className="text-gray-600 hover:text-primary transition">
              +92 311 1444299
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition">
            <FiMail className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="font-bold text-dark mb-2">Email Us</h3>
            <a href="mailto:contact@bioniccomputer.com.pk" className="text-gray-600 hover:text-primary transition">
              contact@bioniccomputer.com.pk
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition">
            <FiMapPin className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="font-bold text-dark mb-2">Location</h3>
            <p className="text-gray-600 text-sm">Office No: 102, FL 1 Block 5<br />Gulshan-e-Iqbal, Karachi, 73500, Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <FiSend /> {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-dark text-center mb-8">Visit Our Office</h3>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 md:h-[500px] mb-8">
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
          <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-dark mb-4">Office Information</h4>
            <p className="text-gray-600 mb-4">
              <strong>Location:</strong><br />Office No: 102, FL 1 Block 5<br />Gulshan-e-Iqbal, Karachi, 73500, Pakistan
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Hours:</strong> Mon-Fri 9AM-7PM, Sat 10AM-6PM, Sun Closed
            </p>
            <p className="text-primary font-semibold text-lg">
              ⏰ Available 24/7 for emergencies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
