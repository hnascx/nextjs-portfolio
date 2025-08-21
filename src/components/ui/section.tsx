import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
  scrollMargin?: boolean
  as?: "section" | "div" | "article"
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      id,
      spacing = "lg",
      scrollMargin = true,
      as: Component = "section",
      children,
      ...props
    },
    ref
  ) => {
    const spacingClasses = {
      none: "",
      sm: "py-8",
      md: "py-12",
      lg: "py-24",
      xl: "py-36",
    }

    const scrollMarginClass = scrollMargin ? "scroll-mt-23.5" : ""

    return (
      <Component
        ref={ref}
        id={id}
        className={cn(
          "w-full",
          spacingClasses[spacing],
          scrollMarginClass,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Section.displayName = "Section"

export { Section }
export type { SectionProps }
