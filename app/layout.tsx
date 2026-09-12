import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SEBA ENTERPRISES | Quality Supplies for Better Building',
  description: 'Quality construction, agricultural, plumbing, electrical, and hardware supplies across Tanzania.',
  generator: 'Prazoo',
  icons: {
    icon: [
      {
        url: '/seba_logo_small.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/seba_logo_small.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/seba_logo_small.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
