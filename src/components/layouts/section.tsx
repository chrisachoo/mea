import React from "react"
import { cn } from "~/lib/utils"

type SectionProps = React.ComponentProps<"section"> & {
  type?: "layout" | "raw"
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  type = "layout",
  ...props
}) => {
  const baseClass
    = type === "layout"
      ? "max-w-screen-xl w-full mx-auto px-6 py-12"
      : ""

  return (
    <section className={cn(baseClass, className)} {...props}>
      {children}
    </section>
  )
}
