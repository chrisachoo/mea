import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "~/hooks/use-theme"
import { cn } from "~/lib/utils"
import { Button } from "../ui/button"

export default function ModeToggle({ className }: { readonly className?: string }) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      className={cn("cursor-pointer", className)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      variant="outline"
    >
      <SunIcon
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <MoonIcon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
