import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, CheckCircle, Clock, Users } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function AboutSection() {
  return (
    <section id="about" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Elevate AI Solutions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            We're passionate about helping businesses harness the power of
            artificial intelligence to drive growth, efficiency, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="flex flex-col justify-between order-2 lg:order-1">
            <div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                At Elevate AI Solutions, we believe that every business deserves
                access to cutting-edge AI technology. Our mission is to
                democratize artificial intelligence by creating tailored
                solutions that are both powerful and easy to implement.
              </p>
            </div>
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto" asChild>
              <a href="/contact">
                Start your journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/banner.png"
              alt="Our team at work"
              className="w-full h-64 sm:h-80 object-cover border border-gray-500 rounded-lg shadow-lg"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <Card className="text-center h-fit">
            <CardContent className="p-6 md:p-8">
              <Users className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4" />
              <h3 className="font-sans text-lg md:text-xl font-bold text-foreground mb-2">
                500+ Clients
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Trusted by businesses across various industries to deliver
                exceptional AI solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center h-fit">
            <CardContent className="p-6 md:p-8">
              <Award className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4" />
              <h3 className="font-sans text-lg md:text-xl font-bold text-foreground mb-2">
                98% Success Rate
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Our proven track record of successful AI implementations and
                satisfied customers.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center h-fit sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 sm:max-w-sm lg:max-w-none">
            <CardContent className="p-6 md:p-8">
              <Clock className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4" />
              <h3 className="font-sans text-lg md:text-xl font-bold text-foreground mb-2">
                5+ Years Experience
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Deep expertise in AI development and implementation across
                multiple industries.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 rounded-lg p-6 md:p-8">
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
            Why Choose Elevate AI Solutions?
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                  Custom Solutions
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Tailored AI solutions designed specifically for your business
                  needs and industry requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                  Expert Team
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Experienced AI engineers and data scientists with proven
                  expertise across industries.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                  Ongoing Support
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Comprehensive support and maintenance to ensure your AI
                  solutions continue to perform optimally.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                  Proven ROI
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Measurable results with clear return on investment and
                  business impact metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
