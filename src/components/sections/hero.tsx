import { Bird, Compass, Heart, Leaf, Star, Sun, Users } from "lucide-react"
import { Section } from "~/components/layouts/section"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"

export function Hero() {
  return (
    <Section className="grid lg:grid-cols-2 gap-12" id="home">
      <div className="relative">
        <FloatingElements />
        <Badge className="rounded-full py-1 border" variant="outline">
          <Leaf className="h-3 w-3 mr-1" />
          Nature Experiences
        </Badge>
        <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
          Discover the beauty of our country
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg">
          From educational school expeditions to thrilling wilderness adventures and personalized travel
          journeys. We create unforgettable experiences that connect you with nature's most spectacular
          destinations.
        </p>
        <div className="mt-12 flex items-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            <Compass className="!h-5 !w-5" />
            {" "}
            Explore Our Tours
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <Heart className="!h-5 !w-5" />
            {" "}
            Get Custom Quote
          </Button>
        </div>
      </div>
      <div className="w-full aspect-video bg-accent rounded-xl" />
    </Section>
  )
}

// eslint-disable-next-line unused-imports/no-unused-vars
function AdventureRatings() {
  return (
    <div className="flex items-center space-x-8 text-sm">
      <div className="flex items-center space-x-2 bg-white/50 dark:bg-black/20 rounded-full px-4 py-2 glass-effect">
        <div className="flex">
          {[1, 2, 3, 4, 5].map(star => (
            <Star key={`star-${star}`} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="font-medium">4.9/5 Rating</span>
      </div>
      <div className="flex items-center space-x-2 bg-white/50 dark:bg-black/20 rounded-full px-4 py-2 glass-effect">
        <Users className="h-4 w-4 text-primary" />
        <span className="font-medium">15,000+ Adventurers</span>
      </div>
    </div>
  )
}

function FloatingElements() {
  return (
    <>
      <div className="absolute top-27 left-10 floating-animation">
        <Leaf className="h-8 w-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: "2s" }}>
        <Bird className="h-6 w-6 text-primary opacity-60" />
      </div>
      <div className="absolute bottom-10 left-46 floating-animation" style={{ animationDelay: "4s" }}>
        <Sun className="h-10 w-10 text-amber-400 opacity-60" />
      </div>
    </>
  )
}
