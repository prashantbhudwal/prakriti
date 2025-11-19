import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Geist, Geist_Mono, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: 'Prakriti Bhudwal | Professional Hairstylist in Jammu | Trained at BBLUNT Mumbai',
  description: 'Expert hairstylist in Jammu trained at BBLUNT Mumbai. Specializing in hair styling, cutting, coloring, bobs, curly hair, and crazy colours. Certified by Wella, L\'Oréal, and Davines. Book your appointment today.',
  keywords: [
    'hairstylist Jammu',
    'hair stylist Jammu',
    'hair salon Jammu',
    'hair coloring Jammu',
    'bobs hairstyle Jammu',
    'curly hair specialist Jammu',
    'crazy hair colours Jammu',
    'Prakriti Bhudwal',
    'professional hairstylist',
    'hair cutting Jammu',
    'BBLUNT trained',
    'BBLUNT Mumbai',
    'Wella certified',
    'L\'Oréal certified',
    'Headmasters Salon Jammu',
    'hair care specialist',
    'Jammu Kashmir hairstylist',
    'Mumbai trained hairstylist'
  ],
  authors: [{ name: 'Prakriti Bhudwal' }],
  creator: 'Prakriti Bhudwal',
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: 'https://prakritibhudwal.com',
    title: 'Prakriti Bhudwal | Professional Hairstylist in Jammu | Trained at BBLUNT Mumbai',
    description: 'Expert hairstylist in Jammu trained at BBLUNT Mumbai. Specializing in hair styling, cutting, coloring, bobs, curly hair, and crazy colours. Certified by Wella, L\'Oréal, and Davines.',
    siteName: 'Prakriti Bhudwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakriti Bhudwal | Professional Hairstylist in Jammu',
    description: 'Expert hairstylist in Jammu trained at BBLUNT Mumbai. Specializing in hair styling, cutting, coloring, bobs, curly hair, and crazy colours.',
  },
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
  generator: 'v0.app',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#a855f7' },
    { media: '(prefers-color-scheme: dark)', color: '#7e22ce' }
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
