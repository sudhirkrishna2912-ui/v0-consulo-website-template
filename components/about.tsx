"use client"

export default function About() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flex items-center justify-center border border-border order-2 md:order-1">
            <span className="text-muted-foreground">About Image</span>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest mb-2">WHO WE ARE</p>
              <h2 className="text-4xl font-bold mb-4">Innovate. Expand. Succeed.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At RMG Consulting Services, we're more than consultants—we're your co-strategists, co-creators, and
                co-builders in crafting your success story. We specialize in delivering smart, scalable, and sustainable
                growth strategies for modern businesses.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-background text-sm font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Customized Strategies</h3>
                  <p className="text-muted-foreground">Not templates—tailored solutions for your unique challenges</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-background text-sm font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Deep Industry Expertise</h3>
                  <p className="text-muted-foreground">Insight, innovation & know-how across multiple sectors</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-background text-sm font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Partnership Model</h3>
                  <p className="text-muted-foreground">From strategy through execution—we're with you every step</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
