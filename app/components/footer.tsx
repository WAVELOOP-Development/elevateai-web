import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { StaggeredList } from "@/components/animated-components";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <StaggeredList
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          direction="up"
        >
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/text.png"
                alt="Elevate AI Solutions"
                width={150}
                height={40}
                className="w-auto h-12"
                priority
              />
            </div>
            <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-lg">
              Empowering businesses with cutting-edge AI solutions that
              streamline operations, enhance customer experiences, and drive
              sustainable growth.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Trusted by 500+ businesses</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>ISO 27001 Certified</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/elevate-ai-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-primary-foreground group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://twitter.com/elevateai"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <svg
                  className="w-5 h-5 text-primary-foreground group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
                aria-label="Contact us on WhatsApp"
              >
                <svg
                  className="w-5 h-5 text-primary-foreground group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:w-48 lg:ml-auto">
            <h3 className="text-xl font-semibold text-primary-foreground">
              Quick Links
            </h3>
            <nav className="space-y-3">
              <a
                href="#home"
                className="block text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
              >
                Home
              </a>
              <a
                href="#solutions"
                className="block text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
              >
                AI Solutions
              </a>
              <a
                href="#about"
                className="block text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
              >
                About Us
              </a>
              <Link
                href="/contact"
                className="block text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
              >
                Contact
              </Link>
              <a
                href="#faq"
                className="block text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Industries We Serve */}
          <div className="space-y-4 lg:text-center lg:w-48 lg:ml-auto">
            <h3 className="text-xl font-semibold text-primary-foreground">
              Industries We Serve
            </h3>
            <ul className="space-y-3 text-center">
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  href="/solutions/retail-ecommerce"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Retail & E-commerce
                </Link>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  href="/solutions/healthcare-wellness"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Healthcare & Wellness
                </Link>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  href="/solutions/real-estate"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Real Estate
                </Link>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  href="/solutions/tourism-hospitality"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Tourism & Hospitality
                </Link>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  href="/solutions/professional-services"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Professional Services
                </Link>
              </li>
            </ul>
          </div>
        </StaggeredList>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <AnimatedSection
            className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0"
            direction="fade"
            delay={0.3}
          >
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-primary-foreground/90">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:hello@elevateai.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  hello@elevateai.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/90">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+1-555-ELEVATE"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +1 (555) ELEVATE
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-foreground text-primary rounded-full font-semibold hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started Today
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:justify-between  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-black text-sm text-center lg:text-left">
            © {new Date().getFullYear()} Elevate AI Solutions. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/70">
            <a
              href="/privacy"
              className="hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="hover:text-primary-foreground transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
