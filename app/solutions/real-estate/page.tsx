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

<AnimatedSection direction="up" delay={0.2}>
  <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
    Complete Real Estate AI Solutions
  </h2>
</AnimatedSection>;

export default function RetailEcommercePage() {
  return (
    <PageTransition>
      <div className="min-h-screen/2 bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Video */}
          <video
            src="/real-estate-2.mp4"
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
                    AI Solutions for Real Estate
                  </h1>
                </AnimatedItem>
                <AnimatedItem direction="up" delay={0.6}>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Revolutionize your real estate business with intelligent AI
                    solutions that automate property management, enhance client
                    relationships, and maximize deals through data-driven market
                    insights.
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
                Why Choose Our Real Estate AI Solutions?
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
                          Instant Automation
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Automate property listings, client follow-ups, and
                          documentation for maximum efficiency.
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
                          Close More Deals
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Increase successful transactions with AI-powered lead
                          scoring and personalized client matching.
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
                          Enhanced Client Relations
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Provide exceptional service with AI chatbots handling
                          inquiries and scheduling viewings 24/7.
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
                          Save Time
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Reduce administrative work by up to 80% with
                          intelligent property management automation.
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
                Complete Retail AI Solutions
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.4} staggerChildren={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AnimatedCard delay={0}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                        Property Listing Descriptions
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Generate compelling, SEO-optimized property descriptions
                        that attract potential buyers and renters. Our AI
                        analyzes property features, neighborhood data, and
                        market trends to create descriptions that rank well and
                        convert leads into viewings.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            SEO-optimized content for better search visibility
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Consistent brand voice across all listings
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Bulk generation for large property portfolios
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Market analysis and competitive pricing insights
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
                        24/7 Client Support & Lead Qualification
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Provide instant responses to property inquiries around
                        the clock with intelligent chatbots that understand real
                        estate terminology, qualify leads, schedule viewings,
                        and escalate serious buyers to your agents.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Instant responses to property inquiries
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Automated viewing scheduling
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Lead qualification and scoring
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Smart handoff to qualified agents
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>

                <AnimatedCard delay={0.6}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                        Automated Property Management
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Streamline property management with intelligent
                        automation that handles tenant communications,
                        maintenance requests, rent collection reminders, and
                        lease renewals, freeing up time for strategic business
                        growth.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Automated rent collection reminders
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Maintenance request tracking
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">Lease renewal notifications</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Tenant communication automation
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>

                <AnimatedCard delay={0.9}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                        Complete Real Estate Marketing
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Generate comprehensive marketing campaigns including
                        social media posts, Google ads, email campaigns, and
                        promotional materials specifically tailored for real
                        estate that maintain consistent branding and messaging
                        across all channels.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Property-focused social media content
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Real estate Google Ads campaigns
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Buyer/seller email sequences
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm">
                            Market analysis and ROI tracking
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
