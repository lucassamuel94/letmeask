import type { Metadata } from 'next'

import '@/styles/globals.css'
import { siteConfig } from '@/lib/config/site'
import { cn } from '@/lib/utils'
import { fontHeading, fontSans } from '@/styles/fonts'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-br' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          fontHeading.variable,
          'flex min-h-screen flex-col bg-white-background font-sans text-gray-dark antialiased'
        )}>
        {children}
      </body>
    </html>
  )
}
