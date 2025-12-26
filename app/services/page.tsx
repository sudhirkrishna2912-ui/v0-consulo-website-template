"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      slug: "global-expansion",
      title: "Global Expansion & Market Entry",
      description: "Help businesses expand with confidence into new markets",
      icon: "🌍",
      highlights: [
        "Market Research & Entry Strategy",
        "Feasibility Studies",
        "Regulatory Compliance & Licensing",
        "Government Relations & MOUs",
        "Localization Strategy",
        "Investment Readiness",
      ],
    },
    {
      slug: "engineering",
      title: "Engineering Services",
      description: "Smart solutions for engineering businesses and contractors",
      icon: "🏗️",
      highlights: [
        "Civil & Structural Engineering",
        "Mechanical & Electrical Systems",
        "Contract Strategy & Negotiation",
        "Business Development",
        "Project Feasibility Analysis",
        "Process Optimization",
      ],
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      description: "Dominate your market with strategic digital presence",
      icon: "📱",
      highlights: [
        "Search Engine Optimization",
        "Social Media & Paid Campaigns",
        "Influencer Marketing",
        "Content Creation",
        "Marketing Automation",
        "Analytics & Reporting",
      ],
    },
    {
      slug: "it-consulting",
      title: "IT Consulting & Digital Transformation",
      description: "Transform your business with cutting-edge technology",
      icon: "💻",
      highlights: [
        "Custom Software Development",
        "SaaS Platforms",
        "AI-Driven Automation",
        "E-Commerce Solutions",
        "ERP & CRM Integration",
        "MVP Development",
      ],
    },
    {
      slug: "data-analytics",
      title: "Data Analytics Consulting",
      description: "Make smarter decisions with data-driven insights",
      icon: "📊",
      highlights: [
        "Data Analysis & Auditing",
        "Process Optimization",
        "Pipeline Development",
        "KPI Dashboards",
        "Predictive Analytics",
        "Custom Data Models",
      ],
    },
    {
      slug: "branding",
      title: "Digitalisation & Branding",
      description: "Elevate your brand across all channels",
      icon: "✨",
      highlights: [
        "Brand Strategy",
        "Visual Identity Development",
        "Digital Branding Audits",
        "Omni-channel Positioning",
        "Corporate Messaging",
        "PR & Award Submissions",
      ],
    },
  ]

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <p className="text-accent font-semibold text-sm tracking-widest mb-4">ALL SERVICES</p>
        <h1 className="text-5xl font-bold mb-6">Comprehensive Solutions for Every Challenge</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          From global expansion to digital transformation, RMG offers end-to-end consulting services designed to drive
          sustainable growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="h-full p-8 bg-muted/50 rounded-lg border border-border hover:border-accent hover:shadow-lg transition cursor-pointer group">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <div className="space-y-2 mb-8">
                  {service.highlights.slice(0, 4).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  View Details →
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16 border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Schedule a consultation with our expert team to explore how RMG can drive your growth.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </main>
  )
}
