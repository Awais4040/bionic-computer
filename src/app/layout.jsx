import './globals.css';
import ClientProviders from '@/components/ClientProviders';

export const metadata = {
  title: 'Bionic Computer - Professional IT Solutions in Karachi | Hardware Repair & Support',
  description: 'Bionic Computer is Karachi\'s leading IT and hardware solutions provider. Offering network setup, hardware repair, software support, website development, and 24/7 IT assistance. 10+ years experience serving 500+ clients.',
  keywords: 'IT solutions Karachi, hardware repair, network setup, software support, IT support Pakistan, computer repair, laptop repair, networking services, website development',
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
    title: 'Bionic Computer - Professional IT Solutions in Karachi',
    description: 'Leading IT and hardware solutions provider in Karachi. Hardware repair, networking, software support, and website development.',
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
    title: 'Bionic Computer - Professional IT Solutions in Karachi',
    description: 'Leading IT and hardware solutions provider in Karachi',
    images: ['https://bioniccomputer.com.pk/og-image.jpg'],
    creator: '@bioniccomputer',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
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
              description: 'Professional IT and hardware solutions provider in Karachi',
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
              description: 'IT and Hardware Solutions Provider',
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
      </head>
      <body className="bg-white text-gray-900">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
