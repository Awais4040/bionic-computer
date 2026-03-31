'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiX, FiMessageCircle, FiLoader } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! 👋 I\'m Bionic Computer\'s AI Support Agent. I can help you troubleshoot technical issues, answer questions about our services, or book an appointment for professional service.\n\nWhat can I help you with today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    issue: ''
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botMessage = {
        id: messages.length + 2,
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

      // Check if AI suggests booking appointment
      if (data.response.toLowerCase().includes('appointment') || 
          data.response.toLowerCase().includes('book')) {
        setTimeout(() => {
          toast('Would you like to book an appointment?', {
            icon: '📅'
          });
        }, 500);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: `I apologize for the technical difficulty. Please try again or contact us directly:\n\n📞 Phone: +92 311 1444299\n📧 Email: contact@bioniccomputer.com.pk`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      toast.error('Failed to get response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBookAppointment = async (e) => {
    e.preventDefault();

    if (!bookingData.name || !bookingData.phone || !bookingData.service) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const bookingMessage = {
        id: messages.length + 1,
        text: `✅ Appointment Request Received!\n\nThank you for booking with us!\n\n👤 Name: ${bookingData.name}\n📞 Phone: ${bookingData.phone}\n🔧 Service: ${bookingData.service}\n${bookingData.date ? `📅 Preferred Date: ${bookingData.date}` : ''}\n${bookingData.time ? `⏰ Preferred Time: ${bookingData.time}` : ''}\n${bookingData.issue ? `📝 Issue: ${bookingData.issue}` : ''}\n\nWe'll confirm your appointment within the next 2 hours on WhatsApp or call.\n\nThank you!`,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, bookingMessage]);
      setShowBooking(false);
      setBookingData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        issue: ''
      });
      
      toast.success('Appointment request received! We\'ll contact you soon.');
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition z-40 animate-bounce"
          title="Open AI Support Chat"
        >
          <FiMessageCircle size={24} />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border-2 border-primary">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">🤖 Bionic AI Support</h3>
              <p className="text-sm text-blue-100">Intelligent Support Agent</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 p-1 rounded transition"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg whitespace-pre-wrap text-sm leading-relaxed ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none shadow-md'
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-200 shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-lg rounded-bl-none border border-gray-200 flex items-center gap-2">
                  <FiLoader className="animate-spin text-primary" size={16} />
                  <span className="text-sm text-gray-600">AI Agent is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Booking Form Modal */}
          {showBooking && (
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center z-50">
              <form 
                onSubmit={handleBookAppointment}
                className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 space-y-3 max-h-96 overflow-y-auto"
              >
                <h4 className="font-bold text-lg text-primary">📅 Book Appointment</h4>
                
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-primary"
                  required
                />
                
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-primary"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-primary"
                  required
                />
                
                <select
                  value={bookingData.service}
                  onChange={(e) => setBookingData({...bookingData, service: e.target.value})}
                  className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-primary"
                  required
                >
                  <option value="">Select Service *</option>
                  <option value="Hardware Repair">Hardware Repair</option>
                  <option value="Software Support">Software Support</option>
                  <option value="Network Setup">Network Setup</option>
                  <option value="Website Development">Website Development</option>
                  <option value="24/7 Support">24/7 Support</option>
                  <option value="Other">Other</option>
                </select>
                
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-primary"
                />
                
                <input
                  type="time"
                  value={bookingData.time}
                  onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                  className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-primary"
                />
                
                <textarea
                  placeholder="Describe your issue"
                  value={bookingData.issue}
                  onChange={(e) => setBookingData({...bookingData, issue: e.target.value})}
                  rows="2"
                  className="w-full px-3 py-2 border rounded text-sm resize-none focus:outline-none focus:border-primary"
                />
                
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-primary text-white py-2 rounded font-semibold hover:bg-blue-700 transition text-sm disabled:opacity-50"
                  >
                    {loading ? 'Booking...' : 'Confirm Booking'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBooking(false)}
                    className="flex-1 bg-gray-300 text-gray-800 py-2 rounded font-semibold hover:bg-gray-400 transition text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Input */}
          <div className="border-t p-4 flex gap-2 bg-white rounded-b-2xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !loading && handleSendMessage()}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-primary text-sm disabled:bg-gray-100"
            />
            <button
              onClick={() => {
                if (input.toLowerCase().includes('book') || input.toLowerCase().includes('appointment')) {
                  setShowBooking(true);
                  setInput('');
                } else {
                  handleSendMessage();
                }
              }}
              disabled={loading}
              className="bg-primary text-white p-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? <FiLoader className="animate-spin" size={18} /> : <FiSend size={18} />}
            </button>
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-3 flex gap-2 flex-wrap">
            <button
              onClick={() => {
                setInput('');
                setShowBooking(true);
              }}
              className="text-xs bg-secondary text-white px-2 py-1 rounded hover:opacity-90 transition"
            >
              📅 Book Appointment
            </button>
            <button
              onClick={() => setInput('What services do you provide?')}
              className="text-xs bg-primary text-white px-2 py-1 rounded hover:opacity-90 transition"
            >
              Services
            </button>
            <button
              onClick={() => setInput('My computer is running slow, what should I do?')}
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:opacity-90 transition"
            >
              💻 Troubleshoot
            </button>
          </div>
        </div>
      )}
    </>
  );
}
