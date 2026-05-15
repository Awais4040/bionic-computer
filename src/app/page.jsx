'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ElevatedTestimonial from '@/components/ElevatedTestimonial';
import LeadMagnet from '@/components/LeadMagnet';
import ServiceBundles from '@/components/ServiceBundles';
import GoogleReviews from '@/components/GoogleReviews';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ElevatedTestimonial />
      <LeadMagnet />
      <ServiceBundles />
      <GoogleReviews />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}
