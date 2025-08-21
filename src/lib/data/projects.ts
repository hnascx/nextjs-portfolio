export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  projectLink: string
  image: string
  priority: number
}

export const featuredProjects: Project[] = [
  {
    id: "bookwise",
    title: "Bookwise",
    description:
      "Plataforma de avaliações de livros desenvolvida com Next.js, TypeScript e StitchesJS. Foi utilizado Prisma como ORM e SQLite como banco de dados. As requisições à API foram gerenciadas com React Query e Axios, enquanto a validação de formulários foi feita com Zod. A autenticação de usuários foi implementada com NextAuth, permitindo login via GitHub e Google.",
    tags: ["Next.js", "Typescript", "StitchesJS", "Prisma", "SQLite"],
    projectLink: "https://github.com/hnascx/nextjs-bookwise",
    image: "/assets/bookwise.png",
    priority: 1,
  },
  {
    id: "site-set",
    title: "Site.Set",
    description:
      "Landing Page e Blog desenvolvidos com Next.js utilizando conceitos de SSR e SSG, gerenciamento dinâmico de conteúdo e boas práticas de SEO.",
    tags: ["Next.js", "Typescript", "TailwindCSS"],
    projectLink: "https://nextjs-lp-and-blog.vercel.app/",
    image: "/assets/lp-e-blog.png",
    priority: 2,
  },
  {
    id: "forum-api",
    title: "Fórum — API",
    description:
      "API de Fórum construída com NestJS, seguindo os princípios da Clean Architecture, DDD e SOLID. Permite a criação de contas, autenticação, publicação de perguntas, respostas, comentários, anexos e notificações.",
    tags: ["Nest.js", "Typescript", "PostgreSQL", "Prisma", "Docker", "Vitest"],
    projectLink: "https://github.com/hnascx/nestjs-forum-api/",
    image: "/assets/api.png",
    priority: 3,
  },
  {
    id: "forum-ddd",
    title: "Fórum — DDD",
    description:
      "Estrutura de uma API de fórum modular, inspirada em Domain-Driven Design (DDD), construída com TypeScript. Este projeto demonstra os princípios da arquitetura limpa, separação de responsabilidades e desenvolvimento orientado a testes para uma aplicação do tipo fórum.",
    tags: ["Typescript", "Vitest", "DDD"],
    projectLink: "https://github.com/hnascx/ddd-forum/",
    image: "/assets/api.png",
    priority: 4,
  },
]
