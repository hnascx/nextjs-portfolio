import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost"
  padding?: "none" | "sm" | "md" | "lg"
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = "default", padding = "md", children, ...props },
    ref
  ) => {
    const variantClasses = {
      default: "bg-gray-900/50 border border-gray-800",
      outline: "border border-gray-700 bg-transparent",
      ghost: "bg-transparent border-transparent",
    }

    const paddingClasses = {
      none: "",
      sm: "p-3",
      md: "p-6",
      lg: "p-8",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg transition-all duration-200",
          variantClasses[variant],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

export { Card }
export type { CardProps }
