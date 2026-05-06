import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Roboto, Roboto_Slab } from 'next/font/google'

import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/lib/auth-context'
import { buildSiteMetadata } from '@/lib/seo'
import { getFactoryState } from '@/design/factory/get-factory-state'

const fontSans = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
const fontDisplay = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  return buildSiteMetadata()
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const { recipe, brandPack } = getFactoryState()

  return (
    <html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body
        data-site-shell={recipe.homeLayout}
        data-motion-pack={recipe.motionPack}
        className={`nubsant-theme ${fontSans.className} ${brandPack.bodyClassName} ${brandPack.fontClassName} ${brandPack.paletteClassName}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
