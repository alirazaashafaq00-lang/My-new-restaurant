import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delicious Restaurant',
  description: 'Authentic Flavors, Memorable Experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
