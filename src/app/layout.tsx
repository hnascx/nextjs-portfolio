import { Layout } from "../components/layout"
import { MouseMoveProvider } from "../components/providers/mouse-move-provider"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-900">
        <MouseMoveProvider>
          <Layout>{children}</Layout>
        </MouseMoveProvider>
      </body>
    </html>
  )
}
