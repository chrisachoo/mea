import type { AnchorHTMLAttributes } from "react"
import { cn } from "~/lib/utils"

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ children, className, ...props }: LinkProps & { children: React.ReactNode }) {
  return (
    <a
      className={cn(className)}
      {...props}
    >
      {children}
    </a>
  )
}
