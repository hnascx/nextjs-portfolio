import { Tag } from "@/components/ui/tag"
import { experiences } from "@/lib/data/experience"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col gap-9 lg:gap-14 scroll-mt-23.5"
    >
      <span className="uppercase text-gray-100 font-medium text-heading-sm text-sm tracking-widest lg:hidden">
        Experiências
      </span>
      <section className="group/list flex flex-col gap-14">
        {experiences.map((experience) => (
          <Link
            key={experience.id}
            href={experience.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group opacity-100 transition-opacity duration-300 group-hover/list:opacity-40 hover:!opacity-100"
          >
            <article className="grid md:grid-cols-[25%_75%] gap-2 md:gap-9 relative cursor-pointer">
              <div className="absolute inset-0 md:-ml-6 md:-mr-9 -my-5 rounded-lg opacity-0 bg-white/4 border-t border-transparent transition-[opacity,border-color] duration-300 group-hover:opacity-50 group-hover:border-gray-700" />
              <span className="relative text-body-xs font-medium text-gray-300 uppercase mt-1">
                {experience.workPeriod}
              </span>
              <div className="relative flex flex-col gap-2 w-fit">
                <h2 className="inline text-body-md text-gray-100 transition-colors duration-300 group-hover:text-cyan-100 w-fit">
                  {experience.title} · {experience.company}
                  <ArrowUpRight
                    className="inline ml-1.25 translate-y-[2px] transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] text-gray-100 group-hover:text-cyan-100"
                    size={15}
                    aria-hidden="true"
                  />
                </h2>
                <p className="text-body-sm text-gray-200 max-w-[95%]">
                  {experience.description}
                </p>
                <ul className="flex flex-row flex-wrap gap-2" role="list">
                  {experience.tags.map((tag) => (
                    <li key={tag} className="mt-2">
                      <Tag>{tag}</Tag>
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
          className="group relative flex flex-col gap-2 w-fit mt-5 md:my-4 lg:mt-0"
          href="/Currículo - Fullstack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver currículo completo em PDF"
        >
          <h3 className="inline text-body-md font-medium text-gray-100 transition-colors duration-200 group-hover:text-cyan-100 w-fit">
            Ver currículo completo
            <ArrowUpRight
              className="inline ml-1.25 translate-y-[1px] transition-transform duration-150 group-hover:-translate-y-[3.5px] group-hover:translate-x-[3px] text-gray-100 group-hover:text-cyan-100"
              size={15}
              aria-hidden="true"
            />
          </h3>
        </Link>
      </section>
    </div>
  )
}
