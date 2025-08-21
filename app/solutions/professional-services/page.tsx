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

export default function RetailEcommercePage() {
  return (
    <PageTransition>
      <div className="min-h-screen/2 bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Video */}
        <video
          src="/professional-services-1.mp4"
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
                  AI Solutions for Professional Services
                </h1>
              </AnimatedItem>
              <AnimatedItem direction="up" delay={0.6}>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Elevate your professional services with intelligent AI solutions that
                  automate client management, streamline operations, and enhance service
                  delivery through data-driven insights and automation.
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
              Why Choose Our Professional Services AI Solutions?
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
                        Automate client onboarding, document generation, and
                        administrative workflows instantly.
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
                        Increase Revenue
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Boost billable hours and client satisfaction with efficient
                        service delivery and insights.
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
                        Superior Client Experience
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Deliver exceptional client service with AI-powered support
                        and personalized communications.
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
                        Reduce administrative overhead by up to 80% with intelligent
                        workflow automation.
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
              Complete Professional Services AI Solutions
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4} staggerChildren={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedCard delay={0}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                      Professional Document Generation
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Generate professional proposals, contracts, reports, and legal
                      documents with AI-powered templates that maintain consistency,
                      compliance, and brand standards while adapting to specific
                      client needs and industry requirements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Customizable professional templates
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Compliance and regulatory adherence
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Bulk generation for multiple clients
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Version control and audit trails
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
                      24/7 Client Support & Consultation Booking
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Provide round-the-clock client support with intelligent chatbots
                      that understand professional terminology, handle inquiries, book
                      consultations, manage calendars, and escalate complex matters to
                      the appropriate professionals.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Instant responses to client inquiries
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Automated consultation scheduling</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Service recommendations and pricing
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Seamless handoff to specialists</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.6}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                      Automated Client Relationship Management
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Streamline client relationships with intelligent CRM automation
                      that handles follow-ups, tracks project milestones, manages
                      billing cycles, and maintains detailed client histories for
                      personalized service delivery.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Automated follow-up sequences</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Project milestone tracking</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Billing and payment reminders</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Client history and preferences</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.9}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                      Complete Professional Marketing
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Generate professional marketing campaigns including LinkedIn
                      content, industry articles, email newsletters, and thought
                      leadership materials that establish expertise and attract
                      high-value clients across all channels.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">LinkedIn thought leadership content</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Industry-specific articles and blogs</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Professional email newsletters</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Client acquisition and retention campaigns
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
