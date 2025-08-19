import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type FeaturedProjectsProps = {
  title: string
  description: string
  tags: string[]
  projectLink: string
  image: string
}

const featuredProjects: FeaturedProjectsProps[] = [
  {
    title: "Bookwise",
    description:
      "Plataforma de avaliações de livros desenvolvida com Next.js, TypeScript e StitchesJS. Foi utilizado Prisma como ORM e SQLite como banco de dados. As requisições à API foram gerenciadas com React Query e Axios, enquanto a validação de formulários foi feita com Zod. A autenticação de usuários foi implementada com NextAuth, permitindo login via GitHub e Google.",
    tags: ["Next.js", "Typescript", "StitchesJS", "Prisma", "SQLite"],
    projectLink: "https://github.com/hnascx/nextjs-bookwise",
    image: "/assets/bookwise.png",
  },
  {
    title: "Site.Set",
    description:
      "Landing Page e Blog desenvolvidos com Next.js utilizando conceitos de SSR e SSG, gerenciamento dinâmico de conteúdo e boas práticas de SEO.",
    tags: ["Next.js", "Typescript", "TailwindCSS"],
    projectLink: "https://nextjs-lp-and-blog.vercel.app/",
    image: "/assets/lp-e-blog.png",
  },
  {
    title: "Fórum — API",
    description:
      "API de Fórum construída com NestJS, seguindo os princípios da Clean Architecture, DDD e SOLID. Permite a criação de contas, autenticação, publicação de perguntas, respostas, comentários, anexos e notificações.",
    tags: ["Nest.js", "Typescript", "PostgreSQL", "Prisma", "Docker", "Vitest"],
    projectLink: "https://github.com/hnascx/nestjs-forum-api/",
    image: "/assets/api.png",
  },
  {
    title: "Fórum — DDD",
    description:
      "Estrutura de uma API de fórum modular, inspirada em Domain-Driven Design (DDD), construída com TypeScript. Este projeto demonstra os princípios da arquitetura limpa, separação de responsabilidades e desenvolvimento orientado a testes para uma aplicação do tipo fórum.",
    tags: ["Typescript", "Vitest", "DDD"],
    projectLink: "https://github.com/hnascx/ddd-forum/",
    image: "/assets/api.png",
  },
]

export const FeaturedProjects = () => {
  return (
    <div
      id="featured-projects"
      className="flex flex-col gap-9 lg:gap-14 scroll-mt-23.5"
    >
      <span className="uppercase text-gray-100 font-medium text-heading-sm text-sm tracking-widest lg:hidden">
        Projetos em destaque
      </span>
      <section className="group/list flex flex-col gap-14">
        {featuredProjects.map((featuredProject) => (
          <Link
            key={featuredProject.title}
            href={featuredProject.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group opacity-100 transition-opacity duration-300 group-hover/list:opacity-40 hover:!opacity-100"
          >
            <article className="grid md:grid-cols-[25%_75%] gap-4 md:gap-9 relative cursor-pointer">
              <div className="absolute inset-0 md:-ml-6 md:-mr-9 -my-5 rounded-lg opacity-0 bg-white/4 border-t border-transparent transition-[opacity,border-color] duration-300 group-hover:opacity-50 group-hover:border-gray-700 hidden md:block" />
              <div className="relative mt-1 hidden md:block">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  width={1920}
                  height={1080}
                  className="rounded-sm border-2 border-gray-800 group-hover:border-2 group-hover:border-gray-600 transition-colors duration-300"
                />
              </div>
              <div className="relative flex flex-col gap-2 w-fit">
                <h1 className="inline text-body-md text-gray-100 transition-colors duration-300 group-hover:text-cyan-100 w-fit">
                  {featuredProject.title}
                  <ArrowUpRight
                    className="inline ml-1.25 translate-y-[2px] transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] text-gray-100 group-hover:text-cyan-100"
                    size={15}
                  />
                </h1>
                <p className="text-body-sm text-gray-200 max-w-[95%]">
                  {featuredProject.description}
                </p>
                <ul className="flex flex-row flex-wrap gap-2 mt-2">
                  {featuredProject.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mt-1 block md:hidden">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  width={1920}
                  height={1080}
                  className="rounded-sm border-2 border-gray-800 group-hover:border-2 group-hover:border-gray-600 transition-colors duration-300 w-[60%] md:w-full"
                />
              </div>
            </article>
          </Link>
        ))}
      </section>
      <section>
        <Link
          className="group relative flex flex-col gap-2 w-fit"
          href="https://github.com/hnascx?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="inline text-body-md font-medium text-gray-100 transition-colors duration-200 group-hover:text-cyan-100 w-fit">
            Ver todos os projetos
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
