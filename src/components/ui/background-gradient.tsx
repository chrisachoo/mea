import { cn } from "~/lib/utils"

type Variant = "gradient" | "color"

interface BackgroundGradientProps {
  className?: string
  variant?: Variant
}

export function BackgroundGradient({
  className,
  variant = "gradient",
}: Readonly<BackgroundGradientProps>) {
  if (variant === "color") {
    return <div className="absolute inset-0 bg-black/20" />
  }

  return <div className={cn("absolute inset-0 bg-gradient-to-br from-secondary via-secondary/70 to-secondary/50 dark:from-gray-900 dark:via-secondary/10 dark:to-secondary/5 nature-pattern", className)} />
}
