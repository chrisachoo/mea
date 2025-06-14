import { Compass, Heart } from "lucide-react"
import { Section } from "~/components/layouts/section"
import { ShineBorder } from "~/components/magicui/shine-border"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { BackgroundPattern } from "../ui/background-pattern"

export function Hero() {
  return (
    <Section type="raw" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <BackgroundPattern />
      <div className="relative z-10 text-center max-w-2xl">
        <Badge variant="outline" className="relative overflow-hidden px-4 py-1.5 rounded-full border-accent bg-background">
          <ShineBorder shineColor={["#86efac", "#fcd34d", "#f9a8d4"]} />
          🌿
          Real Learning. Real Nature. Real Fun.
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Where the Road Ends, The Real Journey Begins.
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Go beyond the textbook — explore, climb, camp, and connect with the heart of South Africa. We make learning wild and travel unforgettable.
        </p>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            <Compass className="h-4 w-4 mr-2" />
            Explore Our Tours
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <Heart className="h-4 w-4 mr-2" />
            Get Custom Quote
          </Button>
        </div>
      </div>
    </Section>
  )
}
