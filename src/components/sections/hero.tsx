import { ArrowUpRight, CirclePlay } from "lucide-react"
import { Section } from "~/components/layouts/section"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"

export function Hero() {
  return (
    <Section className="grid lg:grid-cols-2 gap-12" id="home">
      <div>
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          Just released v1.0.0
        </Badge>
        <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
          Customized Shadcn UI Blocks & Components
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-12 flex items-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Get Started
            {" "}
            <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="!h-5 !w-5" />
            {" "}
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="w-full aspect-video bg-accent rounded-xl" />
    </Section>
  )
}
