import HeroSection from "./components/hero";
import SolutionSection from "./components/solutions";
import AboutSection from "./components/about";
import FQASection from "./components/faq";
import ContactSection from "./components/contact";
import { PageTransition } from "@/components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="bg-background">
        <HeroSection />

        <SolutionSection />

        <AboutSection />

        <FQASection />

        <ContactSection />
      </div>
    </PageTransition>
  );
}
