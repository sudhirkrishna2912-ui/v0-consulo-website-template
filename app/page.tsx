"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import CaseStudies from "@/components/case-studies"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </main>
  )
}
