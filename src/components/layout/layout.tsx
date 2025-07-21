import { FirstSection } from "./first-section"

type LayoutProps = {
  children: React.ReactNode
}

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-inter",
// })

// const ptSansCaption = PT_Sans_Caption({
//   subsets: ["latin"],
//   weight: ["700"],
//   variable: "--font-sans",
// })

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen font-inter">
      <div className="container mx-auto p-20 relative flex justify-between items-center">
        <FirstSection />
        <main>{children}</main>
      </div>
    </div>
  )
}
