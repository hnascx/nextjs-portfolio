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
      className={`${inter.className} min-h-screen bg-blue-900 text-white`}
    >
      <div className="container mx-auto py-20 grid grid-cols-[48%_52%] ">
        <header className="fixed w-fit">
          <FirstSection />
        </header>
        <main className="col-start-2">{children}</main>
      </div>
    </div>
  )
}
