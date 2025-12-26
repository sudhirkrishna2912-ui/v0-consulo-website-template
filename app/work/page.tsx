"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects")

  const caseStudies = [
    {
      slug: "chettinad-handlooms",
      title: "Chettinad Handlooms",
      category: "Global Expansion",
      image: "placeholder",
      tagline: "Tradition meets transformation in Southeast Asia",
      description: "Enabled seamless Singapore market entry for traditional handloom business",
      result: "Successfully launched Singapore retail operations",
      metrics: [
        { label: "Market Entry", value: "Singapore" },
        { label: "Timeline", value: "6 months" },
        { label: "Growth", value: "Retail expansion" },
      ],
    },
    {
      slug: "incredibowl",
      category: "Digital Marketing",
      title: "Incredibowl",
      image: "placeholder",
      tagline: "From hidden gem to market leader",
      description: "Transformed digital presence to become Clarke Quay's #1 healthy food destination",
      result: "Market leadership through strategic digital domination",
      metrics: [
        { label: "Traffic Growth", value: "3x" },
        { label: "Brand Ranking", value: "#1 Location" },
        { label: "Engagement", value: "High" },
      ],
    },
    {
      slug: "tasty-corner",
      category: "IT Consulting",
      title: "Tasty Corner",
      image: "placeholder",
      tagline: "Direct-to-customer revolution",
      description: "Built custom web portal enabling direct orders and eliminating third-party delivery dependency",
      result: "30% cost savings with 3x revenue growth",
      metrics: [
        { label: "Commission Saved", value: "30%" },
        { label: "Revenue Growth", value: "3x" },
        { label: "Direct Orders", value: "+250%" },
      ],
    },
    {
      slug: "engineering-contractor",
      category: "Engineering Services",
      title: "Regional Engineering Contractor",
      image: "placeholder",
      tagline: "Building a stronger pipeline",
      description: "Expanded business development and secured larger EPC projects through strategic positioning",
      result: "40% pipeline expansion with premium project mix",
      metrics: [
        { label: "Pipeline Growth", value: "40%" },
        { label: "Project Size", value: "+Avg 50%" },
        { label: "Win Rate", value: "Improved" },
      ],
    },
    {
      slug: "retail-analytics",
      category: "Data Analytics",
      title: "Retail Chain Analytics Initiative",
      image: "placeholder",
      tagline: "Data-driven retail optimization",
      description: "Analyzed customer behavior patterns to optimize product placement and merchandising strategy",
      result: "25% increase in average transaction value",
      metrics: [
        { label: "Transaction Value", value: "+25%" },
        { label: "Category Sales", value: "+30%" },
        { label: "Inventory Efficiency", value: "+20%" },
      ],
    },
    {
      slug: "b2b-rebranding",
      category: "Branding",
      title: "B2B Services Company Rebranding",
      image: "placeholder",
      tagline: "Repositioning for growth",
      description: "Complete brand identity and digital strategy overhaul to strengthen market position",
      result: "40% increase in qualified leads and 3x website traffic",
      metrics: [
        { label: "Qualified Leads", value: "+40%" },
        { label: "Website Traffic", value: "+3x" },
        { label: "Brand Score", value: "+Significant" },
      ],
    },
  ]

  const filterOptions = ["All Projects", "Global Expansion", "Digital", "Engineering"]

  const filteredStudies =
    activeFilter === "All Projects"
      ? caseStudies
      : caseStudies.filter((s) => s.category.toLowerCase().includes(activeFilter.toLowerCase()))

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <p className="text-accent font-semibold text-sm tracking-widest mb-4">OUR WORK</p>
        <h1 className="text-5xl font-bold mb-6">Success Stories & Case Studies</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Real results from real partnerships. Explore how we've transformed businesses across industries and regions.
        </p>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-b border-border">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeFilter === option
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12">
          {filteredStudies.map((study, index) => (
            <Link key={study.slug} href={`/work/${study.slug}`}>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center py-12 border-b border-border hover:border-accent transition group cursor-pointer ${index % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                {/* Image */}
                <div
                  className={`aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-border ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <span className="text-muted-foreground">Case Study Image</span>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-accent text-sm font-semibold tracking-widest mb-3">{study.category}</p>
                  <h2 className="text-3xl font-bold mb-3 group-hover:text-accent transition">{study.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-8 mb-8">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <p className="text-accent font-bold text-xl">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Read Case Study →</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary text-primary-foreground py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">350+</p>
              <p className="text-lg text-primary-foreground/90">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg text-primary-foreground/90">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-lg text-primary-foreground/90">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
