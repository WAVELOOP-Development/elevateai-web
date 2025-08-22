"use client";

import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Bot,
  ArrowRight,
  Mail,
  Phone,
  MapPinIcon,
  ArrowLeft,
  Send,
  Clock,
  Calendar,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  SimpleAnimatedSection,
  SimpleStaggeredList,
  SimpleCardAnimation,
} from "@/components/simple-animations";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingName, setBookingName] = useState("");

  const [bookingEmail, setBookingEmail] = useState("");

  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  // Prevent any automatic scrolling behavior
  useEffect(() => {
    // Prevent scroll restoration
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }

    // Ensure the page stays at the top on initial load
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    // Set initial scroll position
    window.scrollTo(0, 0);

    // Add event listener for load
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      // Restore default scroll restoration when component unmounts
      if (typeof window !== "undefined") {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear any existing error when user starts typing
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare the request body according to the API specification
      const requestBody = {
        f_name: formData.firstName,
        l_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      };

      // Send the HTTP request to the endpoint
      const response = await axios.post(
        "https://us-central1-elevateai-solutions.cloudfunctions.net/contact",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 second timeout
        }
      );

      // Check if the response indicates success
      if (response.data && response.data.success) {
        setIsSubmitted(true);
        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(response.data?.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          setSubmitError("Request timed out. Please try again.");
        } else if (error.response?.status === 429) {
          setSubmitError(
            "Too many requests. Please wait a moment and try again."
          );
        } else if (error.response && error.response.status >= 500) {
          setSubmitError("Server error. Please try again later.");
        } else if (error.response?.data?.message) {
          setSubmitError(error.response.data.message);
        } else {
          setSubmitError(
            "Failed to send message. Please check your connection and try again."
          );
        }
      } else {
        setSubmitError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingSubmitting(true);
    setBookingError(null);

    try {
      // Prepare the request body according to the API specification
      const requestBody = {
        name: bookingName,
        email: bookingEmail,
      };

      // Send the HTTP request to the consultation endpoint
      const response = await axios.post(
        "https://us-central1-elevateai-solutions.cloudfunctions.net/consultation",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 second timeout
        }
      );

      // Check if the response indicates success
      if (response.data && response.data.success) {
        setIsBookingSubmitted(true);
        // Reset form data
        setBookingName("");
        setBookingEmail("");
      } else {
        throw new Error(response.data?.message || "Failed to submit consultation request");
      }
    } catch (error) {
      console.error("Error submitting consultation request:", error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          setBookingError("Request timed out. Please try again.");
        } else if (error.response?.status === 429) {
          setBookingError(
            "Too many requests. Please wait a moment and try again."
          );
        } else if (error.response && error.response.status >= 500) {
          setBookingError("Server error. Please try again later.");
        } else if (error.response?.data?.message) {
          setBookingError(error.response.data.message);
        } else {
          setBookingError(
            "Failed to submit consultation request. Please check your connection and try again."
          );
        }
      } else {
        setBookingError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsBookingSubmitting(false);
    }
  };

  const handleBookingInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === "bookingName") {
      setBookingName(value);
    } else if (name === "bookingEmail") {
      setBookingEmail(value);
    }

    // Clear any existing error when user starts typing
    if (bookingError) {
      setBookingError(null);
    }
  };

  const handleBookNowClick = () => {
    setShowBookingForm(true);
  };
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-background to-muted/20"
      style={{
        scrollBehavior: "auto",
        overflowAnchor: "none", // Prevent scroll anchoring
      }}
    >
      {/* Hero Section */}
      <section className="pt-36 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SimpleAnimatedSection
            className="text-center mb-8 sm:mb-12"
            direction="up"
            delay={0}
          >
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Get Started Today
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's discuss your needs
              and create a custom solution for you.
            </p>
          </SimpleAnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <SimpleAnimatedSection
              className="relative rounded-xl"
              direction="left"
              delay={0.2}
            >
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <Card className="py-6 h-full sm:py-8 shadow-lg">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="font-sans text-xl sm:text-2xl flex items-center">
                    <Send className="h-5 w-5 mr-2 text-primary" />
                    Send us a message
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ArrowRight className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-600 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll be in touch soon.
                        <br />
                        Check your email for confirmation.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-6"
                    >
                      {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                          <div className="flex items-center">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                            <p className="text-sm text-red-600">
                              {submitError}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name"
                            className="w-full border hover:border-primary transition-all border-muted-foreground/30 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Last Name"
                            className="w-full border hover:border-primary transition-all border-muted-foreground/30 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          className="w-full border hover:border-primary transition-all border-muted-foreground/30 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company Name (Optional)"
                          className="w-full border hover:border-primary transition-all border-muted-foreground/30 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number (Optional)"
                          className="w-full border hover:border-primary transition-all border-muted-foreground/30 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your business and how we can help you with AI solutions..."
                          className="w-full min-h-[100px] sm:min-h-[120px] resize-none border hover:border-primary transition-all border-muted-foreground/30 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                        size={"lg"}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </SimpleAnimatedSection>

            {/* Contact Information */}
            <SimpleAnimatedSection
              className="space-y-6 sm:space-y-8"
              direction="right"
              delay={0.4}
            >
              <div>
                <h2 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                  We're here to help you transform your business with AI. Reach
                  out to us through any of the following channels, and our team
                  will respond promptly.
                </p>
              </div>

              <SimpleStaggeredList
                className="space-y-4 sm:space-y-6"
                staggerDelay={0.1}
                direction="up"
              >
                <SimpleCardAnimation delay={0}>
                  <Card>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-sans font-semibold text-base sm:text-lg">
                            Email
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base truncate">
                            elevateai@waveloop.dev
                          </p>
                          <div className="flex items-center text-xs sm:text-sm text-muted-foreground mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            We respond within 24 hours
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SimpleCardAnimation>

                <SimpleCardAnimation delay={0.1}>
                  <Card>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-sans font-semibold text-base sm:text-lg">
                            Phone
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            +94 75 990 9911
                          </p>
                          <div className="flex items-center text-xs sm:text-sm text-muted-foreground mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            9AM-10PM EST
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SimpleCardAnimation>

                <SimpleCardAnimation delay={0.2}>
                  <Card>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-sans font-semibold text-base sm:text-lg">
                            Address
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            Maharagama,
                            <br />
                            Colombo, Sri Lanka.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SimpleCardAnimation>
              </SimpleStaggeredList>
            </SimpleAnimatedSection>
          </div>
          <div className="relative rounded-xl">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <Card className="bg-gradient-to-r mt-8 w-full from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-base sm:text-lg text-foreground mb-2">
                      Free Consultation
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Schedule a free 30-minute consultation to discuss your AI
                      needs and learn how we can help transform your business.
                    </p>

                    {isBookingSubmitted ? (
                      <div className="mt-6">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                          <ArrowRight className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="text-base font-semibold text-green-600 mb-1">
                          Booking Request Sent!
                        </h4>
                        <p className="text-md text-muted-foreground">
                          We'll send you a calendar link to schedule your
                          consultation. Keep an eye on your inbox. Our team will
                          reach out to confirm your appointment.
                        </p>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleBookingSubmit}
                        className="mt-6 space-y-4"
                      >
                        {bookingError && (
                          <div className="bg-red-50 border border-red-200 rounded-md p-3">
                            <div className="flex items-center">
                              <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                              <p className="text-sm text-red-600">
                                {bookingError}
                              </p>
                            </div>
                          </div>
                        )}
                        <div className="space-y-2">
                          <Input
                            type="text"
                            name="bookingName"
                            value={bookingName}
                            onChange={handleBookingInputChange}
                            placeholder="Enter your name"
                            className="w-full border hover:border-primary transition-all border-muted-foreground/30 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                            required
                          />
                          <Input
                            type="email"
                            name="bookingEmail"
                            value={bookingEmail}
                            onChange={handleBookingInputChange}
                            placeholder="Enter your email address"
                            className="w-full border hover:border-primary transition-all border-muted-foreground/30 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-fit cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isBookingSubmitting}
                        >
                          {isBookingSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Submitting...
                            </>
                          ) : (
                            "Submit and Book Appointment"
                          )}
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
