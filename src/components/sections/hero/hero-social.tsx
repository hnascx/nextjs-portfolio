import { personalInfo } from "@/lib/data/personal-info"
import { Github, Instagram, Linkedin, MessagesSquare } from "lucide-react"
import Link from "next/link"

type SocialItem = {
  href: string
  icon: React.ReactNode
  about: string
  label: string
}

const socialItems: SocialItem[] = [
  {
    href: personalInfo.social.linkedin,
    icon: <Linkedin />,
    about: "LinkedIn",
    label: "Perfil do LinkedIn",
  },
  {
    href: personalInfo.social.github,
    icon: <Github />,
    about: "Github",
    label: "Perfil do GitHub",
  },
  {
    href: personalInfo.social.whatsapp,
    icon: <MessagesSquare />,
    about: "WhatsApp",
    label: "Conversar no WhatsApp",
  },
  {
    href: personalInfo.social.instagram,
    icon: <Instagram />,
    about: "Instagram",
    label: "Perfil do Instagram",
  },
]

export const HeroSocial = () => {
  return (
    <nav className="flex gap-4 mt-8 lg:mt-0" aria-label="Redes sociais">
      {socialItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="text-gray-200 hover:text-gray-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-cyan-100 focus:ring-offset-2 focus:ring-offset-black rounded"
        >
          {item.icon}
        </Link>
      ))}
    </nav>
  )
}
