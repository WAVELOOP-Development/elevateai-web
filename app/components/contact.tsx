import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function ContactSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl lg:max-w-6xl mx-auto text-center">
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6 leading-tight">
          Ready to Get Started?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your business with AI solutions tailored to your needs
        </p>
        <Button 
          size="lg" 
          className="text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto transition-all duration-300 hover:scale-105" 
          asChild
        >
          <Link href="/contact">
            <span className="block sm:inline">Begin your business growth journey today</span>
            <ArrowRight className="ml-0 sm:ml-2 mt-1 sm:mt-0 h-4 w-4 sm:h-5 sm:w-5 mx-auto sm:mx-0" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default ContactSection;
