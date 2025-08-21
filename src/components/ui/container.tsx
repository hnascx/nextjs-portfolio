import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full"
  centered?: boolean
  padding?: "none" | "sm" | "md" | "lg"
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      size = "lg",
      centered = true,
      padding = "md",
      children,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "max-w-3xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-none",
    }

    const paddingClasses = {
      none: "",
      sm: "px-4",
      md: "px-6 md:px-8",
      lg: "px-8 md:px-12",
    }

    const centeredClass = centered ? "mx-auto" : ""

    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          sizeClasses[size],
          paddingClasses[padding],
          centeredClass,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = "Container"

export { Container }
export type { ContainerProps }
