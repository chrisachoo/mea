import { LinkButton } from "~/components/ui/button"
import { AnimatedLink, Link } from "~/components/ui/link"
import { Logo } from "~/components/ui/logo"
import { aboutLinks, coreFeatures, footerMenu, footerResources } from "~/constants"
import { getYear } from "~/lib/help"
import { cn } from "~/lib/utils"

function renderLinkList(items: { icon: React.ElementType, link: string, title: string }[], className = "space-y-2 text-sm") {
  return (
    <ul className={className}>
      {items.map(({ icon: Icon, link, title }) => (
        <li key={title}>
          <AnimatedLink href={link} className="flex items-center gap-2">
            <Icon size={16} />
            {title}
          </AnimatedLink>
        </li>
      ))}
    </ul>
  )
}

function renderStaticList(items: { icon: React.ElementType, title: string }[], className = "space-y-2 text-sm") {
  return (
    <ul className={className}>
      {items.map(({ icon: Icon, title }) => (
        <li key={title} className="flex items-center space-x-2">
          <Icon size={16} />
          <span>{title}</span>
        </li>
      ))}
    </ul>
  )
}

export function Footer({ className }: { readonly className?: string }) {
  const currentYear = getYear()

  return (
    <footer className={cn("flex w-full items-center border-gray-200 dark:border-gray-800 bg-inherit", className)}>
      <div className="grid mx-auto max-w-7xl w-full items-center">
        <div className="grid grid-cols-1 gap-8 border-t px-5 py-8 sm:px-10 md:grid-cols-4">
          <div className="space-y-4">
            <Logo name="short" text="About" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Creating unforgettable adventures and educational experiences in nature's most spectacular destinations.
            </p>
            {renderLinkList(aboutLinks, "flex gap-4 text-sm text-zinc-600 dark:text-zinc-400")}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Core Features</h3>
            {renderStaticList(coreFeatures)}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            {renderLinkList(footerResources)}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Questions? Our support team is here to assist.
            </p>
            <LinkButton href="/contact">Get in Touch</LinkButton>
          </div>
        </div>

        <div className="border-t border-zinc-200 px-5 py-8 sm:px-10 dark:border-zinc-800">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-center md:text-start">
              ©
              {" "}
              {currentYear}
              {" "}
              WildQuest Excursions. All rights reserved. | Crafted with ❤️ for nature
            </div>
            <div className="space-x-4 text-sm hidden md:inline-flex">
              {footerMenu.map(({ link, title }) => (
                <Link
                  key={title}
                  href={link}
                  className="hover:text-emerald-400 dark:hover:text-emerald-200 transition-colors"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
