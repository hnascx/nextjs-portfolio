import type { Metadata } from "next"
import { Layout } from "../components/layout"
import { MouseMoveProvider } from "../components/providers/mouse-move-provider"
import { seoConfig } from "../lib/data/personal-info"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author }],
  creator: seoConfig.author,
  publisher: seoConfig.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: seoConfig.url,
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: seoConfig.title,
  },
  alternates: {
    canonical: seoConfig.url,
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black">
        <MouseMoveProvider>
          <Layout>{children}</Layout>
        </MouseMoveProvider>
      </body>
    </html>
  )
}
