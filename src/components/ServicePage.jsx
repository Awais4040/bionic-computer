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
        <section className="bg-gradient-to-b from-[#0B2545] via-[#133663] to-[#1E82BC] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <span className="text-[#48CAE4] font-bold text-xs uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full mb-4 inline-block">
                Bionic Computer Karachi
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{service.name}</h1>
              <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-8">{service.hero}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="btn-white inline-flex items-center justify-center gap-2">
                  <FiPhone /> Call {business.phone}
                </a>
                <a href={`mailto:${business.email}`} className="btn-outline border-white text-white hover:bg-white hover:text-[#0B2545] inline-flex items-center justify-center gap-2">
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-5">
                  Practical IT support for homes, offices, and enterprises
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.overview}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.services.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-blue-100 bg-[#F0F7FF]/50 p-4">
                      <FiCheckCircle className="text-[#1E82BC] text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-[#0B2545] font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="bg-[#F0F7FF] rounded-3xl p-8 border border-blue-100 shadow-md">
                <h3 className="text-2xl font-bold text-[#0B2545] mb-4">Need This Service?</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Share your computer or network issue with Bionic Computer. Our engineers will guide you to the fastest solution.
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

        <section className="py-14 md:py-20 bg-[#F0F7FF]/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-4">Common Questions</h2>
              <p className="text-base text-slate-600">
                Clear answers before you call, book a visit, or request support.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0B2545] mb-3">{faq.question}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-2">Related Services</h2>
                <p className="text-slate-600 text-sm">Explore more Bionic Computer support options in Karachi.</p>
              </div>
              <Link href="/#services" className="text-[#1E82BC] font-bold inline-flex items-center gap-2 hover:underline">
                View all services <FiArrowRight />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="block rounded-2xl border border-blue-100 bg-white p-6 hover:border-[#1E82BC]/50 hover:shadow-lg transition duration-200"
                >
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2">{item.shortName}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
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
