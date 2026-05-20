import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { getServiceBySlug, services, siteUrl } from '@/lib/seoData';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  const url = `${siteUrl}/services/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_PK',
      url,
      siteName: 'Bionic Computer',
      title: service.title,
      description: service.description,
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
      images: [`${siteUrl}/og-image.jpg`],
    },
  };
}

export default function Page({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}
