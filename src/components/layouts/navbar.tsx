import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu"
import { Menu, TreePalm } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "~/components/ui/link"
import { Separator } from "~/components/ui/separator"
import { routeList } from "~/constants"
import { cn } from "~/lib/utils"
import { Button, LinkButton } from "../ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import ModeToggle from "./mode-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? "glass-effect shadow-lg" : "bg-transparent"
    }`)}
    >
      <div className="flex h-16 items-center max-w-screen-xl justify-between mx-auto px-6">
        <Link href="/">
          <TreePalm />
        </Link>
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="items-center gap-2 hidden md:inline-flex">
          <ModeToggle />
          <LinkButton href="/booking" variant="default">Book Now</LinkButton>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  )
}

function NavMenu(props: Readonly<NavigationMenuProps>) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-2 md:gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {routeList.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink asChild>
              <Link href={href} scroll>{label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu className="cursor-pointer lg:hidden" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl bg-background border-secondary"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <Link href="/" className="flex items-center">
              <TreePalm className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
              Mbango Eco Adventure
            </Link>
          </SheetTitle>
          <Separator className="mt-2" />
        </SheetHeader>

        <div className="flex items-center p-4">
          <NavMenu orientation="vertical" className="mt-12" />
        </div>

        <SheetFooter className="flex-col sm:flex-col justify-start items-start">
          <Separator className="mb-2" />

          <ModeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
