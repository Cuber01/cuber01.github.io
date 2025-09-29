import './global.css'
import './blog/markdown.css'
import './components/components.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { baseUrl } from './sitemap'
import { Poppins } from 'next/font/google'
import { Oxygen } from 'next/font/google'

const oxygen = Oxygen({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-oxygen',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['500',  '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jan P. Englert',
    template: '%s | Jan P. Englert',
  },
  description: 'This is my Website.',
  openGraph: {
    title: "Jan Piotr Englert's Website",
    url: baseUrl,
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <head>
    	<link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Site RSS Feed">
    </head>
    
    <html
      lang="en"
      className={`${poppins.variable} ${oxygen.variable} text-[var(--text-color)] bg-[var(--bg-color)]` }
    >

      <body className="oxygen antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
