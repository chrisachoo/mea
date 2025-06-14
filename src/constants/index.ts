import {
  Binoculars,
  Bookmark,
  Building,
  Image,
  Info,
  PackagePlus,
  School,
  TentTree,
  UserRoundPen,
} from "lucide-react"

export const routeList = [
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

export const features = [
  {
    category: "School Excursions",
    description:
      "Curriculum-aligned field trips designed to make learning unforgettable — from ancient caves to modern ecosystems. Packages like the Mpumalanga Explorer, Heritage & History, and Bush Science Camp cover essential academic themes while sparking curiosity.",
    href: "#school-excursions",
    title: "Where the Classroom Meets the Wild",
  },
  {
    category: "Adventure",
    description:
      "From bush camps to Viking-style team challenges, our adventures are crafted for explorers young and old. Whether you're hiking or tracking wildlife, every step is packed with excitement and growth.",
    href: "#adventure",
    title: "Fuel the Spirit of Discovery",
  },
  {
    category: "Travel & Tours",
    description:
      "Whether it's a family safari or a cultural weekend escape, we offer flexible, guided tours to South Africa’s most iconic destinations. Enjoy Kruger safaris, Garden Route adventures, and more — tailored for families, groups, and solo travelers.",
    href: "#tours",
    title: "Explore South Africa — Your Way",
  },
]

export const destinations = {
  items: [
    "Kruger National Park",
    "Safari Game Reserves",
    "Mountain Hiking Trails",
    "Cultural Heritage Sites",
  ],
  title: "Top Destinations",
  type: "location",
}

export const footerMenu = [
  { link: "/mea/terms", title: "Terms of Service" },
  { link: "/mea/privacy", title: "Privacy Policy" },
]

export const footerResources = [
  { icon: Image, link: "/mea/gallery", title: "Image gallery" },
  { icon: Bookmark, link: "/mea/booking", title: "Booking & Price estimates" },
  { icon: Info, link: "/mea/support", title: "Help & Support" },
]

export const aboutLinks = [
  { icon: Building, link: "/mea/about", title: "About Us" },
  { icon: UserRoundPen, link: "/mea/company", title: "Company" },
]

export const coreFeatures = [
  { icon: School, title: "School Excursions" },
  { icon: Binoculars, title: "Adventure Tours" },
  { icon: TentTree, title: "Travel & Tours" },
  { icon: PackagePlus, title: "Custom Packages" },
]
