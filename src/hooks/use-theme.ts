import { useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light")

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

  return {
    setTheme,
    theme,
  }
}
