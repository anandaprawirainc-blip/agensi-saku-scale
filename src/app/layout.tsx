import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'SakuScale - SEO & Digital Marketing Agency for UMKM Indonesia',
  description: 'Helping Indonesian UMKM scale faster with SEO, Google Ads, Meta Ads, TikTok Ads, and websites that convert. Trusted by 100+ growing brands.',
  keywords: [
    'SEO agency Indonesia',
    'SEO for UMKM', 
    'Google Ads management',
    'Meta Ads',
    'TikTok Ads',
    'marketplace optimization',
    'website development',
    'GEO for AI',
    'jasa SEO untuk UMKM',
    'iklan Google',
    'iklan Meta',
    'iklan TikTok',
    'optimasi marketplace',
    'pembuatan website',
    'jasa pengembangan aplikasi'
  ],
  authors: [{ name: 'SakuScale' }],
  creator: 'SakuScale',
  publisher: 'SakuScale',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    url: 'https://sakuscale.co',
    siteName: 'SakuScale',
    title: 'SakuScale - SEO & Digital Marketing Agency for UMKM Indonesia',
    description: 'Helping Indonesian UMKM scale faster with SEO, Google Ads, Meta Ads, TikTok Ads, and websites that convert. Trusted by 100+ growing brands.',
    images: [
      {
        url: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/873dbd7e-15d6-4f5a-a8de-62aeed48a3ee.png',
        width: 1200,
        height: 630,
        alt: 'SakuScale - Digital Marketing Agency for UMKM Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SakuScale - SEO & Digital Marketing Agency for UMKM Indonesia',
    description: 'Helping Indonesian UMKM scale faster with SEO, Google Ads, Meta Ads, TikTok Ads, and websites that convert.',
    images: ['https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18a68837-1c08-4c5d-96bd-833ca222800a.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://sakuscale.co',
    languages: {
      'en': 'https://sakuscale.co/en',
      'id': 'https://sakuscale.co',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SakuScale",
              "url": "https://sakuscale.co",
              "logo": "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f12b468-18bd-4178-87a3-b022af0fcbf1.png",
              "description": "Digital marketing agency specializing in SEO, Google Ads, Meta Ads, TikTok Ads, and website development for Indonesian UMKM and growing brands.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressRegion": "Jakarta"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62XXXXXXXXXXX",
                "contactType": "customer service",
                "availableLanguage": ["Indonesian", "English"]
              },
              "sameAs": [
                "https://instagram.com/sakuscale",
                "https://linkedin.com/company/sakuscale"
              ]
            })
          }}
        />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SakuScale",
              "image": "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f353ffa0-cd83-4ab2-88e2-2b6075bd911e.png",
              "description": "Digital marketing agency for Indonesian UMKM",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressRegion": "Jakarta"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.2088,
                "longitude": 106.8456
              },
              "telephone": "+62XXXXXXXXXXX",
              "email": "hello@sakuscale.co",
              "url": "https://sakuscale.co",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00"
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SakuScale",
              "url": "https://sakuscale.co",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sakuscale.co/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}