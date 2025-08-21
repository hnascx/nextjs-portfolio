"use client"

import { useScrollSpy } from "@/lib/hooks/use-scroll-spy"
import Link from "next/link"
import { useEffect } from "react"

type NavItem = {
  label: string
  href: string
  id: string
}

const navItems: NavItem[] = [
  { label: "Sobre mim", href: "#background", id: "background" },
  { label: "Experiência", href: "#experience", id: "experience" },
  { label: "Projetos", href: "#featured-projects", id: "featured-projects" },
]

export const HeroNavigation = () => {
  const activeItem = useScrollSpy(
    navItems.map((item) => item.id),
    50
  )

  // Log temporário para debug
  useEffect(() => {
    console.log("HeroNavigation: activeItem mudou para:", activeItem)
  }, [activeItem])

  console.log("HeroNavigation renderizando com activeItem:", activeItem)

  return (
    <nav
      className="hidden lg:flex flex-col w-fit"
      aria-label="Navegação principal"
    >
      {navItems.map((item) => {
        const isActive = activeItem === item.id
        console.log(`Item ${item.id}: isActive = ${isActive}`)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center gap-4 text-heading-sm transition-colors duration-150 py-3 scroll-smooth`}
            aria-current={isActive ? "page" : undefined}
          >
            <div
              className={`h-[1px] transition-all duration-150 ${
                isActive
                  ? "w-16 bg-gray-100"
                  : "w-8 bg-gray-200 group-hover:w-16 group-hover:bg-gray-100"
              }`}
              aria-hidden="true"
            />
            <span
              className={`transition-colors tracking-widest uppercase duration-150 ${
                isActive
                  ? "text-gray-100"
                  : "text-gray-200 group-hover:text-gray-100"
              }`}
            >
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
