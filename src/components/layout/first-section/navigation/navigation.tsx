"use client"

import Link from "next/link"
import { useState } from "react"

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Sobre mim", href: "#background" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#featured-projects" },
]

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState<string>("#background")

  return (
    <nav className="flex flex-col gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setActiveItem(item.href)}
          className={`group flex items-center gap-4 text-heading-sm transition-colors duration-100`}
        >
          <div
            className={`h-[1px] transition-all duration-100 ${
              activeItem === item.href
                ? "w-16 bg-gray-100"
                : "w-8 bg-gray-200 group-hover:w-16 group-hover:bg-gray-100"
            }`}
          />
          <span
            className={`transition-colors tracking-widest uppercase duration-100 ${
              activeItem === item.href
                ? "text-gray-100"
                : "text-gray-200 group-hover:text-gray-100"
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  )
}
