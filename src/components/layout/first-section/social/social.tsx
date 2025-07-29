import { Github, Instagram, Linkedin, MessagesSquare } from "lucide-react"
import Link from "next/link"

type SocialItem = {
  href: string
  icon: React.ReactNode
  about: string
}

const socialItems: SocialItem[] = [
  {
    href: "https://www.linkedin.com/in/hnascx/",
    icon: <Linkedin />,
    about: "LinkedIn",
  },
  {
    href: "https://github.com/hnascx",
    icon: <Github />,
    about: "Github",
  },
  {
    href: "https://wa.me/5511948275951?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.",
    icon: <MessagesSquare />,
    about: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/hnascx/",
    icon: <Instagram />,
    about: "Instagram",
  },
]

export const Social = ({ href, icon, about }: SocialItem) => {
  return (
    <div className="flex gap-4">
      {socialItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target="_blank"
          about={item.about}
          className="text-gray-200 hover:text-gray-100 transition-colors duration-150"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
