import { Inter, Poppins } from "next/font/google"

import { FirstSection } from "./first-section"

type LayoutProps = {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ["latin"],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} ${poppins.variable} min-h-screen bg-black text-white mx-6 lg:mx-8`}
    >
      <div className="container">
        <div className="py-12 md:py-15 lg:py-23.5 grid grid-cols-1 lg:grid-cols-[45%_55%]">
          <header className="md:mx-7 lg:mx-4 lg:fixed">
            <FirstSection />
          </header>
          <main className="lg:col-start-2 lg:ml-4">{children}</main>
        </div>
      </div>
    </div>
  )
}
