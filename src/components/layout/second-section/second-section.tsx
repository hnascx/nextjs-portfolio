import { Background } from "./background"
import { Experience } from "./experience"
import { FeaturedProjects } from "./featured-projects"

export const SecondSection = () => {
  return (
    <section className="flex flex-col min-h-screen gap-35">
      <Background />
      <Experience />
      <FeaturedProjects />
    </section>
  )
}
