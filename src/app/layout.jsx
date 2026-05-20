import './globals.css';
import ClientProviders from '@/components/ClientProviders';
import SeoJsonLd, { baseJsonLd } from '@/components/SeoJsonLd';

export const metadata = {
  metadataBase: new URL('https://bioniccomputer.com.pk'),
  title: 'Bionic Computer - Total IT Solutions in Karachi | Support, Networking & Hardware',
  description: 'Bionic Computer is a trusted IT services and total computing solutions company in Karachi, providing IT support, infrastructure management, networking, cybersecurity, cloud, hardware, software, and maintenance services since 1999.',
  keywords: 'IT solutions Karachi, IT support Karachi, hardware repair, network setup, cybersecurity Karachi, cloud solutions, annual maintenance agreement, computer repair, laptop repair, structured cabling, Windows Linux support, website development',
  authors: [{ name: 'Bionic Computer' }],
  creator: 'Bionic Computer',
  publisher: 'Bionic Computer',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
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
  themeColor: '#0052CC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="msapplication-TileColor" content="#0052CC" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        <SeoJsonLd data={baseJsonLd()} />
      </head>
      <body className="bg-white text-gray-900">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
