import type { AnchorHTMLAttributes } from "react"

import { motion } from "motion/react"
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
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 64
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

export function AnimatedLink({
  children,
  className,
  href,
}: Readonly<{
  href: string
  children: React.ReactNode
  className?: string
}>) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ damping: 10, stiffness: 400, type: "spring" }}
    >
      <Link
        href={href}
        className={cn("hover:text-emerald-500 dark:hover:text-emerald-100 transition-colors", className)}
      >
        {children}
      </Link>
    </motion.div>
  )
}
