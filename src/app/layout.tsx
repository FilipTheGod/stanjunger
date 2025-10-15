import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  weight: "200",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ines & filip's wedding website",
  openGraph: {
    title: "ines & filip's wedding website",
    url: "https://stanjunger.wedding",
    siteName: "ines & filip's wedding website",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ines & filip's wedding website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}