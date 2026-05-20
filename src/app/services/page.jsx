import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiMail, FiPhone } from 'react-icons/fi';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SeoJsonLd, { servicesIndexJsonLd } from '@/components/SeoJsonLd';
import { business, services, siteUrl } from '@/lib/seoData';

export const metadata = {
  title: 'IT Services in Karachi | Bionic Computer Support, Repair & Networking',
  description:
    'Explore Bionic Computer services in Karachi including computer repair, network support, annual maintenance, cybersecurity, Windows/Linux support, and website development.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: `${siteUrl}/services`,
    siteName: 'Bionic Computer',
    title: 'IT Services in Karachi | Bionic Computer',
    description:
      'Computer repair, networking, maintenance, cybersecurity, software support, and website development services in Karachi.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <SeoJsonLd data={servicesIndexJsonLd()} />
      <Header />
      <main>
        <section className="bg-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-secondary font-semibold mb-4">Bionic Computer Services</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                IT support, repair, and business technology services in Karachi
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Find the right Bionic Computer service for computer repair, office networking, annual maintenance, cybersecurity, operating system support, or website development.
              </p>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition"
                >
                  <h2 className="text-2xl font-bold text-dark mb-3">{service.shortName}</h2>
                  <p className="text-gray-700 leading-relaxed mb-5">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.services.slice(0, 3).map((item) => (
                      <div key={item} className="flex gap-2 text-sm text-gray-600">
                        <FiCheckCircle className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-primary font-semibold inline-flex items-center gap-2">
                    View service <FiArrowRight className="group-hover:translate-x-1 transition" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Need help choosing?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tell Bionic Computer what is happening with your system, office network, printer, website, or IT setup. The team can guide you toward the right support path.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href={business.whatsapp} className="btn-primary inline-flex items-center justify-center gap-2">
                  WhatsApp Bionic Computer <FiArrowRight />
                </a>
                <Link href="/faq" className="btn-outline inline-flex items-center justify-center">
                  Read FAQs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
