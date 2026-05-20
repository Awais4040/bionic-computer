import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiMail, FiPhone } from 'react-icons/fi';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SeoJsonLd, { serviceJsonLd } from '@/components/SeoJsonLd';
import { business, services } from '@/lib/seoData';

export default function ServicePage({ service }) {
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SeoJsonLd data={serviceJsonLd(service)} />
      <Header />
      <main>
        <section className="bg-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-secondary font-semibold mb-4">Bionic Computer Karachi</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{service.name}</h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">{service.hero}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="btn-secondary inline-flex items-center justify-center gap-2">
                  <FiPhone /> Call {business.phone}
                </a>
                <a href={`mailto:${business.email}`} className="btn-outline bg-white inline-flex items-center justify-center gap-2">
                  <FiMail /> Email Support
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-5">
                  Practical support for homes, offices, and businesses
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{service.overview}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.services.map((item) => (
                    <div key={item} className="flex gap-3 rounded-lg border border-gray-200 p-4">
                      <FiCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="bg-light rounded-xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-dark mb-4">Need this service?</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Share the issue with Bionic Computer and our team will guide you toward the right repair, support, or service visit.
                </p>
                <div className="space-y-3">
                  <a href={business.whatsapp} className="btn-primary w-full inline-flex items-center justify-center gap-2">
                    WhatsApp Bionic Computer <FiArrowRight />
                  </a>
                  <a href="/#contact" className="btn-outline w-full inline-flex items-center justify-center">
                    Contact Form
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Common Questions</h2>
              <p className="text-lg text-gray-600">
                Clear answers before you call, book a visit, or request support.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Related Services</h2>
                <p className="text-gray-600">Explore more Bionic Computer support options in Karachi.</p>
              </div>
              <Link href="/#services" className="text-primary font-semibold inline-flex items-center gap-2">
                View all services <FiArrowRight />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="block rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-dark mb-3">{item.shortName}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
