import type { AnchorHTMLAttributes } from "react"
import { useCallback } from "react"
import { cn } from "~/lib/utils"

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
  scroll?: boolean
}

export function Link({ children, className, href, onClick, scroll, ...props }: LinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (scroll && href?.startsWith("#")) {
        e.preventDefault()
        const targetId = href.slice(1)
        const target = document.getElementById(targetId)
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 96
          window.scrollTo({ behavior: "smooth", top: offsetTop })
        }
      }

      if (onClick) {
        onClick(e)
      }
    },
    [scroll, href, onClick],
  )

  return (
    <a
      className={cn(className)}
      href={href}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}
