import LightRays from "@/components/rays-origin";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <div className="h-screen">
      <section
        id="home"
        className="absolute z-10 flex w-full pt-24 pb-16 px-4 h-screen sm:px-6 lg:px-8 "
      >
        <div className="max-w-7xl m-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Intelligent{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient_3s_ease-in-out_infinite]">
                AI
              </span>{" "}
              Solutions for
              <br />
              <span className="text-primary">Business Growth</span>
            </h1>
            <p className="text-md md:text-lg lg:text-xl text-muted-foreground mb-12 leading-relaxed">
              Our AI solutions help businesses grow and save time by automating
              tasks, improving marketing, and enhancing customer service.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#solutions">
                  See Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" className="text-lg px-8 py-6 bg-background border border-foreground text-foreground hover:bg-gray-800" asChild>
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
