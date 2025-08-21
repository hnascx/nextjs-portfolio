import { personalInfo } from "@/lib/data/personal-info"

export const HeroSummary = () => {
  return (
    <section className="flex flex-col gap-3" aria-labelledby="name-title">
      <h1
        id="name-title"
        className="text-heading-md font-semibold text-3xl md:text-heading-lg text-gray-100 font-poppins"
      >
        {personalInfo.name}
      </h1>
      <h2 className="text-lg md:text-heading-md text-gray-100">
        {personalInfo.title}
      </h2>
      <p className="text-body-md text-gray-200 w-fit md:w-[50%] lg:w-[75%]">
        {personalInfo.description}
      </p>
    </section>
  )
}
