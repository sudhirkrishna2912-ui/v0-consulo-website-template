"use client"

export default function Services() {
  const serviceCategories = [
    {
      title: "Global Expansion",
      description: "Market research, feasibility studies, and regulatory guidance for confident international growth",
      icon: "🌍",
    },
    {
      title: "Engineering Services",
      description: "Contract strategy, business development, and operational efficiency for engineering firms",
      icon: "🏗️",
    },
    {
      title: "Digital Marketing",
      description: "SEO, social media, content creation, and viral strategies to dominate your market",
      icon: "📱",
    },
    {
      title: "IT Consulting",
      description: "Custom software, SaaS platforms, AI automation, and digital transformation solutions",
      icon: "💻",
    },
    {
      title: "Data Analytics",
      description: "Company-wide data auditing, predictive analytics, and KPI dashboards for smart decisions",
      icon: "📊",
    },
    {
      title: "Branding & Digital",
      description: "Brand strategy, visual identity, and omni-channel positioning for B2B and B2C brands",
      icon: "✨",
    },
  ]

  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest mb-4">OUR SERVICES</p>
          <h2 className="text-4xl font-bold mb-4">Grow Your Business with Expert Solutions</h2>
          <p className="text-lg text-muted-foreground">
            We speak growth in any language. Explore our comprehensive service offerings designed to transform your
            business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition group cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <a
                href="#"
                className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
