import { ArrowUpRight } from "lucide-react"

type ExperienceProps = {
  title: string
  description: string
  tags: string[]
  company: string
  companyLink: string
  workPeriod: string
}

const experiences: ExperienceProps[] = [
  {
    title: "Desenvolvedor Fullstack Freelancer",
    description:
      "Desenvolvimento e manutenção de e-commerces Shopify. Integração com APIs e serviços de back-end.",
    tags: ["React.js", "Node.js", "Typescript", "Liquid"],
    company: "Loungerie",
    companyLink: "https://www.loungerie.com.br/",
    workPeriod: "AGO 2024 — JAN 2025",
  },
  {
    title: "Desenvolvedor React (VTEX IO)",
    description:
      "Desenvolvimento e manutenção de e-commerce utilizando React.js (VTEX IO), SCSS e Typescript. Integração com APIs e serviços de back-end. Interfaces periódicas com agência externa para processo de deploy de novas features.",
    tags: ["React.js", "Typescript", "SCSS"],
    company: "Loungerie",
    companyLink: "https://www.loungerie.com.br/",
    workPeriod: "AGO 2024 — JAN 2025",
  },
  {
    title: "Desenvolvedor Web",
    description:
      "Desenvolvimento de e-commerce e landing pages utilizando React e Wordpress. Desenvolvimento/manutenção de e-commerces nas plataformas VTEX e Nuvemshop. Criação de protótipos para aplicações web utilizando Figma.",
    tags: ["React.js", "Typescript", "Bootstrap", "CSS", "Wordpress"],
    company: "Zarif Tapetes",
    companyLink: "https://www.zariftapetes.com.br/",
    workPeriod: "OUT 2022 — JUL 2023",
  },
]

export const Experience = ({
  title,
  description,
  tags,
  company,
  companyLink,
}: ExperienceProps) => {
  return (
    <section className="group">
      <article className="grid grid-cols-[20%_80%] gap-8 relative cursor-pointer">
        <div className="absolute inset-0 -ml-6 -mr-9 -my-5 rounded-lg opacity-0 bg-white/4 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative text-body-xs font-medium text-gray-300 uppercase mt-1 transition-colors duration-300">
          2024 — Present
        </span>
        <div className="relative flex flex-col gap-2 w-fit">
          <h1 className="inline text-body-md text-gray-100 group-hover:text-cyan-100 transition-colors duration-300 w-fit">
            Desenvolvedor React (VTEX IO) · Loungerie
            <ArrowUpRight
              className="inline ml-1.25 translate-y-[2px] group-hover:-translate-y-[3px] group-hover:translate-x-[3px] text-gray-100 group-hover:text-cyan-100 transition-all duration-150 ease-in-out"
              size={15}
            />
          </h1>
          <p className="text-body-sm text-gray-200 max-w-[95%]">
            Desenvolvimento e manutenção de e-commerce utilizando React.js (VTEX
            IO), SCSS e Typescript. Integração com APIs e serviços de back-end.
            Interfaces periódicas com agência externa para processo de deploy de
            novas features.
          </p>
          <ul className="flex flex-row gap-2 mt-2">
            <li className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2">
              React.js
            </li>
            <li className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2">
              Typescript
            </li>
            <li className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2">
              SCSS
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
