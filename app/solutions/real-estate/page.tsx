import ContactSection from "@/app/components/contact"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, ShoppingCart, ArrowLeft, CheckCircle, Zap, TrendingUp, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function RetailEcommercePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <h1 className="font-sans text-center lg:text-left text-4xl md:text-5xl font-bold text-foreground">
                  Retail & E-commerce AI Solutions
                </h1>
              </div>
              <p className="text-xl  text-center lg:text-left text-muted-foreground mb-8 leading-relaxed">
                Transform your retail business with intelligent AI solutions that automate product management, enhance
                customer service, and boost sales through data-driven insights.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 w-fit m-auto flex lg:m-0" asChild>
                <Link href="/#contact">Get Started Today</Link>
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Retail AI Solutions"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Why Choose Our Retail AI Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans text-lg font-bold text-foreground mb-2">Instant Automation</h3>
                <p className="text-muted-foreground text-sm">
                  Automate repetitive tasks and free up your team for strategic work.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans text-lg font-bold text-foreground mb-2">Boost Sales</h3>
                <p className="text-muted-foreground text-sm">
                  Increase conversions with personalized recommendations and smart marketing.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans text-lg font-bold text-foreground mb-2">Better Customer Service</h3>
                <p className="text-muted-foreground text-sm">
                  Provide 24/7 support with intelligent chatbots and automated responses.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans text-lg font-bold text-foreground mb-2">Save Time</h3>
                <p className="text-muted-foreground text-sm">
                  Reduce manual work by up to 80% with intelligent automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Complete Retail AI Solutions
          </h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Product Description Writing</h3>
                <p className="text-muted-foreground mb-6">
                  Generate compelling, SEO-optimized product descriptions that convert browsers into buyers. Our AI
                  analyzes your product features, target audience, and market trends to create descriptions that rank
                  well and sell effectively.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm">SEO-optimized content for better search rankings</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm">Consistent brand voice across all products</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm">Bulk generation for large catalogs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm">A/B testing for optimal performance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">24/7 FAQ & Support Chatbots</h3>
                <p className="text-muted-foreground mb-6">
                  Provide instant customer support around the clock with intelligent chatbots that understand context,
                  handle complex queries, and escalate to human agents when needed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm">Instant responses to common questions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm">Order tracking and status updates</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm">Product recommendations based on preferences</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm">Seamless handoff to human agents</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Automated Inventory Management</h3>
                <p className="text-muted-foreground mb-6">
                  Never run out of stock again with intelligent inventory monitoring that predicts demand, tracks stock
                  levels, and automatically generates reorder alerts based on sales patterns and seasonal trends.
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

            <Card>
              <CardContent className="p-8">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-4">Complete Marketing Automation</h3>
                <p className="text-muted-foreground mb-6">
                  Generate comprehensive marketing campaigns including social media posts, Google ads, email campaigns,
                  and promotional materials that maintain consistent branding and messaging across all channels.
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
                    <p className="text-sm">Performance tracking and optimization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
