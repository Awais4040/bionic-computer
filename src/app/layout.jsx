import './globals.css';
import ClientProviders from '@/components/ClientProviders';

export const metadata = {
  title: 'Bionic Computer - Total IT Solutions in Karachi | Support, Networking & Hardware',
  description: 'Bionic Computer is a trusted IT services and total computing solutions company in Karachi, providing IT support, infrastructure management, networking, cybersecurity, cloud, hardware, software, and maintenance services since 1999.',
  keywords: 'IT solutions Karachi, IT support Karachi, hardware repair, network setup, cybersecurity Karachi, cloud solutions, annual maintenance agreement, computer repair, laptop repair, structured cabling, Windows Linux support, website development',
  authors: [{ name: 'Bionic Computer' }],
  creator: 'Bionic Computer',
  publisher: 'Bionic Computer',
  robots: 'index, follow',
  canonical: 'https://bioniccomputer.com.pk',
  alternates: {
    canonical: 'https://bioniccomputer.com.pk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://bioniccomputer.com.pk',
    siteName: 'Bionic Computer',
    title: 'Bionic Computer - Total IT Solutions in Karachi',
    description: 'Trusted IT services and total computing solutions in Karachi since 1999. Support, networking, cybersecurity, cloud, hardware, software, and maintenance.',
    images: [
      {
        url: 'https://bioniccomputer.com.pk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bionic Computer - IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bionic Computer - Total IT Solutions in Karachi',
    description: 'Trusted IT services and total computing solutions in Karachi since 1999',
    images: ['https://bioniccomputer.com.pk/og-image.jpg'],
    creator: '@bioniccomputer',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#0052CC" />
        <meta name="msapplication-TileColor" content="#0052CC" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Bionic Computer',
              url: 'https://bioniccomputer.com.pk',
              logo: 'https://bioniccomputer.com.pk/logo-horizontal.svg',
              description: 'Trusted IT services and total computing solutions provider in Karachi since 1999',
              sameAs: [
                'https://www.facebook.com/thebioniccomputer',
                'https://www.instagram.com/bionic_computer',
                'https://pk.linkedin.com/company/bioniccomputer',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+92-311-1444299',
                email: 'contact@bioniccomputer.com.pk',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Karachi',
                addressRegion: 'Sindh',
                addressCountry: 'PK',
              },
            }),
          }}
        />
        
        {/* Structured Data - Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Bionic Computer',
              image: 'https://bioniccomputer.com.pk/logo-horizontal.svg',
              description: 'IT services and total computing solutions provider in Karachi',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Karachi',
                addressRegion: 'Sindh',
                addressCountry: 'PK',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+92-311-1444299',
              },
              sameAs: [
                'https://www.facebook.com/thebioniccomputer',
                'https://www.instagram.com/bionic_computer',
              ],
            }),
          }}
        />

        {/* Structured Data - AEO/Answer Engine Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: 'Bionic Computer',
                  url: 'https://bioniccomputer.com.pk',
                  inLanguage: 'en-PK',
                  publisher: {
                    '@type': 'Organization',
                    name: 'Bionic Computer',
                  },
                },
                {
                  '@type': 'ItemList',
                  name: 'Bionic Computer IT Services',
                  itemListElement: [
                    'IT Consulting and Support',
                    'Infrastructure Management',
                    'Cybersecurity and Data Protection',
                    'Cloud Solutions',
                    'Computer Hardware Sales and Repair',
                    'Annual Maintenance Agreements',
                    'Structured Cabling and LAN/WAN Networking',
                    'Windows and Linux Support',
                    'Software Development',
                    'Website Development',
                  ].map((name, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                      '@type': 'Service',
                      name,
                      provider: {
                        '@type': 'LocalBusiness',
                        name: 'Bionic Computer',
                        url: 'https://bioniccomputer.com.pk',
                        telephone: '+92-311-1444299',
                      },
                      areaServed: {
                        '@type': 'City',
                        name: 'Karachi',
                      },
                    },
                  })),
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'Does Bionic Computer offer on-site IT support in Karachi?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Bionic Computer provides on-site IT support, hardware repair, networking, cabling, maintenance, and troubleshooting services for businesses and offices in Karachi.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How can I contact Bionic Computer for IT support?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'You can call Bionic Computer at +92 311 1444299, email contact@bioniccomputer.com.pk, or send a message through the website contact form for IT support and consultation.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can I buy computer hardware and accessories from Bionic Computer?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Bionic Computer supplies computers, laptops, printers, accessories, parts, UPS/stabilizers, and branded products including Dell, HP, Lenovo, Microsoft, and networking products.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does Bionic Computer provide annual maintenance agreements?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Bionic Computer provides annual maintenance agreements, preventive maintenance, system upgrades, repair/replacement support, and scheduled IT support for businesses.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can Bionic Computer design a custom IT solution for my business?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Bionic Computer designs custom IT solutions for offices and enterprises, including infrastructure management, LAN/WAN networking, cybersecurity, cloud, Windows/Linux support, software development, and website development.',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
