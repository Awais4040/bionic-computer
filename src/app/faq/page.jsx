import Link from 'next/link';
import { FiArrowRight, FiHelpCircle, FiMail, FiPhone } from 'react-icons/fi';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SeoJsonLd, { faqPageJsonLd } from '@/components/SeoJsonLd';
import { business, faqs, services, siteUrl } from '@/lib/seoData';

export const metadata = {
  title: 'Bionic Computer FAQ | IT Support, Repair & Services in Karachi',
  description:
    'Answers about Bionic Computer IT support, on-site service, computer repair, annual maintenance, hardware, networking, and business technology services in Karachi.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: `${siteUrl}/faq`,
    siteName: 'Bionic Computer',
    title: 'Bionic Computer FAQ',
    description:
      'Common questions about IT support, repair, networking, annual maintenance, and business technology services in Karachi.',
  },
};

export default function FaqPage() {
  return (
    <>
      <SeoJsonLd data={faqPageJsonLd()} />
      <Header />
      <main>
        <section className="bg-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-secondary font-semibold mb-4">Frequently Asked Questions</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Answers about Bionic Computer services in Karachi
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Clear answers about support visits, repair services, maintenance agreements, hardware, networking, and how to contact the team.
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
            <div className="max-w-4xl mx-auto space-y-5">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-gray-200 p-6">
                  <div className="flex gap-4">
                    <FiHelpCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-dark mb-3">{faq.question}</h2>
                      <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8 text-center">
                Popular service pages
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {services.slice(0, 3).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-xl bg-white border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-bold text-dark mb-3">{service.shortName}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <span className="text-primary font-semibold inline-flex items-center gap-2">
                      Learn more <FiArrowRight />
                    </span>
                  </Link>
                ))}
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
