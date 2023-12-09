import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Alco Shop',
  description: 'Najlepszy sklep z alkoholami',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/bootle.png",
        href: "/bootle.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/bootle.png",
        href: "/bootle.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
