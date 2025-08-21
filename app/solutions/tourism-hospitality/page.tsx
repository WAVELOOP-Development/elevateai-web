import ContactSection from "@/app/components/contact";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import { AnimatedCard } from "@/components/animated-components";
import {
  CheckCircle,
  Zap,
  TrendingUp,
  Users,
  Clock,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function TourismHospitalityPage() {
  return (
    <PageTransition>
      <div className="min-h-screen/2 bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Video */}
        <video
          src="/tourism-hospitality-1.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

        {/* Content */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="max-w-7x m-auto p-8 mx-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-gray-600 rounded-2xl">
            <ShineBorder shineColor={["#44A6E9", "#ffffff", "#44A6E9"]} />
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <AnimatedItem direction="up" delay={0.4}>
                <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Tourism & Hospitality AI Solutions
                </h1>
              </AnimatedItem>
              <AnimatedItem direction="up" delay={0.6}>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Elevate your hospitality business with intelligent AI solutions that
                  enhance guest experiences, streamline operations, and drive bookings
                  through personalized service automation.
                </p>
              </AnimatedItem>
              <AnimatedItem direction="up" delay={0.8}>
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 transition-colors"
                  asChild
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
              </AnimatedItem>
              <AnimatedItem direction="up" delay={1.0}>
                <div className="mt-8 flex flex-col items-center space-y-2 ">
                  <AnimatedShinyText className="inline-flex items-center cursor-pointer justify-center transition-all duration-300 ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 hover:scale-105 group">
                    <span className="mr-2">Scroll for more info</span>
                  </AnimatedShinyText>
                </div>
              </AnimatedItem>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Why Choose Our Tourism & Hospitality AI Solutions?
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4} staggerChildren={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedItem direction="up" className="h-full">
                <div className="relative rounded-xl h-full">
                  <ShineBorder
                    shineColor={["#44A6E9", "#ffffff", "#44A6E9"]}
                    className="z-10"
                  />
                  <Card className="text-center h-full">
                    <CardContent className="p-6 h-full">
                      <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                        Instant Guest Service
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Automate guest requests and enhance experiences with 24/7
                        intelligent assistance.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedItem>
              <AnimatedItem direction="up">
                <div className="relative rounded-xl h-full">
                  <ShineBorder
                    shineColor={["#44A6E9", "#ffffff", "#44A6E9"]}
                    className="z-10"
                  />
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                        Increase Bookings
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Drive more reservations with personalized recommendations and
                        targeted marketing campaigns.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedItem>
              <AnimatedItem direction="up">
                <div className="relative rounded-xl h-full">
                  <ShineBorder
                    shineColor={["#44A6E9", "#ffffff", "#44A6E9"]}
                    className="z-10"
                  />
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                        Enhanced Guest Experience
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Deliver exceptional service with AI-powered concierge and
                        personalized guest interactions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedItem>
              <AnimatedItem direction="up">
                <div className="relative rounded-xl h-full">
                  <ShineBorder
                    shineColor={["#44A6E9", "#ffffff", "#44A6E9"]}
                    className="z-10"
                  />
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                        Streamline Operations
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Reduce operational overhead by up to 80% with intelligent
                        automation and staff management.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedItem>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Complete Tourism & Hospitality AI Solutions
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4} staggerChildren={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedCard delay={0}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                      Dynamic Content & Marketing
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Generate compelling destination descriptions, hotel amenities,
                      and travel itineraries that inspire bookings. Our AI creates
                      engaging content that showcases your unique offerings and
                      drives conversions across all marketing channels.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          SEO-optimized destination descriptions
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Consistent brand voice across all platforms
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Bulk content generation for multiple properties
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Seasonal campaign optimization
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                      24/7 Guest Concierge & Support
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Provide exceptional guest service around the clock with
                      intelligent virtual concierges that handle bookings, provide
                      local recommendations, and resolve guest inquiries instantly
                      in multiple languages.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Instant booking confirmations and modifications
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Local attraction and dining recommendations</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Multi-language guest communication
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Smart escalation to human staff</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.6}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                      Smart Booking & Revenue Management
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Optimize your revenue with intelligent booking systems that
                      predict demand, adjust pricing dynamically, and manage
                      availability across multiple channels to maximize occupancy
                      and profitability.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Real-time availability management</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Dynamic pricing optimization</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Multi-channel booking synchronization</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Demand forecasting and analytics</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.9}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                      Complete Tourism Marketing Automation
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Launch comprehensive marketing campaigns that showcase your
                      destinations and services across social media, search engines,
                      and email channels with consistent branding and messaging
                      tailored to travel preferences.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Travel-focused social media content</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Search engine marketing campaigns</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Personalized email travel offers</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Guest satisfaction tracking and optimization
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
      </div>
    </PageTransition>
  );
}
