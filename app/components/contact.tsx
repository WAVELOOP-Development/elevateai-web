import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SimpleAnimatedSection } from "@/components/simple-animations";
import { WarpBackground } from "@/components/magicui/warp-background";
import { ShineBorder } from "@/components/magicui/shine-border";

function ContactSection() {
  return (
    <WarpBackground
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      backgroundFill="rgb(15, 23, 42)"
      className="flex flex-col items-center justify-center text-center"
      containerClassName="h-full"
    >
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <SimpleAnimatedSection
          className="max-w-4xl lg:max-w-6xl mx-auto text-center"
          direction="up"
          duration="0.8s"
        >
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your business with AI solutions tailored to your needs
          </p>
          <div className="hover:scale-105 transition-transform duration-300">
            <Button
              size="lg"
              className="text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <span className="block sm:inline">
                  Begin your business growth journey today
                </span>
                <ArrowRight className="ml-0 sm:ml-2 mt-1 sm:mt-0 h-4 w-4 sm:h-5 sm:w-5 mx-auto sm:mx-0" />
              </Link>
            </Button>
          </div>
        </SimpleAnimatedSection>
      </section>
    </WarpBackground>
  );
}

export default ContactSection;
