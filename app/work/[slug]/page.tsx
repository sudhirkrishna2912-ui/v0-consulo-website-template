"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

const caseStudyDetails: Record<
  string,
  {
    title: string
    category: string
    tagline: string
    description: string
    challenge: string
    solution: string
    results: { metric: string; value: string; description: string }[]
    process: { step: number; title: string; description: string }[]
    testimonial: { quote: string; author: string; role: string }
  }
> = {
  "chettinad-handlooms": {
    title: "Chettinad Handlooms",
    category: "Global Expansion",
    tagline: "Tradition meets transformation in Southeast Asia",
    description: "Enabled seamless Singapore market entry for traditional handloom business",
    challenge:
      "Chettinad Handlooms, a heritage handloom brand from Tamil Nadu, wanted to expand internationally but faced challenges with market research, regulatory compliance, local partnerships, and cultural adaptation for the Singapore market.",
    solution:
      "We conducted comprehensive market research, identified regulatory requirements, developed a localization strategy, established government liaisons, and facilitated partnerships with local retailers. Our team provided on-ground support during the launch phase.",
    results: [
      { metric: "Market Entry", value: "Singapore", description: "Successfully established retail operations" },
      { metric: "Timeline", value: "6 months", description: "From planning to retail launch" },
      { metric: "Status", value: "Retail Staple", description: "Now celebrated by local customers" },
    ],
    process: [
      {
        step: 1,
        title: "Market Research",
        description: "Analyzed Singapore's handloom market, consumer preferences, and competitive landscape",
      },
      {
        step: 2,
        title: "Regulatory Navigation",
        description: "Handled import licensing, product certifications, and compliance requirements",
      },
      {
        step: 3,
        title: "Local Partnerships",
        description: "Identified and established relationships with premium retailers and distributors",
      },
      {
        step: 4,
        title: "Localization",
        description: "Adapted branding, product mix, and marketing for local market preferences",
      },
    ],
    testimonial: {
      quote:
        "RMG's expertise in navigating Singapore's market transformed our expansion dreams into reality. Their deep understanding of both tradition and modern commerce was invaluable.",
      author: "Heritage Handloom Founder",
      role: "CEO, Chettinad Handlooms",
    },
  },
  incredibowl: {
    title: "Incredibowl",
    category: "Digital Marketing",
    tagline: "From hidden gem to market leader",
    description: "Transformed digital presence to become Clarke Quay's #1 healthy food destination",
    challenge:
      "Despite offering excellent healthy food options, Incredibowl remained relatively unknown compared to competitors. They needed a comprehensive digital strategy to boost brand awareness and foot traffic to their Clarke Quay location.",
    solution:
      "We developed and executed a multi-pronged digital strategy including SEO optimization, targeted social media campaigns, influencer partnerships, content marketing, and geo-targeted advertising. We focused on health-conscious consumers and lifestyle positioning.",
    results: [
      { metric: "Traffic Growth", value: "3x", description: "Increased foot traffic and visibility" },
      { metric: "Brand Ranking", value: "#1 Location", description: "Top healthy food destination at Clarke Quay" },
      { metric: "Social Growth", value: "+250%", description: "Followers and engagement expansion" },
    ],
    process: [
      {
        step: 1,
        title: "Brand Audit",
        description: "Analyzed current digital presence and competitive positioning",
      },
      {
        step: 2,
        title: "SEO Strategy",
        description: "Optimized website and local SEO for health food and location keywords",
      },
      {
        step: 3,
        title: "Social Media Campaigns",
        description: "Built engaging content strategy with fitness influencer partnerships",
      },
      {
        step: 4,
        title: "Paid Advertising",
        description: "Implemented geo-targeted ads to drive foot traffic to physical location",
      },
    ],
    testimonial: {
      quote:
        "RMG turned our restaurant into the neighborhood's go-to healthy spot. Their marketing didn't just increase sales—it built a community around our brand.",
      author: "Restaurant Owner",
      role: "Founder, Incredibowl",
    },
  },
  "tasty-corner": {
    title: "Tasty Corner",
    category: "IT Consulting",
    tagline: "Direct-to-customer revolution",
    description: "Built custom web portal enabling direct orders and eliminating third-party delivery dependency",
    challenge:
      "Tasty Corner was losing 30% of revenue to food delivery platform commissions. They needed an alternative solution to enable direct customer orders while maintaining convenience and reducing operational costs.",
    solution:
      "We designed and developed a custom web portal with seamless ordering, payment integration, and delivery logistics management. The platform allowed customers to order directly while providing Tasty Corner complete control over customer relationships and profitability.",
    results: [
      { metric: "Commission Savings", value: "30%", description: "Eliminated third-party platform fees" },
      { metric: "Revenue Growth", value: "3x", description: "From direct order increases" },
      { metric: "Direct Orders", value: "+250%", description: "Customer shift from platforms to direct channel" },
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Understood business model, customer flow, and operational needs",
      },
      {
        step: 2,
        title: "Platform Design",
        description: "Built custom web application with ordering, payment, and analytics",
      },
      {
        step: 3,
        title: "Integration",
        description: "Connected with payment processors, delivery systems, and inventory management",
      },
      {
        step: 4,
        title: "Launch & Support",
        description: "Smooth rollout with customer migration and ongoing optimization",
      },
    ],
    testimonial: {
      quote:
        "The custom portal gave us back control of our business. We're now more profitable, customers appreciate the convenience, and we own the relationship. Best investment we've made.",
      author: "Restaurant Operator",
      role: "Owner, Tasty Corner",
    },
  },
  "engineering-contractor": {
    title: "Regional Engineering Contractor",
    category: "Engineering Services",
    tagline: "Building a stronger pipeline",
    description: "Expanded business development and secured larger EPC projects through strategic positioning",
    challenge:
      "A mid-sized regional contractor wanted to grow beyond local projects and compete for larger, more profitable EPC contracts. They needed help with business development strategy, tender preparation, and market positioning.",
    solution:
      "We developed a comprehensive business development strategy, enhanced their tender processes, strengthened their project portfolio presentation, and positioned them for larger projects. We provided training on client acquisition and contract negotiation.",
    results: [
      { metric: "Pipeline Growth", value: "40%", description: "Expanded project opportunities" },
      { metric: "Project Size", value: "+50% Avg", description: "Larger, more profitable contracts" },
      { metric: "Win Rate", value: "Improved", description: "Better tender success rate" },
    ],
    process: [
      {
        step: 1,
        title: "Capability Assessment",
        description: "Evaluated current capabilities, capacity, and competitive strengths",
      },
      {
        step: 2,
        title: "Market Analysis",
        description: "Identified high-opportunity sectors and client segments",
      },
      {
        step: 3,
        title: "BD Strategy",
        description: "Developed systematic business development and client acquisition approach",
      },
      {
        step: 4,
        title: "Execution Support",
        description: "Provided ongoing support for tender preparation and client engagement",
      },
    ],
    testimonial: {
      quote:
        "RMG helped us think bigger about our business. Their strategy opened doors to projects we didn't know existed. Growth has been substantial and sustainable.",
      author: "Managing Director",
      role: "Regional Engineering Contractor",
    },
  },
  "retail-analytics": {
    title: "Retail Chain Analytics Initiative",
    category: "Data Analytics",
    tagline: "Data-driven retail optimization",
    description: "Analyzed customer behavior patterns to optimize product placement and merchandising strategy",
    challenge:
      "A multi-store retail chain had accumulated significant sales data but wasn't leveraging it for strategic decisions. They needed insights into customer behavior, product performance, and optimization opportunities.",
    solution:
      "We conducted comprehensive data analysis across all locations, identified customer behavior patterns, analyzed product performance, and recommended merchandising optimizations. We created dashboards for ongoing performance monitoring.",
    results: [
      { metric: "Transaction Value", value: "+25%", description: "Increased average transaction value" },
      { metric: "Category Sales", value: "+30%", description: "Specific categories improved significantly" },
      { metric: "Efficiency", value: "+20%", description: "Inventory optimization and turnover" },
    ],
    process: [
      {
        step: 1,
        title: "Data Collection",
        description: "Aggregated sales, traffic, and customer data from all locations",
      },
      {
        step: 2,
        title: "Analysis",
        description: "Identified patterns, correlations, and opportunities in the data",
      },
      {
        step: 3,
        title: "Recommendations",
        description: "Provided specific merchandising, placement, and pricing recommendations",
      },
      {
        step: 4,
        title: "Monitoring",
        description: "Created dashboards and ongoing reporting for performance tracking",
      },
    ],
    testimonial: {
      quote:
        "We had the data but didn't know what it meant. RMG transformed raw numbers into actionable insights that immediately impacted our bottom line.",
      author: "Retail Operations Director",
      role: "Regional Retail Chain",
    },
  },
  "b2b-rebranding": {
    title: "B2B Services Company Rebranding",
    category: "Branding",
    tagline: "Repositioning for growth",
    description: "Complete brand identity and digital strategy overhaul to strengthen market position",
    challenge:
      "A successful but aging B2B services company needed to refresh their brand identity and digital presence to appeal to newer market segments and compete more effectively against modern competitors.",
    solution:
      "We conducted brand strategy workshops, developed new visual and verbal identity, designed a modern website, and created comprehensive brand guidelines. We also implemented omni-channel marketing strategy to amplify the new positioning.",
    results: [
      { metric: "Qualified Leads", value: "+40%", description: "Increased inbound inquiries" },
      { metric: "Website Traffic", value: "+3x", description: "Significant organic growth" },
      { metric: "Brand Score", value: "Improved", description: "Enhanced market perception and positioning" },
    ],
    process: [
      {
        step: 1,
        title: "Brand Discovery",
        description: "Stakeholder interviews and market research to understand positioning",
      },
      {
        step: 2,
        title: "Identity Design",
        description: "Developed new visual identity, messaging, and brand guidelines",
      },
      {
        step: 3,
        title: "Digital Transformation",
        description: "Redesigned website and created digital marketing assets",
      },
      {
        step: 4,
        title: "Launch & Integration",
        description: "Coordinated company-wide rollout and ongoing brand management",
      },
    ],
    testimonial: {
      quote:
        "The rebranding gave us a fresh start. Our sales team now has an asset they're proud to share, and prospects perceive us as modern and innovative. The ROI has been remarkable.",
      author: "CEO",
      role: "B2B Services Company",
    },
  },
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = caseStudyDetails[slug]

  if (!study) {
    notFound()
  }

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <Link href="/work" className="text-accent hover:text-accent/80 transition mb-8 inline-block">
          ← Back to All Work
        </Link>
        <p className="text-accent font-semibold text-sm tracking-widest mb-4">{study.category}</p>
        <h1 className="text-5xl font-bold mb-4">{study.title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">{study.description}</p>
      </div>

      {/* Featured Image */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border flex items-center justify-center">
          <span className="text-muted-foreground text-lg">Case Study Featured Image</span>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-accent">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-accent">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-muted/30 py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {study.results.map((result, idx) => (
              <div key={idx} className="p-8 bg-background rounded-lg border border-border">
                <p className="text-accent text-sm font-semibold tracking-widest mb-2">{result.metric}</p>
                <p className="text-4xl font-bold mb-3">{result.value}</p>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {study.process.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-6">
                {item.step}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              {idx < study.process.length - 1 && (
                <div className="hidden md:block absolute top-12 left-24 w-[calc(100%+2rem)] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-primary text-primary-foreground py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed mb-8 italic">"{study.testimonial.quote}"</p>
          <div>
            <p className="font-bold">{study.testimonial.author}</p>
            <p className="text-primary-foreground/80">{study.testimonial.role}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-border text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how RMG can deliver similar results for your organization.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Schedule a Consultation
        </Button>
      </div>

      {/* Related Studies */}
      <div className="bg-muted/30 py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">More Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/work"
              className="p-8 bg-background rounded-lg border border-border hover:border-accent transition"
            >
              <p className="text-accent font-semibold text-sm mb-2">Continue Exploring</p>
              <h3 className="text-xl font-bold mb-3">View All Case Studies</h3>
              <p className="text-muted-foreground">Explore more of our success stories and transformations.</p>
            </Link>
            <Link
              href="/services"
              className="p-8 bg-background rounded-lg border border-border hover:border-accent transition"
            >
              <p className="text-accent font-semibold text-sm mb-2">Learn More</p>
              <h3 className="text-xl font-bold mb-3">Explore Our Services</h3>
              <p className="text-muted-foreground">Discover all the consulting services RMG offers.</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
