import { FirstSection } from "./first-section"

type LayoutProps = {
  children: React.ReactNode
}

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-inter",
// })

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen font-inter bg-blue-900 text-white">
      <div className="container mx-auto py-20 grid grid-cols-[45%_55%] ">
        <header className="fixed w-fit">
          <FirstSection />
        </header>
        <main className="col-start-2">{children}</main>
      </div>
    </div>
  )
}
