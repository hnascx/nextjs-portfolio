import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

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
      "Desenvolvimento e manutenção de e-commerces. Integração com APIs e serviços de back-end.",
    tags: ["React.js", "Node.js", "Typescript", "Liquid", "Shopify"],
    company: "Autônomo",
    companyLink:
      "https://wa.me/5511948275951?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.",
    workPeriod: "JAN 2025 — PRESENTE",
  },
  {
    title: "Desenvolvedor React",
    description:
      "Desenvolvimento e manutenção de e-commerce utilizando React.js (VTEX IO), SCSS e Typescript. Integração com APIs e serviços de back-end. Interfaces periódicas com agência externa para processo de deploy de novas features.",
    tags: ["React.js", "Typescript", "VTEX IO", "SCSS"],
    company: "Loungerie",
    companyLink: "https://www.loungerie.com.br/",
    workPeriod: "AGO 2024 — JAN 2025",
  },
  {
    title: "Desenvolvedor Web",
    description:
      "Desenvolvimento de e-commerce e landing pages utilizando React e Wordpress. Desenvolvimento/manutenção de e-commerces nas plataformas VTEX e Nuvemshop. Criação de protótipos para aplicações web utilizando Figma.",
    tags: [
      "React.js",
      "Typescript",
      "Bootstrap",
      "Wordpress",
      "VTEX IO",
      "Nuvemshop",
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    company: "Zarif Tapetes",
    companyLink: "https://www.zariftapetes.com.br/",
    workPeriod: "OUT 2022 — JUL 2023",
  },
]

export const Experience = () => {
  return (
    <div className="flex flex-col gap-14">
      <section className="group/list flex flex-col gap-14">
        {experiences.map((experience) => (
          <Link
            key={experience.title}
            href={experience.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group opacity-100 transition-opacity duration-300 group-hover/list:opacity-40 hover:!opacity-100"
          >
            <article className="grid grid-cols-[25%_75%] gap-9 relative cursor-pointer">
              <div className="absolute inset-0 -ml-6 -mr-9 -my-5 rounded-lg opacity-0 bg-white/4 border-t border-transparent transition-[opacity,border-color] duration-300 group-hover:opacity-50 group-hover:border-gray-700" />
              <span className="relative text-body-xs font-medium text-gray-300 uppercase mt-1">
                {experience.workPeriod}
              </span>
              <div className="relative flex flex-col gap-2 w-fit">
                <h1 className="inline text-body-md text-gray-100 transition-colors duration-300 group-hover:text-cyan-100 w-fit">
                  {experience.title} · {experience.company}
                  <ArrowUpRight
                    className="inline ml-1.25 translate-y-[2px] transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] text-gray-100 group-hover:text-cyan-100"
                    size={15}
                  />
                </h1>
                <p className="text-body-sm text-gray-200 max-w-[95%]">
                  {experience.description}
                </p>
                <ul className="flex flex-row flex-wrap gap-2 mt-2">
                  {experience.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Link>
        ))}
      </section>
      <section>
        <Link
          className="group relative flex flex-col gap-2 w-fit"
          href="/Currículo - Fullstack.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="inline text-body-md font-medium text-gray-100 transition-colors duration-200 group-hover:text-cyan-100 w-fit">
            Ver currículo completo
            <ArrowUpRight
              className="inline ml-1.25 translate-y-[1px] transition-transform duration-150 group-hover:-translate-y-[3.5px] group-hover:translate-x-[3.5px] text-gray-100 group-hover:text-cyan-100"
              size={15}
            />
          </h1>
        </Link>
      </section>
    </div>
  )
}
