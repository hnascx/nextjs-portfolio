import { Background } from "./background"
import { Experience } from "./experience"
import { FeaturedProjects } from "./featured-projects"

export const SecondSection = () => {
  return (
    <div className="flex flex-col bg-blue-950 min-h-screen gap-35">
      <Background />
      <Experience />
      <FeaturedProjects />
    </div>
  )
}
