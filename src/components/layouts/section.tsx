import type React from "react"
import { cn } from "~/lib/utils"

export function Section({ children, className, ...props }: React.ComponentProps<"section"> & { children: React.ReactNode }) {
  return (
    <section className={cn("max-w-screen-xl w-full mx-auto px-6 py-12", className)} {...props}>
      {children}
    </section>
  )
}
