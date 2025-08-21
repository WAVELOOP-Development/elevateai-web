"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { WarpBackground } from "@/components/magicui/warp-background";
import Link from "next/link";

// Typing animation data
const typingTexts = [
  "streamline workflows",
  "boost productivity", 
  "enhance customer experience",
  "automate repetitive tasks",
  "drive business growth",
  "improve decision making"
];

function HeroSection() {
  return (
    <>
      <div className="h-screen w-full">
        <WarpBackground
          colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
          backgroundFill="rgb(15, 23, 42)"
          className="flex flex-col items-center justify-center text-center"
          containerClassName="h-full"
        >
          <div className="max-w-7x m-auto mx-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-gray-600 rounded-2xl">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <div className="text-center max-w-4xl p-8 mx-auto ">
              <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground leading-tight">
                <TextAnimate animation="slideLeft" by="word" once>
                  Intelligent AI Solutions for
                </TextAnimate>
                <TextAnimate
                  animation="slideLeft"
                  by="word"
                  once
                  className="text-primary"
                >
                  Business Growth
                </TextAnimate>
              </h1>
              <TextAnimate
                animation="fadeIn"
                by="line"
                as="p"
                once
                delay={0.5}
                className="text-md md:text-lg lg:text-xl text-muted-foreground my-6"
              >
                Our AI solutions help businesses and save time by automating
                tasks, improving marketing, and enhancing customer service.
              </TextAnimate>
              
              <div className="mb-8 text-lg md:text-xl lg:text-2xl text-foreground font-medium">
                We help you{" "}
                <TypingAnimation
                  text={typingTexts}
                  className="text-primary font-semibold"
                  duration={150}
                  delay={2000}
                />
              </div>
              <div className="flex justify-center items-center flex-col gap-4">
                <div
                  className="group relative cursor-pointer w-fit flex items-center justify-center rounded-md px-8 py-4 hover:scale-105 transition-transform duration-300 ease-in-out"
                  onClick={() => {
                    document.getElementById("solutions")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <span
                    className={cn(
                      "absolute inset-0 block h-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[2px]"
                    )}
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      WebkitClipPath: "padding-box",
                    }}
                  />
                  <AnimatedGradientText className="text-lg font-medium">
                    See Our Solutions
                  </AnimatedGradientText>
                  <ChevronRight
                    className="ml-1 size-4 stroke-neutral-500 transition-transform
                     duration-300 ease-in-out group-hover:translate-x-0.5"
                  />
                </div>
                <Link href="/contact">
                  <div className="group relative cursor-pointer w-fit flex items-center justify-center rounded-md px-4 py-4">
                    <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <span>Start Growing Your Business with Us Today</span>
                    </AnimatedShinyText>
                    <ChevronRight
                      className="ml-1 size-4 stroke-neutral-500 transition-transform
                     duration-300 ease-in-out group-hover:translate-x-0.5"
                    />
                    
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </WarpBackground>
      </div>
    </>
  );
}

export default HeroSection;
