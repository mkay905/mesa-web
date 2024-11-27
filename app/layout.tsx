import '../app/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets
: ['latin'] })

export const metadata = {
  title: 'Mera Samaaj - Your Community Social Platform',
  description: 'Connect with your community, build family trees, and explore matrimony options with Mera Samaaj.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}<Analytics /></body>
    </html>
  )
}

