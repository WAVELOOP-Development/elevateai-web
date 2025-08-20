import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import React from "react";
import { AnimatedSection } from "@/components/animated-section";
import { StaggeredList } from "@/components/animated-components";

function FQASection() {
  return (
    <section id="faq" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl lg:max-w-6xl mx-auto">
        <AnimatedSection 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          direction="up"
          duration={0.8}
        >
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2 sm:px-4">
            Get answers to common questions about our AI solutions and services
          </p>
        </AnimatedSection>

        <StaggeredList
          className="w-full space-y-2 sm:space-y-4"
          staggerDelay={0.1}
          direction="up"
        >
          <Accordion className="gap-4 flex flex-col pb-2" type="single" collapsible>
          <AccordionItem value="item-1" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
            <AccordionTrigger className="font-sans text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4">
              How long does it take to implement an AI solution?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
                Implementation timelines vary depending on the complexity of
                your project. Simple solutions like chatbots can be deployed
                within 2-4 weeks, while more complex systems may take 2-3
                months. We provide detailed timelines during our initial
                consultation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
            <AccordionTrigger className="font-sans text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4">
              Do I need technical expertise to use your AI solutions?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
                Not at all! Our AI solutions are designed to be user-friendly
                and require no technical expertise. We provide comprehensive
                training and ongoing support to ensure your team can effectively
                use and manage the systems.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
            <AccordionTrigger className="font-sans text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4">
              What kind of ROI can I expect from AI implementation?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
                Our clients typically see ROI within 3-6 months. Benefits
                include 40-60% reduction in repetitive tasks, 24/7 customer
                support availability, improved lead conversion rates, and
                significant time savings for your team. We provide detailed ROI
                projections during our consultation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
            <AccordionTrigger className="font-sans text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4">
              Is my data secure with your AI solutions?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
                Absolutely. We implement enterprise-grade security measures
                including data encryption, secure API connections, and
                compliance with industry standards like GDPR and CCPA. Your data
                privacy and security are our top priorities.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
            <AccordionTrigger className="font-sans text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4">
              Can your AI solutions integrate with my existing systems?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
                Yes! Our AI solutions are designed to integrate seamlessly with
                popular business tools including CRM systems, e-commerce
                platforms, email marketing tools, and more. We ensure smooth
                integration without disrupting your current workflows.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
            <AccordionTrigger className="font-sans text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4">
              What ongoing support do you provide?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
                We provide comprehensive ongoing support including system
                monitoring, regular updates, performance optimization, and 24/7
                technical support. Our team ensures your AI solutions continue
                to perform at their best and evolve with your business needs.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
            <AccordionTrigger className="font-sans text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4">
              How much do your AI solutions cost?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
                Our pricing is tailored to each project's specific requirements and complexity. 
                We offer flexible pricing models including one-time implementation fees, 
                monthly subscriptions, and custom enterprise packages. Contact us for a 
                personalized quote based on your needs and budget. Most small to medium 
                businesses find our solutions pay for themselves within the first quarter.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </StaggeredList>
      </div>
      
    </section>
  );
}

export default FQASection;
