import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import Header from './components/header';
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "./components/footer";
import { ChatProvider, ChatInterface } from "@/components/chat";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Elevate AI Solutions - Intelligent AI Solutions for Business Growth",
  creator: 'Team WAVELOOP',
  description:
    "Transform your business with intelligent AI solutions. Automate repetitive tasks, supercharge marketing, and deliver outstanding customer service.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-serif">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ChatProvider>
            <Header />
            {children}
            <Footer />
            <ChatInterface />
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
