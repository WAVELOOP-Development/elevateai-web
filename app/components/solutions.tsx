import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Home,
  MapPin,
  ShoppingCart,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCard, StaggeredList } from "@/components/animated-components";
import { ShineBorder } from "@/components/magicui/shine-border";

function SolutionSection() {
  return (
    <section
      id="solutions"
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          direction="up"
          duration={0.8}
        >
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Solutions by Industry
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Tailored AI solutions designed to meet the unique needs of your
            industry
          </p>
        </AnimatedSection>

        <AnimatedSection
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          direction="up"
          staggerChildren={0.2}
        >
          {/* Retail & E-commerce */}

          <Link href="/solutions/retail-ecommerce">
            <div className="relative cursor-pointer h-fit hover:shadow-lg transition-shadow duration-300 group overflow-hidden rounded-lg">
              <ShineBorder shineColor={["#44A6E9", "#ffffff", "#44A6E9"]} className="z-10" />
              <Card className="h-full border-0 relative z-0">
                <CardContent className="p-0">
                  <div className="flex flex-col md:min-h-[300px]">
                    <div className="w-full  h-48  relative overflow-hidden">
                      <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
                        <video
                          src="/retail-e-commerce-1.mp4"
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className="w-full  p-6 lg:p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                        <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                        <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          Retail & E-commerce
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                        Transform your retail business with AI-powered product
                        descriptions, 24/7 customer support, inventory management,
                        and automated marketing campaigns.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <p className="text-xs sm:text-sm text-card-foreground">
                            Product Description Writing
                          </p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <p className="text-xs sm:text-sm text-card-foreground">
                            24/7 FAQ & Support Chatbots
                          </p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <p className="text-xs sm:text-sm text-card-foreground">
                            Automated Inventory Alerts
                          </p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <p className="text-xs sm:text-sm text-card-foreground">
                            Complete Ad Packages
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Link>

          {/* Tourism & Hospitality */}
          <Link href="/solutions/tourism-hospitality">
            <div className="relative cursor-pointer h-fit hover:shadow-lg transition-shadow duration-300 group overflow-hidden rounded-lg">
              <ShineBorder shineColor={["#44A6E9", "#ffffff", "#44A6E9"]} className="z-10" />
              <Card className="h-full border-0 relative z-0">
                <CardContent className="p-0">
                  <div className="flex flex-col md:min-h-[300px]">
                    <div className="w-full  h-48  relative overflow-hidden">
                      <div className="relative w-full h-full">
                        <video
                          src="/tourism-hospitality-1.mp4"
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  <div className="w-full p-6 lg:p-8 flex flex-col justify-center md:order-1">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        Tourism & Hospitality
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                      Enhance guest experiences with automated booking systems,
                      personalized communications, and 24/7 customer support
                      that never sleeps.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Automated Booking System
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Guest Communication
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          24/7 Customer Support
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Social Media Management
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </Link>

          {/* Real Estate */}
          <Link href="/solutions/real-estate">
            <div className="relative cursor-pointer h-fit hover:shadow-lg transition-shadow duration-300 group overflow-hidden rounded-lg">
             <ShineBorder shineColor={["#44A6E9", "#ffffff", "#44A6E9"]} className="z-10" />
              <Card className="h-full border-0 relative z-0">
                <CardContent className="p-0">
                  <div className="flex flex-col md:min-h-[300px]">
                    <div className="w-full h-48 relative overflow-hidden">
                      <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
                        <video
                          src="/real-estate-2.mp4"
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  <div className="w-full p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <Home className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        Real Estate
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                      Streamline your real estate business with AI-powered lead
                      generation, automated follow-ups, and professional
                      marketing materials.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Sales Copilot
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Lead Qualification
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Automated Booking
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Video Generation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </Link>

          {/* Professional Services */}
          <Link href="/solutions/professional-services">
            <div className="relative cursor-pointer h-full hover:shadow-lg transition-shadow duration-300 group overflow-hidden rounded-lg">
              <ShineBorder shineColor={["#44A6E9", "#ffffff", "#44A6E9"]} className="z-10" />
              <Card className="h-full border-0 relative z-0">
                <CardContent className="p-0">
                  <div className="flex flex-col md:min-h-[300px]">
                    <div className="w-full h-48 relative overflow-hidden">
                      <div className="relative w-full h-full">
                        <video
                          src="/professional-services-1.mp4"
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  <div className="w-full p-6 lg:p-8 flex flex-col justify-center md:order-1">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        Professional Services
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                      Boost productivity with automated meeting transcriptions,
                      document processing, and intelligent business insights.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Meeting Transcription
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Document Processing
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Presentation Design
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Lead Generation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
            </div>
          </Link>

          {/* Healthcare & Wellness */}
          <Link href="/solutions/healthcare-wellness" className="lg:col-span-2">
            <div className="relative cursor-pointer h-fit hover:shadow-lg transition-shadow duration-300 group overflow-hidden rounded-lg">
              <ShineBorder shineColor={["#44A6E9", "#ffffff", "#44A6E9"]} className="z-10" />
              <Card className="h-full border-0 relative z-0">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:min-h-[300px]">
                    <div className="w-full md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                      <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
                        <video
                          src="/healthcare-wellness-1.mp4"
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  <div className="w-full md:w-2/3 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <Stethoscope className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        Healthcare & Wellness
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                      Improve patient care with automated scheduling,
                      appointment reminders, and professional communication
                      systems.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Automated Scheduling
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Appointment Reminders
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          Social Media Management
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-card-foreground">
                          FAQ Chatbot
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default SolutionSection;
