import { Camera, Phone, Waves } from "lucide-react"
import { Section } from "~/components/layouts/section"
import { Badge } from "~/components/ui/badge"
import { Button, LinkButton } from "~/components/ui/button"

export function Contact() {
  return (
    <Section id="contact" className="flex h-[600px] items-center justify-center relative">
      <div className="text-center space-y-8 fade-in-up">
        <Badge className="border-white/30">
          <Waves className="h-3 w-3 mr-1" />
          Start Your Adventure
        </Badge>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-playfair">
          Ready for Your Next Adventure?
        </h2>

        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          Contact us today to start planning your
          {" "}

          perfect excursion. Whether it's education, adventure, or
          exploration - we'll create an unforgettable experience just for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button>
            <Phone className="h-4 w-4 mr-2" />
            Get Free Quote
          </Button>
          <LinkButton variant="outline" href="/gallery">
            <Camera className="h-4 w-4 mr-2" />
            View Gallery
          </LinkButton>
        </div>
      </div>
    </Section>
  )
}
