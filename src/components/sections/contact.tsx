import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { Section } from "~/components/layouts/section"
import { Link } from "~/components/ui/link"

export function Contact() {
  return (
    <Section className="flex min-h-1/5 items-center justify-center" id="contact">
      <div className="text-center">
        <b className="text-muted-foreground">Contact Us</b>
        <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
          Get In Touch
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          Our friendly team is always here to chat.
        </p>
        <div className="max-w-screen-xl mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
          <div className="text-center flex flex-col items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Email</h3>
            <p className="mt-2 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <Link
              className="mt-4 font-medium text-primary"
              href="mailto:info@mbangoecoadventure.co.za"
            >
              info@mbangoecoadventure.co.za
            </Link>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Office</h3>
            <p className="mt-2 text-muted-foreground">
              Come say hello at our office HQ.
            </p>
            <Link
              className="mt-4 font-medium text-primary"
              href="https://map.google.com"
              target="_blank"
            >
              100 Smith Street Collingwood
              {" "}
              <br />
              {" "}
              Hazyview
            </Link>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Phone</h3>
            <p className="mt-2 text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
            <Link
              className="mt-4 font-medium text-primary"
              href="tel:akashmoradiya3444@gmail.com"
            >
              +27 (555) 000-0000
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
