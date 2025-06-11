import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu"
import { Menu, TreePalm } from "lucide-react"
import { Separator } from "~/components/ui/separator"
import { routeList } from "~/constants"
import { Button } from "../ui/button"
import { Link } from "../ui/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import ModeToggle from "./mode-toggle"

export function Navbar() {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background/70 border dark:border-secondary max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Link href="/">
          <TreePalm />
        </Link>
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />
        <ModeToggle className="hidden md:inline-flex" />

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
              <Link href={href}>{label}</Link>
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
