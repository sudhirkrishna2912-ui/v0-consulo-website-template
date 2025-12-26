"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const articles = [
    {
      slug: "market-entry-strategy",
      title: "5 Essential Steps for Successful Global Market Entry",
      category: "Global Expansion",
      author: "Sarah Patel",
      date: "December 15, 2024",
      readTime: "8 min read",
      excerpt:
        "Learn the proven framework for entering new markets successfully. From research to execution, we break down the critical steps that ensure your international expansion achieves sustainable growth.",
      image: "placeholder",
    },
    {
      slug: "digital-transformation",
      title: "Digital Transformation: From Strategy to Implementation",
      category: "Technology",
      author: "James Chen",
      date: "December 10, 2024",
      readTime: "10 min read",
      excerpt:
        "Discover how to successfully transform your business through technology. We explore common challenges, proven strategies, and real-world examples of digital transformation success.",
      image: "placeholder",
    },
    {
      slug: "brand-positioning",
      title: "Building an Unshakeable Brand Position in Your Market",
      category: "Branding",
      author: "Elena Rodriguez",
      date: "December 5, 2024",
      readTime: "7 min read",
      excerpt:
        "Strong brand positioning sets you apart from competitors. Learn how to define, communicate, and reinforce your unique value proposition in the minds of your target audience.",
      image: "placeholder",
    },
    {
      slug: "data-driven-decisions",
      title: "Making Data-Driven Decisions That Drive Growth",
      category: "Analytics",
      author: "Rajesh Desai",
      date: "November 28, 2024",
      readTime: "9 min read",
      excerpt:
        "Data is your competitive advantage. Learn how to collect, analyze, and act on data insights to optimize operations, identify opportunities, and accelerate growth.",
      image: "placeholder",
    },
    {
      slug: "engineering-excellence",
      title: "Scaling Engineering Operations Without Losing Quality",
      category: "Engineering",
      author: "Michael Brooks",
      date: "November 20, 2024",
      readTime: "8 min read",
      excerpt:
        "Growth brings challenges for engineering firms. Discover strategies to scale operations, maintain project quality, manage teams, and improve profitability as you expand.",
      image: "placeholder",
    },
    {
      slug: "marketing-roi",
      title: "Maximizing ROI from Your Digital Marketing Investments",
      category: "Marketing",
      author: "Sophia Lambert",
      date: "November 15, 2024",
      readTime: "7 min read",
      excerpt:
        "Every marketing dollar should deliver measurable results. Learn how to strategize, execute, measure, and optimize digital marketing campaigns for maximum return on investment.",
      image: "placeholder",
    },
  ]

  const categories = ["All", "Global Expansion", "Technology", "Branding", "Analytics", "Engineering", "Marketing"]

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <p className="text-accent font-semibold text-sm tracking-widest mb-4">INSIGHTS & RESOURCES</p>
        <h1 className="text-5xl font-bold mb-6">Blog & Industry Insights</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Stay informed with expert insights, industry trends, and actionable strategies to drive your business growth.
        </p>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-6 py-12 mb-8 bg-muted/50 rounded-lg border border-border">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest insights and resources delivered to your inbox every week.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
          </form>
        </div>
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
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border flex items-center justify-center order-2 md:order-1">
            <span className="text-muted-foreground">Featured Article Image</span>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3">FEATURED</p>
            <h2 className="text-3xl font-bold mb-4">{articles[0].title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{articles[0].excerpt}</p>

            <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
              <span>By {articles[0].author}</span>
              <span>{articles[0].date}</span>
              <span>{articles[0].readTime}</span>
            </div>

            <Link href={`/blog/${articles[0].slug}`}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Read Article →</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <div className="h-full flex flex-col group cursor-pointer">
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border flex items-center justify-center mb-6 group-hover:border-accent transition">
                  <span className="text-muted-foreground text-sm">Article Image</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <p className="text-accent text-sm font-semibold mb-2">{article.category}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div>
                      <p>{article.author}</p>
                      <p>{article.date}</p>
                    </div>
                    <p>{article.readTime}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-border">
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline">Previous</Button>
          <Button className="bg-primary text-primary-foreground">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-muted/30 py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Free Resources & Templates</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Market Entry Checklist",
                description: "Complete checklist for planning your international expansion",
                icon: "📋",
                type: "Checklist",
              },
              {
                title: "Digital Transformation Roadmap",
                description: "Step-by-step guide for implementing digital transformation",
                icon: "🗺️",
                type: "Guide",
              },
              {
                title: "Brand Strategy Template",
                description: "Workshop template for developing your brand strategy",
                icon: "🎨",
                type: "Template",
              },
              {
                title: "Data Analytics Framework",
                description: "Framework for implementing data-driven decision making",
                icon: "📊",
                type: "Framework",
              },
              {
                title: "Service Pricing Guide",
                description: "Guide to understanding and optimizing service pricing",
                icon: "💰",
                type: "Guide",
              },
              {
                title: "Growth Strategy Workbook",
                description: "Interactive workbook for planning sustainable growth",
                icon: "📈",
                type: "Workbook",
              },
            ].map((resource, idx) => (
              <div
                key={idx}
                className="p-8 bg-background rounded-lg border border-border hover:border-accent transition group cursor-pointer"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <div className="inline-block px-3 py-1 bg-muted text-xs font-semibold rounded-full mb-4">
                  {resource.type}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition">{resource.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{resource.description}</p>
                <a
                  href="#"
                  className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition"
                >
                  Download →
                </a>
              </div>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Our experts can develop tailored resources and frameworks specific to your industry and challenges.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-bold rounded hover:opacity-90 transition"
            >
              Request Custom Resources
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-border text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Learn more from our insights, then let's discuss how we can help you achieve your growth goals.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Schedule Your Consultation
          </Button>
        </Link>
      </div>
    </main>
  )
}
