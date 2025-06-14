import { ArrowRight } from "lucide-react"
import { Section } from "~/components/layouts/section"
import { Button } from "~/components/ui/button"
import { Link } from "~/components/ui/link"
import { features } from "~/constants"

export function Feature() {
  return (
    <Section id="features">
      <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
        Discover the Wonders of Learning, Adventure & Travel
      </h2>
      <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
        {features.map(({ category, description, href, title }, index) => (
          <div
            key={category}
            className={`flex flex-col md:flex-row items-center gap-x-20 gap-y-6 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
            <div className="basis-1/2 shrink-0">
              <span className="uppercase font-semibold text-sm text-muted-foreground">
                {category}
              </span>
              <h4 className="my-3 text-3xl font-semibold tracking-tight">
                {title}
              </h4>
              <p className="text-muted-foreground text-[17px]">
                {description}
              </p>
              <Button
                asChild
                className="mt-6 rounded-full min-w-40 text-[15px]"
              >
                <Link href={href}>
                  Learn More
                  {" "}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
