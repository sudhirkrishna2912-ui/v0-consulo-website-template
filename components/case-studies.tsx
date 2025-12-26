"use client"

export default function CaseStudies() {
  const studies = [
    {
      title: "Chettinad Handlooms",
      category: "Global Expansion",
      description:
        "Tradition met transformation as RMG enabled seamless Singapore debut—now a retail staple celebrated by locals",
      result: "Successful market entry",
    },
    {
      title: "Incredibowl",
      category: "Digital Marketing",
      description: "Transformed from hidden gem to Clarke Quay's #1 healthy stop with multi-pronged digital strategy",
      result: "Market leadership",
    },
    {
      title: "Tasty Corner",
      category: "IT Consulting",
      description: "Bypassed food apps, saved 30% in commissions, and tripled direct orders with custom web portal",
      result: "3x revenue growth",
    },
  ]

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest mb-4">SUCCESS STORIES</p>
          <h2 className="text-4xl font-bold mb-4">Explore Our Recent Work</h2>
          <p className="text-lg text-muted-foreground">
            Real results from real partnerships. See how we've transformed businesses across industries.
          </p>
        </div>

        <div className="space-y-12">
          {studies.map((study, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center py-12 border-b border-border last:border-b-0"
            >
              <div
                className={`aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-border ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <span className="text-muted-foreground">Case Study Image</span>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-accent text-sm font-semibold tracking-widest mb-2">{study.category}</p>
                <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold">
                    Result: <span className="text-accent">{study.result}</span>
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent hover:gap-3 transition font-semibold"
                  >
                    Read Full Case Study →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
