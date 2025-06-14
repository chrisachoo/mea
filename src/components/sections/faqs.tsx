import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { PlusIcon } from "lucide-react"
import { Section } from "~/components/layouts/section"
import { Accordion, AccordionContent, AccordionItem } from "~/components/ui/accordion"
import { faq } from "~/constants"
import { cn } from "~/lib/utils"

export function FAQ() {
  return (
    <Section id="faq" className="flex items-center justify-center pt-24">
      <div className="w-full max-w-2xl text-center space-y-6 mb-20 fade-in-up">
        <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-1.5 text-lg text-muted-foreground">
          Quick answers to common questions about our products and services.
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4"
          defaultValue="question-0"
        >
          {faq.map(({ answer, question }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg",
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 cursor-pointer" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-start">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
