import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { generateSEO, structuredData } from "@/lib/seo"
import { GoogleAnalytics } from '@next/third-parties/google'
import "../styles/globals.css"


export const metadata: Metadata = generateSEO()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logov4.jpg" sizes="any" />
        <link rel="icon" href="/logov4.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logov4.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.service),
          }}
        />

        // Google Anaylatics tags
        
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <GoogleAnalytics gaId="G-WV83P40F7K" />
      </body>
    </html>
  )
}
