import { Navigation } from "./navigation"
import { Social } from "./social"
import { Summarize } from "./summarize"

export const FirstSection = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] justify-between">
      <div className="flex flex-col gap-20">
        <Summarize />
        <Navigation />
      </div>
      <Social />
    </div>
  )
}
