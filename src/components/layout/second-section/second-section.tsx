import { Background } from "./background"
import { EndText } from "./end-text"
import { Experience } from "./experience"
import { FeaturedProjects } from "./featured-projects"

export const SecondSection = () => {
  return (
    <section className="flex flex-col min-h-screen gap-36 px-7">
      <Background />
      <Experience />
      <FeaturedProjects />
      <EndText />
    </section>
  )
}
