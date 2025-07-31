import { Layout } from "../components/layout"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-900">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
