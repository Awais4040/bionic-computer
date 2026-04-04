'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ElevatedTestimonial from '@/components/ElevatedTestimonial';
import LeadMagnet from '@/components/LeadMagnet';
import ServiceBundles from '@/components/ServiceBundles';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ElevatedTestimonial />
      <LeadMagnet />
      <ServiceBundles />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}
