import { Inter } from "next/font/google"

import { FirstSection } from "./first-section"

type LayoutProps = {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ["latin"],
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} min-h-screen bg-blue-900 text-white mx-6 md:mx-8`}
    >
      <div className="container">
        <div className="py-12 md:py-23.5 grid grid-cols-1 md:grid-cols-[45%_55%]">
          <header className="md:fixed md:mx-4">
            <FirstSection />
          </header>
          <main className="md:col-start-2 md:ml-4">{children}</main>
        </div>
      </div>
    </div>
  )
}
