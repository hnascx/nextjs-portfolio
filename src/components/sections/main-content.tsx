import { About } from "./about/about"
import { EndText } from "./end-text/end-text"
import { Experience } from "./experience/experience"
import { Projects } from "./projects/projects"

export const MainContent = () => {
  return (
    <section className="flex flex-col min-h-screen gap-24 lg:gap-36 mt-30 lg:mt-0 md:px-7">
      <About />
      <Experience />
      <Projects />
      <EndText />
    </section>
  )
}
