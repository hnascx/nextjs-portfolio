import { HeroNavigation } from "./hero-nav"
import { HeroSocial } from "./hero-social"
import { HeroSummary } from "./hero-summary"

export const Hero = () => {
  return (
    <section className="flex flex-col lg:h-[calc(100vh-11.75rem)] lg:justify-between">
      <div className="flex flex-col gap-16">
        <HeroSummary />
        <HeroNavigation />
      </div>
      <HeroSocial />
    </section>
  )
}
