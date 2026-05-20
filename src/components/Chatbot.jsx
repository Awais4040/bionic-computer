'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiTool,
  FiUser,
  FiX,
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const BUSINESS_PHONE = '+923111444299';
const DISPLAY_PHONE = '+92 311 1444299';
const BUSINESS_EMAIL = 'contact@bioniccomputer.com.pk';

const initialMessage = {
  id: 1,
  text: "Hi, I'm Bionic Computer's support assistant. Tell me what's happening with your computer, network, printer, server, or office IT setup and I'll guide you to the right next step.",
  sender: 'bot',
  timestamp: new Date(),
};

const quickPrompts = [
  'My computer is slow',
  'I need office network support',
  'Book a technician visit',
  'Tell me about annual maintenance',
];

const services = [
  'Computer or laptop repair',
  'Printer or accessories support',
  'Network setup or cabling',
  'Windows/Linux/software support',
  'Cybersecurity or backup help',
  'Annual maintenance agreement',
  'Website development',
  'Other IT support',
];

function formatLeadMessage(bookingData) {
  return [
    'New service request from Bionic Computer website',
    '',
    `Name: ${bookingData.name}`,
    `Phone/WhatsApp: ${bookingData.phone}`,
    bookingData.email ? `Email: ${bookingData.email}` : null,
    `Service: ${bookingData.service}`,
    bookingData.area ? `Area/Location: ${bookingData.area}` : null,
    bookingData.date ? `Preferred date: ${bookingData.date}` : null,
    bookingData.time ? `Preferred time: ${bookingData.time}` : null,
    bookingData.issue ? `Issue: ${bookingData.issue}` : null,
  ]
    .filter(Boolean)
    .join('\n');
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    area: '',
    date: '',
    time: '',
    issue: '',
  });
  const messagesEndRef = useRef(null);

  const canSendLead = useMemo(
    () => bookingData.name.trim() && bookingData.phone.trim() && bookingData.service,
    [bookingData.name, bookingData.phone, bookingData.service]
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const addMessage = (text, sender = 'bot') => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        text,
        sender,
        timestamp: new Date(),
      },
    ]);
  };

  const sendMessage = async (messageText = input) => {
    const trimmed = messageText.trim();
    if (!trimmed || loading) return;

    const userMessage = {
      id: Date.now(),
      text: trimmed,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmed,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Chat request failed');
      }

      const data = await response.json();
      addMessage(data.response || 'I can help with that. Please share a few more details.');

      if (data.shouldShowBooking) {
        setTimeout(() => setShowBooking(true), 600);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      addMessage(
        `I could not connect to the support assistant right now. You can still reach Bionic Computer directly:\n\nPhone: ${DISPLAY_PHONE}\nEmail: ${BUSINESS_EMAIL}`
      );
      toast.error('Chat is temporarily unavailable.');
    } finally {
      setLoading(false);
    }
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();

    if (!canSendLead) {
      toast.error('Please add your name, phone number, and service.');
      return;
    }

    const leadMessage = formatLeadMessage(bookingData);
    const whatsappUrl = `https://wa.me/${BUSINESS_PHONE.replace('+', '')}?text=${encodeURIComponent(leadMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    addMessage(
      `Your request is ready to send on WhatsApp.\n\nName: ${bookingData.name}\nService: ${bookingData.service}\nPhone: ${bookingData.phone}\n\nBionic Computer will confirm by call or WhatsApp after receiving it. If WhatsApp does not open, call ${DISPLAY_PHONE} or email ${BUSINESS_EMAIL}.`,
      'bot'
    );

    setShowBooking(false);
    setBookingData({
      name: '',
      email: '',
      phone: '',
      service: '',
      area: '',
      date: '',
      time: '',
      issue: '',
    });
    toast.success('Opening WhatsApp with your service request.');
  };

  const updateBooking = (field, value) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-primary p-4 text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl"
          title="Open support chat"
          aria-label="Open support chat"
        >
          <FiMessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 flex h-[620px] w-[calc(100vw-2rem)] max-w-[420px] flex-col overflow-hidden rounded-xl border border-blue-200 bg-white shadow-2xl sm:bottom-6 sm:right-6">
          <div className="flex items-center justify-between bg-primary px-4 py-4 text-white">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <FiTool className="shrink-0" />
                <h3 className="truncate text-lg font-bold">Bionic Support Agent</h3>
              </div>
              <p className="text-sm text-blue-100">IT support, repairs, networking, and service booking</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded p-2 transition hover:bg-blue-700"
              aria-label="Close support chat"
            >
              <FiX size={20} />
            </button>
          </div>

          <div className="border-b border-gray-200 bg-blue-50 px-4 py-3 text-sm text-gray-700">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href={`tel:${BUSINESS_PHONE}`} className="inline-flex items-center gap-1 font-medium text-primary">
                <FiPhone /> {DISPLAY_PHONE}
              </a>
              <span className="inline-flex items-center gap-1">
                <FiClock /> Mon-Sat support
              </span>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] whitespace-pre-wrap rounded-lg px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    message.sender === 'user'
                      ? 'rounded-br-none bg-primary text-white'
                      : 'rounded-bl-none border border-gray-200 bg-white text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-lg rounded-bl-none border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
                  Reviewing your issue...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {showBooking && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
              <form
                onSubmit={handleBookingSubmit}
                className="max-h-full w-full max-w-sm space-y-3 overflow-y-auto rounded-lg bg-white p-5 shadow-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="flex items-center gap-2 text-lg font-bold text-primary">
                    <FiCalendar /> Service Request
                  </h4>
                  <button
                    type="button"
                    onClick={() => setShowBooking(false)}
                    className="rounded p-1 text-gray-500 hover:bg-gray-100"
                    aria-label="Close service request"
                  >
                    <FiX />
                  </button>
                </div>

                <label className="block text-xs font-semibold text-gray-600">
                  Name *
                  <div className="mt-1 flex items-center gap-2 rounded border px-3 py-2 focus-within:border-primary">
                    <FiUser className="text-gray-400" />
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(event) => updateBooking('name', event.target.value)}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                </label>

                <label className="block text-xs font-semibold text-gray-600">
                  Phone or WhatsApp *
                  <div className="mt-1 flex items-center gap-2 rounded border px-3 py-2 focus-within:border-primary">
                    <FiPhone className="text-gray-400" />
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(event) => updateBooking('phone', event.target.value)}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                </label>

                <label className="block text-xs font-semibold text-gray-600">
                  Email
                  <div className="mt-1 flex items-center gap-2 rounded border px-3 py-2 focus-within:border-primary">
                    <FiMail className="text-gray-400" />
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(event) => updateBooking('email', event.target.value)}
                      className="w-full outline-none"
                    />
                  </div>
                </label>

                <label className="block text-xs font-semibold text-gray-600">
                  Service *
                  <select
                    value={bookingData.service}
                    onChange={(event) => updateBooking('service', event.target.value)}
                    className="mt-1 w-full rounded border px-3 py-2 outline-none focus:border-primary"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label className="block text-xs font-semibold text-gray-600">
                    Area
                    <input
                      type="text"
                      value={bookingData.area}
                      onChange={(event) => updateBooking('area', event.target.value)}
                      className="mt-1 w-full rounded border px-3 py-2 outline-none focus:border-primary"
                      placeholder="Karachi area"
                    />
                  </label>
                  <label className="block text-xs font-semibold text-gray-600">
                    Preferred time
                    <input
                      type="time"
                      value={bookingData.time}
                      onChange={(event) => updateBooking('time', event.target.value)}
                      className="mt-1 w-full rounded border px-3 py-2 outline-none focus:border-primary"
                    />
                  </label>
                </div>

                <label className="block text-xs font-semibold text-gray-600">
                  Preferred date
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(event) => updateBooking('date', event.target.value)}
                    className="mt-1 w-full rounded border px-3 py-2 outline-none focus:border-primary"
                  />
                </label>

                <label className="block text-xs font-semibold text-gray-600">
                  Issue details
                  <textarea
                    value={bookingData.issue}
                    onChange={(event) => updateBooking('issue', event.target.value)}
                    rows="3"
                    className="mt-1 w-full resize-none rounded border px-3 py-2 outline-none focus:border-primary"
                    placeholder="Example: office internet is down, laptop is not turning on"
                  />
                </label>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded bg-primary px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                  disabled={!canSendLead}
                >
                  <FiCheckCircle /> Send on WhatsApp
                </button>
              </form>
            </div>
          )}

          <div className="border-t bg-white p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  disabled={loading}
                  className="rounded-full border border-blue-200 px-3 py-1 text-xs font-medium text-primary transition hover:bg-blue-50 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    sendMessage();
                  }
                }}
                placeholder="Describe the issue..."
                disabled={loading}
                className="min-w-0 flex-1 rounded-lg border px-3 py-2 text-sm outline-none transition focus:border-primary disabled:bg-gray-100"
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="rounded-lg bg-primary p-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
                aria-label="Send message"
              >
                <FiSend size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
