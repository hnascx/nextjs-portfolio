export interface Experience {
  id: string
  title: string
  description: string
  tags: string[]
  company: string
  companyLink: string
  workPeriod: string
  priority: number
}

export const experiences: Experience[] = [
  {
    id: "freelancer",
    title: "Desenvolvedor Fullstack Freelancer",
    description:
      "Desenvolvimento e manutenção de e-commerces. Integração com APIs e serviços de back-end.",
    tags: ["React.js", "Node.js", "Typescript", "Liquid", "Shopify"],
    company: "Autônomo",
    companyLink:
      "https://wa.me/5511948275951?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.",
    workPeriod: "JAN 2025 — PRESENTE",
    priority: 1,
  },
  {
    id: "loungerie",
    title: "Desenvolvedor React",
    description:
      "Desenvolvimento e manutenção de e-commerce utilizando React.js (VTEX IO), SCSS e Typescript. Integração com APIs e serviços de back-end. Interfaces periódicas com agência externa para processo de deploy de novas features.",
    tags: ["React.js", "Typescript", "VTEX IO", "SCSS"],
    company: "Loungerie",
    companyLink: "https://www.loungerie.com.br/",
    workPeriod: "AGO 2024 — JAN 2025",
    priority: 2,
  },
  {
    id: "zarif",
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
    priority: 3,
  },
]
