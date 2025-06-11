import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "~/lib/utils"
import { Button } from "../ui/button"

export default function ModeToggle({ className }: { readonly className?: string }) {
  const [theme, setTheme] = useState <"light" | "dark" | "system"> ("light")

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setTheme(isDarkMode ? "dark" : "light")
  }, [])

  useEffect(() => {
    const isDark = theme === "dark" || (theme === "system"
      && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

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
