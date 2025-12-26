"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <p className="text-accent font-semibold text-sm tracking-widest">WELCOME TO RMG</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">Global Growth Made Strategic</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform your business with expert consultancy. From market entry to operational excellence, we're your
              strategic partner for sustainable growth across industries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50">
            <div>
              <p className="text-3xl font-bold text-accent">350+</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center border border-border">
            <span className="text-muted-foreground">Hero Image</span>
          </div>
        </div>
      </div>
    </section>
  )
}
