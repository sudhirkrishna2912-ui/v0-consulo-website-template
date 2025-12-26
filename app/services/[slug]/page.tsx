"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

const serviceDetails: Record<
  string,
  {
    title: string
    tagline: string
    description: string
    icon: string
    overview: string
    offerings: { title: string; description: string }[]
    benefits: string[]
    caseStudy: string
  }
> = {
  "global-expansion": {
    title: "Global Expansion & Market Entry",
    tagline: "Expand with confidence into new markets",
    icon: "🌍",
    description:
      "Help both new and existing companies expand with confidence—whether setting up operations or scaling into new regions.",
    overview:
      "Our global expansion services provide comprehensive support from market research through successful launch. We handle regulatory compliance, government relations, and localization strategies to ensure your entry is smooth and sustainable.",
    offerings: [
      {
        title: "For New Companies",
        description:
          "Market Research, Feasibility Studies, Incorporation & Licensing, Strategic Government Liaisons, Localization, Investment Readiness",
      },
      {
        title: "For Existing Businesses",
        description:
          "Distribution Models, Partner Matchmaking, Tax Optimization, Supply Chain Localization, Operational Transition, Regional Integration",
      },
    ],
    benefits: [
      "Reduce market entry risk with comprehensive research",
      "Navigate complex regulatory landscapes",
      "Accelerate time-to-market",
      "Optimize for local market conditions",
      "Build sustainable growth strategies",
      "Access government incentives and partnerships",
    ],
    caseStudy:
      "Chettinad Handlooms leveraged our expertise to enter Singapore successfully, transforming from a local brand to a celebrated retail staple—now a model for regional expansion.",
  },
  engineering: {
    title: "Engineering Services",
    tagline: "Smart engineering. Smarter execution.",
    icon: "🏗️",
    description:
      "From concept to commissioning, we help engineering businesses scale through structured solutions across design, build, and operational phases.",
    overview:
      "Whether you're a contractor, EPC player, or project developer, our consulting empowers you to navigate complexity, optimize processes, and capture opportunities in every project phase.",
    offerings: [
      {
        title: "Disciplines Supported",
        description: "Civil & Structural, Mechanical, Electrical & Instrumentation, Automation & Control Systems",
      },
      {
        title: "Key Services",
        description:
          "Contract Strategy, Business Development, Client Acquisition, Subcontractor Management, Workforce Planning, Project Feasibility, Process Optimization",
      },
    ],
    benefits: [
      "Streamline technical projects with business precision",
      "Optimize project profitability",
      "Build reliable subcontractor networks",
      "Develop sustainable client pipelines",
      "Improve operational efficiency",
      "Reduce project risks and delays",
    ],
    caseStudy:
      "We enabled a regional contractor to expand their business development pipeline by 40%, securing larger EPC projects through strategic market positioning.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Dominate your market digitally",
    icon: "📱",
    description:
      "From SEO to viral campaigns, we don't just run ads—we run momentum. Transform your digital presence and drive measurable business growth.",
    overview:
      "Our digital marketing services combine strategic planning with creative execution to build powerful online presence. We focus on ROI-driven campaigns that turn visibility into revenue.",
    offerings: [
      {
        title: "Core Services",
        description:
          "Search Engine Optimization, Social Media Management, Paid Advertising, Influencer Marketing, Content Creation, Marketing Automation",
      },
      {
        title: "Advanced Strategies",
        description:
          "Geo-targeted Campaigns, Short-form Video, User-Generated Content, Analytics & Reporting, Funnel Optimization, Real-time Dashboards",
      },
    ],
    benefits: [
      "Increase organic visibility and traffic",
      "Maximize ROI on ad spend",
      "Build authentic audience engagement",
      "Drive qualified leads",
      "Improve brand awareness",
      "Scale revenue predictably",
    ],
    caseStudy:
      "Incredibowl transformed from a hidden gem to Clarke Quay's #1 healthy stop through our multi-pronged digital strategy—tripling foot traffic in 6 months.",
  },
  "it-consulting": {
    title: "IT Consulting & Digital Transformation",
    tagline: "Smart tech = smart profits",
    icon: "💻",
    description:
      "Build the technology foundation your business needs to scale. From custom software to AI automation, we deliver solutions that drive profit.",
    overview:
      "Our IT consulting services help businesses leverage technology to solve real business problems. We focus on scalability, security, and measurable business impact.",
    offerings: [
      {
        title: "Development Services",
        description: "Custom Software, SaaS Platforms, E-Commerce Solutions, Mobile Apps, MVP Development, Prototyping",
      },
      {
        title: "Business Process Automation",
        description:
          "AI-Driven Automation, ERP Integration, CRM Systems, Chatbots & Virtual Assistants, Workflow Automation",
      },
    ],
    benefits: [
      "Reduce operational costs",
      "Improve customer experience",
      "Enable data-driven decision making",
      "Scale without proportional cost increase",
      "Improve team productivity",
      "Gain competitive advantage",
    ],
    caseStudy:
      "Tasty Corner bypassed food apps entirely with our custom portal, saving 30% in commissions and tripling direct orders—a transformation in operational efficiency.",
  },
  "data-analytics": {
    title: "Data Analytics Consulting",
    tagline: "Better data = better decisions = better business",
    icon: "📊",
    description:
      "Unlock the power of your data. Transform raw information into strategic insights that drive business growth and competitive advantage.",
    overview:
      "Our data analytics services help organizations understand their business deeply. From company-wide audits to predictive forecasting, we turn data into actionable intelligence.",
    offerings: [
      {
        title: "Analytics Services",
        description:
          "Company-wide Data Analysis, Process Optimization, Pipeline Development, Client Acquisition Intelligence, Custom Data Models",
      },
      {
        title: "Insights & Reporting",
        description:
          "Real-Time KPI Dashboards, Predictive Analytics, Business Logic Development, CRM & ERP Integration, Automated Reporting",
      },
    ],
    benefits: [
      "Make data-driven strategic decisions",
      "Identify growth opportunities",
      "Optimize operations",
      "Improve forecasting accuracy",
      "Increase profitability",
      "Gain competitive insights",
    ],
    caseStudy:
      "We helped a retail chain analyze customer behavior patterns, resulting in optimized product placement and a 25% increase in average transaction value.",
  },
  branding: {
    title: "Digitalisation & Branding",
    tagline: "Your story, elevated and everywhere",
    icon: "✨",
    description:
      "Build a brand that resonates. From visual identity to omni-channel strategy, we ensure consistent, compelling brand presence across all touchpoints.",
    overview:
      "Our branding and digitalization services help companies define and amplify their brand presence. We combine strategy, creativity, and technology to build memorable brands.",
    offerings: [
      {
        title: "Brand Development",
        description:
          "Brand Strategy, Visual Identity, Verbal Identity, Brand Audits, Internal Culture Alignment, Award Submissions, PR Positioning",
      },
      {
        title: "Digital Implementation",
        description:
          "Website Design & UX, E-Commerce Development, Social Media Strategy, Content Creation, Omni-channel Integration, Email Marketing",
      },
    ],
    benefits: [
      "Define clear brand positioning",
      "Build authentic audience connection",
      "Increase brand recall and loyalty",
      "Support higher pricing",
      "Differentiate from competitors",
      "Drive employee pride and alignment",
    ],
    caseStudy:
      "We repositioned a B2B services company with a new brand identity and digital strategy, resulting in a 40% increase in qualified leads and 3x higher website traffic.",
  },
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = serviceDetails[slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <Link href="/services" className="text-accent hover:text-accent/80 transition mb-8 inline-block">
          ← Back to Services
        </Link>
        <div className="text-5xl mb-6">{service.icon}</div>
        <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">{service.description}</p>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose RMG?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.overview}</p>
            <div className="space-y-3">
              {service.benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
            <div className="space-y-6">
              {service.offerings.map((offering, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-accent mb-2">{offering.title}</h4>
                  <p className="text-sm text-muted-foreground">{offering.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="bg-muted/30 py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-background rounded-lg border border-border hover:border-accent transition"
              >
                <p className="font-semibold text-accent mb-2">→</p>
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <div className="bg-primary text-primary-foreground rounded-lg p-12">
          <p className="text-sm font-semibold tracking-widest mb-4">SUCCESS STORY</p>
          <h3 className="text-2xl font-bold mb-6">See Real Results</h3>
          <p className="text-lg leading-relaxed mb-8">{service.caseStudy}</p>
          <Link href="#" className="inline-flex items-center gap-2 text-accent hover:gap-3 transition font-semibold">
            Read Full Case Study →
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-border text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how our {service.title.toLowerCase()} services can drive growth for your business.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Schedule a Consultation
        </Button>
      </div>
    </main>
  )
}
