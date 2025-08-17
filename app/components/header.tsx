"use client";

import { Bot, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Handle scrolling after navigation to home page
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [pathname]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    
    // Check if we're on the home page
    if (pathname === '/') {
      // We're on the home page, just scroll to the section
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // We're on a different page, navigate to home with hash
      router.push(`/#${targetId}`);
    }
    
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-4 lg:top-8 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1000px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-gray-600 rounded-2xl z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home"
                onClick={(e) => handleSmoothScroll(e, "home")}>
              <Image
                src="/text-white.png"
                alt="Elevate AI Solutions"
                width={150}
                height={100}
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#solutions"
                onClick={(e) => handleSmoothScroll(e, "solutions")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Solutions
              </a>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              {/* <ThemeToggle /> */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-24 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1000px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-gray-600 rounded-2xl z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen && isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
            className="block text-foreground hover:text-primary transition-colors transform hover:translate-x-2 duration-200"
          >
            Home
          </a>
          <a
            href="#solutions"
            onClick={(e) => handleSmoothScroll(e, "solutions")}
            className="block text-foreground hover:text-primary transition-colors transform hover:translate-x-2 duration-200"
          >
            Solutions
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "about")}
            className="block text-foreground hover:text-primary transition-colors transform hover:translate-x-2 duration-200"
          >
            About
          </a>
          <Link
            href="/contact"
            className="block text-foreground hover:text-primary transition-colors transform hover:translate-x-2 duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
