import './globals.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Monetag SDK */}
        <Script
          src="//libtl.com/sdk.js"
          data-zone="10544894"
          data-sdk="show_10544894"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
