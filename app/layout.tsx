import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Dev Stack — We build websites',
  description:
    'Oliver, Kieran, and Jayden are a three-person web studio. Design, engineering, and strategy for founders and growing brands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-color-mode="dark"
      data-light-theme="light"
      data-dark-theme="dark"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
