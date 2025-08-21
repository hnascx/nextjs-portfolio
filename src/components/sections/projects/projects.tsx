import { Tag } from "@/components/ui/tag"
import { featuredProjects } from "@/lib/data/projects"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Projects = () => {
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
            key={featuredProject.id}
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
                  alt={`Screenshot do projeto ${featuredProject.title}`}
                  width={1920}
                  height={1080}
                  className="rounded-sm border-2 border-gray-800 group-hover:border-2 group-hover:border-gray-600 transition-colors duration-300"
                  loading={featuredProject.priority <= 2 ? "eager" : "lazy"}
                  priority={featuredProject.priority <= 2}
                />
              </div>
              <div className="relative flex flex-col gap-2 w-fit">
                <h2 className="inline text-body-md text-gray-100 transition-colors duration-300 group-hover:text-cyan-100 w-fit">
                  {featuredProject.title}
                  <ArrowUpRight
                    className="inline ml-1.25 translate-y-[2px] transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] text-gray-100 group-hover:text-cyan-100"
                    size={15}
                    aria-hidden="true"
                  />
                </h2>
                <p className="text-body-sm text-gray-200 max-w-[95%]">
                  {featuredProject.description}
                </p>
                <ul className="flex flex-row flex-wrap gap-2" role="list">
                  {featuredProject.tags.map((tag) => (
                    <li key={tag} className="mt-2">
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mt-1 block md:hidden">
                <Image
                  src={featuredProject.image}
                  alt={`Screenshot do projeto ${featuredProject.title}`}
                  width={1920}
                  height={1080}
                  className="rounded-sm border-2 border-gray-800 group-hover:border-2 group-hover:border-gray-600 transition-colors duration-300 w-[60%] md:w-full"
                  loading={featuredProject.priority <= 2 ? "eager" : "lazy"}
                  priority={featuredProject.priority <= 2}
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
          aria-label="Ver todos os projetos no GitHub"
        >
          <h3 className="inline text-body-md font-medium text-gray-100 transition-colors duration-200 group-hover:text-cyan-100 w-fit">
            Ver todos os projetos
            <ArrowUpRight
              className="inline ml-1.25 translate-y-[1px] transition-transform duration-150 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] text-gray-100 group-hover:text-cyan-100"
              size={15}
              aria-hidden="true"
            />
          </h3>
        </Link>
      </section>
    </div>
  )
}
