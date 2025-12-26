"use client"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "RMG's strategic guidance was instrumental in our market entry. Their deep understanding of regulations and local nuances saved us months of research.",
      author: "Sarah Chen",
      role: "CEO, Global Ventures Ltd",
      rating: 5,
    },
    {
      quote:
        "From digital transformation to operational efficiency, RMG delivered measurable results. Highly recommend their consulting services.",
      author: "James Mitchell",
      role: "Founder, Tech Innovations",
      rating: 5,
    },
    {
      quote:
        "The team at RMG truly acts as partners, not just consultants. They were invested in our success and it showed in the outcomes.",
      author: "Priya Kapoor",
      role: "Managing Director, Indian Exports Co.",
      rating: 5,
    },
    {
      quote:
        "Exceptional work on our branding strategy. They transformed how we position ourselves in the market. Growth has been remarkable.",
      author: "Marcus Thompson",
      role: "VP Marketing, RetailPro",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-background rounded-lg border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
