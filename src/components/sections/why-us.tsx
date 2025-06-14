import { Heart, Leaf, Shield, Star } from "lucide-react"
import { Section } from "~/components/layouts/section"
import { Badge } from "../ui/badge"

export function WhyUs() {
  return (
    <Section id="why-choose-us" type="raw" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/70 to-secondary/50 dark:from-gray-900 dark:via-secondary/10 dark:to-secondary/5 nature-pattern" />
      <div className="max-w-screen-xl w-full mx-auto px-6">
        <div className="text-center space-y-6 mb-20 fade-in-up">
          <Badge className="bg-secondary text-primary border-primary/20">
            <Shield className="h-3 w-3 mr-1" />
            Why Choose MEA
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-playfair text-foreground">
            Excellence in Every Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're committed to providing exceptional experiences with unmatched safety, expertise, and personalized
            service
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              bgColor: "bg-amber-100 dark:bg-amber-900/20",
              color: "bg-amber-500",
              description: "Professional, passionate guides with decades of wilderness experience",
              icon: Star,
              title: "Expert Guides",
            },
            {
              bgColor: "bg-sky-100 dark:bg-sky-900/20",
              color: "bg-sky-600",
              description: "Comprehensive safety protocols and emergency preparedness systems",
              icon: Shield,
              title: "Safety First",
            },
            {
              bgColor: "bg-rose-100 dark:bg-rose-900/20",
              color: "bg-rose-500",
              description: "Tailored adventures designed around your interests and dreams",
              icon: Heart,
              title: "Custom Experiences",
            },
            {
              bgColor: "bg-primary/10 dark:bg-primary/20",
              color: "bg-primary",
              description: "Sustainable tourism practices that protect and preserve nature",
              icon: Leaf,
              title: "Eco-Conscious",
            },
          ].map(({ bgColor, color, description, icon: Icon, title }, index) => (
            <div
              key={title}
              className="text-center space-y-4 group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`mx-auto w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-playfair">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
