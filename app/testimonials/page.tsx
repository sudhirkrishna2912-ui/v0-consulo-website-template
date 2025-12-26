"use client"

import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "RMG's strategic guidance was instrumental in our market entry. Their deep understanding of regulations and local nuances saved us months of research and prevented costly mistakes.",
      author: "Sarah Chen",
      role: "CEO, Global Ventures Ltd",
      company: "International Expansion Client",
      industry: "Manufacturing",
      rating: 5,
    },
    {
      quote:
        "From digital transformation to operational efficiency, RMG delivered measurable results. We saw immediate impact on our bottom line and sustained improvement over time.",
      author: "James Mitchell",
      role: "Founder, Tech Innovations",
      company: "Technology Startup",
      industry: "Software Development",
      rating: 5,
    },
    {
      quote:
        "The team at RMG truly acts as partners, not just consultants. They were invested in our success and it showed in the outcomes. We achieved more than we thought possible.",
      author: "Priya Kapoor",
      role: "Managing Director, Indian Exports Co.",
      company: "Export Business",
      industry: "Trade & Logistics",
      rating: 5,
    },
    {
      quote:
        "Exceptional work on our branding strategy. They transformed how we position ourselves in the market. Growth has been remarkable—both in brand perception and actual revenue.",
      author: "Marcus Thompson",
      role: "VP Marketing, RetailPro",
      company: "Retail Network",
      industry: "Retail & E-Commerce",
      rating: 5,
    },
    {
      quote:
        "RMG helped us think bigger about our business. Their insights opened doors to opportunities we didn't know existed. The strategic planning was invaluable.",
      author: "Amit Desai",
      role: "Managing Director, Engineering Solutions",
      company: "Infrastructure Contractor",
      industry: "Engineering & Construction",
      rating: 5,
    },
    {
      quote:
        "We were struggling with data insights. RMG transformed our raw data into actionable intelligence that directly improved our operations. The ROI has been exceptional.",
      author: "Elena Rodriguez",
      role: "Operations Director, Retail Chain",
      company: "Multi-Store Retailer",
      industry: "Retail Operations",
      rating: 5,
    },
    {
      quote:
        "RMG's digital marketing strategy turned our restaurant into a neighborhood hotspot. They understood our market, our customers, and how to reach them effectively.",
      author: "David Wong",
      role: "Owner, Health Foods Co.",
      company: "F&B Business",
      industry: "Food & Beverage",
      rating: 5,
    },
    {
      quote:
        "The custom software platform RMG built for us eliminated our dependence on third-party apps and saved us thousands in commissions. Best investment we made.",
      author: "Rajesh Patel",
      role: "Founder, Quick Services",
      company: "Service Business",
      industry: "Technology Solutions",
      rating: 5,
    },
  ]

  const categories = [
    { name: "All", count: testimonials.length },
    { name: "Global Expansion", count: 2 },
    { name: "Digital", count: 3 },
    { name: "Engineering", count: 1 },
    { name: "Data & Analytics", count: 1 },
    { name: "Technology", count: 1 },
  ]

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <p className="text-accent font-semibold text-sm tracking-widest mb-4">CLIENT TESTIMONIALS</p>
        <h1 className="text-5xl font-bold mb-6">What Our Clients Say</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Real feedback from real clients. See how we've made a difference in their businesses.
        </p>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-b border-border">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                idx === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-muted/30 rounded-lg border border-border hover:border-accent transition group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-muted-foreground mb-8 italic leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-bold text-accent mb-1">{testimonial.author}</p>
                <p className="text-sm font-semibold mb-2">{testimonial.role}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.industry}</p>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary text-primary-foreground py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg text-primary-foreground/90">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">350+</p>
              <p className="text-lg text-primary-foreground/90">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-lg text-primary-foreground/90">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-lg text-primary-foreground/90">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonials CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border flex items-center justify-center">
            <span className="text-muted-foreground">Video Testimonials</span>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Hear Directly from Our Clients</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Watch video testimonials from satisfied clients across different industries. See how RMG's consulting
                services have transformed their businesses.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-accent text-2xl">▶</div>
                <div>
                  <p className="font-semibold">Global Expansion Success Story</p>
                  <p className="text-sm text-muted-foreground">Manufacturing company's international growth journey</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent text-2xl">▶</div>
                <div>
                  <p className="font-semibold">Digital Transformation Impact</p>
                  <p className="text-sm text-muted-foreground">Tech startup's rapid scaling and market leadership</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent text-2xl">▶</div>
                <div>
                  <p className="font-semibold">Brand Repositioning Results</p>
                  <p className="text-sm text-muted-foreground">B2B company's market perception transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-accent text-accent-foreground py-16 border-t border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Add Your Success Story?</h2>
          <p className="text-lg mb-8 text-accent-foreground/90">
            Join hundreds of satisfied clients who have transformed their businesses with RMG's strategic consulting.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-foreground text-accent font-bold rounded hover:opacity-90 transition"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </div>
    </main>
  )
}
