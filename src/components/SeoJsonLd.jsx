import { business, faqs, services, siteUrl } from '@/lib/seoData';

function contactPoint() {
  return {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: business.telephone,
    email: business.email,
    areaServed: 'PK',
    availableLanguage: ['English', 'Urdu'],
  };
}

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.addressLocality,
    addressRegion: business.address.addressRegion,
    postalCode: business.address.postalCode,
    addressCountry: business.address.addressCountry,
  };
}

export function baseJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: business.name,
        legalName: business.legalName,
        url: business.url,
        logo: business.logo,
        image: business.image,
        description: business.description,
        foundingDate: business.foundingYear,
        email: business.email,
        telephone: business.telephone,
        address: postalAddress(),
        contactPoint: contactPoint(),
        sameAs: business.sameAs,
      },
      {
        '@type': ['LocalBusiness', 'ComputerStore', 'ProfessionalService'],
        '@id': `${siteUrl}/#localbusiness`,
        name: business.name,
        url: business.url,
        image: business.image,
        logo: business.logo,
        description: business.description,
        telephone: business.telephone,
        email: business.email,
        address: postalAddress(),
        openingHours: business.openingHours,
        areaServed: business.areaServed.map((name) => ({ '@type': 'Place', name })),
        parentOrganization: { '@id': `${siteUrl}/#organization` },
        sameAs: business.sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: business.name,
        url: siteUrl,
        inLanguage: 'en-PK',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#services`,
        name: 'Bionic Computer IT services in Karachi',
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${siteUrl}/services/${service.slug}`,
          name: service.name,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function serviceJsonLd(service) {
  const pageUrl = `${siteUrl}/services/${service.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: service.name,
        serviceType: service.shortName,
        description: service.description,
        provider: { '@id': `${siteUrl}/#localbusiness` },
        areaServed: business.areaServed.map((name) => ({ '@type': 'Place', name })),
        url: pageUrl,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.shortName} service options`,
          itemListElement: service.services.map((name) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name,
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${siteUrl}/#services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.name,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export function servicesIndexJsonLd() {
  const pageUrl = `${siteUrl}/services`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        name: 'Bionic Computer Services',
        url: pageUrl,
        description:
          'A complete list of Bionic Computer IT support, repair, networking, maintenance, cybersecurity, software, and website development services in Karachi.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#localbusiness` },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#service-list`,
        name: 'Bionic Computer service pages',
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${siteUrl}/services/${service.slug}`,
          name: service.name,
          description: service.description,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export function faqPageJsonLd() {
  const pageUrl = `${siteUrl}/faq`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        name: 'Bionic Computer Frequently Asked Questions',
        url: pageUrl,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'FAQ',
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export default function SeoJsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
