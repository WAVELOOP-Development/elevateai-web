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
          src="/retail-e-commerce-1.mp4"
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
                  Retail & E-commerce AI Solutions
                </h1>
              </AnimatedItem>
              <AnimatedItem direction="up" delay={0.6}>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Transform your retail business with intelligent AI solutions that
                  automate product management, enhance customer service, and boost
                  sales through data-driven insights.
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
              Why Choose Our Retail AI Solutions?
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
                        Automate repetitive tasks and free up your team for
                        strategic work.
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
                        Boost Sales
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Increase conversions with personalized recommendations and
                        smart marketing.
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
                        Better Customer Service
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Provide 24/7 support with intelligent chatbots and automated
                        responses.
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
                        Reduce manual work by up to 80% with intelligent automation.
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
                      Product Description Writing
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Generate compelling, SEO-optimized product descriptions that
                      convert browsers into buyers. Our AI analyzes your product
                      features, target audience, and market trends to create
                      descriptions that rank well and sell effectively.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          SEO-optimized content for better search rankings
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Consistent brand voice across all products
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Bulk generation for large catalogs
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          A/B testing for optimal performance
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
                      24/7 FAQ & Support Chatbots
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Provide instant customer support around the clock with
                      intelligent chatbots that understand context, handle complex
                      queries, and escalate to human agents when needed.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Instant responses to common questions
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Order tracking and status updates</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Product recommendations based on preferences
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Seamless handoff to human agents</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.6}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                      Automated Inventory Management
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Never run out of stock again with intelligent inventory
                      monitoring that predicts demand, tracks stock levels, and
                      automatically generates reorder alerts based on sales patterns
                      and seasonal trends.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Real-time stock level monitoring</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Predictive demand forecasting</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Automated supplier notifications</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Seasonal trend analysis</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.9}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
                      Complete Marketing Automation
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Generate comprehensive marketing campaigns including social
                      media posts, Google ads, email campaigns, and promotional
                      materials that maintain consistent branding and messaging
                      across all channels.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Social media content calendar</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Google Ads campaign creation</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">Email marketing sequences</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          Performance tracking and optimization
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
