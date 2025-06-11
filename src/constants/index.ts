interface RouteList {
  href: string
  label: string
}

interface FeaturesList {
  category: string
  details: string
  title: string
  tutorialLink: string
}

export const routeList: RouteList[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#blog",
    label: "Blog",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
]

export const features: FeaturesList[] = [
  {
    category: "Marketing and Sales",
    details:
      "Take control over how and when to follow up with your leads. Store and reference leads in multiple tables and, from there, automatically send them personalized emails.",
    title: "Collect and enrich leads your way",
    tutorialLink: "#",
  },
  {
    category: "Project Management",
    details:
      "Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.",
    title: "Streamline your workflows effortlessly",
    tutorialLink: "#",
  },
  {
    category: "Customer Support",
    details:
      "Track and resolve customer queries faster with an integrated ticketing system. Set priorities, automate follow-ups, and enhance satisfaction with personalized responses.",
    title: "Deliver seamless customer experiences",
    tutorialLink: "#",
  },
  {
    category: "Team Collaboration",
    details:
      "Simplify communication and align team efforts with shared boards and real-time updates. Enable transparent goal tracking and instant feedback for better results.",
    title: "Stay connected with your team",
    tutorialLink: "#",
  },
  {
    category: "Product Development",
    details:
      "Bring your product ideas to life by managing prototypes, feedback, and iterations in one place. Collaborate with your team to refine features and release with confidence.",
    title: "Accelerate innovation with ease",
    tutorialLink: "#",
  },
]
