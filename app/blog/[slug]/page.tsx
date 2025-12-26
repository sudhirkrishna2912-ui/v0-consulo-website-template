"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BlogPageProps {
  params: Promise<{ slug: string }>
}

const blogArticles: Record<
  string,
  {
    title: string
    category: string
    author: string
    date: string
    readTime: string
    excerpt: string
    content: string
    image: string
    sections: { title: string; content: string }[]
    relatedArticles: { slug: string; title: string; category: string }[]
  }
> = {
  "market-entry-strategy": {
    title: "5 Essential Steps for Successful Global Market Entry",
    category: "Global Expansion",
    author: "Sarah Patel",
    date: "December 15, 2024",
    readTime: "8 min read",
    excerpt:
      "Learn the proven framework for entering new markets successfully. From research to execution, we break down the critical steps that ensure your international expansion achieves sustainable growth.",
    image: "placeholder",
    content: `Expanding into new global markets is one of the most exciting and challenging decisions a business can make. While the potential rewards are significant, the risks are equally substantial. This is why having a structured approach is essential.

In this article, we'll walk you through the five essential steps that have proven successful for hundreds of businesses across industries.`,
    sections: [
      {
        title: "1. Conduct Comprehensive Market Research",
        content: `Before you invest a single dollar, you need to understand your target market. This involves analyzing market size, growth potential, competitive landscape, consumer behavior, and regulatory environment.

Key questions to answer:
- How large is the market and how fast is it growing?
- Who are the main competitors and how do they operate?
- What are the consumer preferences and behaviors?
- What are the regulatory and compliance requirements?
- What are the barriers to entry?

Our approach includes primary research (interviews with local partners, potential customers), secondary research (market reports, industry data), and competitive analysis. This foundational work prevents costly mistakes and identifies genuine opportunities.`,
      },
      {
        title: "2. Develop a Detailed Market Entry Strategy",
        content: `Once you understand the market, you need a clear strategy for how you'll enter. This includes decisions about your business model, pricing, distribution channels, and marketing approach.

Key considerations:
- Will you establish a local subsidiary, partner with a distributor, or license your offering?
- How will you adapt your product or service for local preferences?
- What will be your competitive differentiation?
- How will you build awareness and acquire customers?

The best entry strategy for a manufacturing company looks completely different from a software company or a services firm. Your strategy must be tailored to your industry, capabilities, and target market dynamics.`,
      },
      {
        title: "3. Navigate Regulatory and Compliance Requirements",
        content: `Every market has unique regulatory requirements that can significantly impact your timeline and investment. These might include business registration, import/export regulations, labor laws, environmental standards, and industry-specific certifications.

Common regulatory areas:
- Business licensing and registration
- Tax and financial reporting requirements
- Employment and labor laws
- Data protection and privacy regulations
- Industry-specific standards and certifications
- Intellectual property protection

Failing to properly address regulatory requirements can result in delays, fines, or worse. Working with local experts who understand the regulatory landscape is essential. We've helped companies navigate complex regulatory environments in over 20 countries.`,
      },
      {
        title: "4. Establish Local Partnerships and Relationships",
        content: `Success in new markets often depends on having the right local partners and relationships. These might include distributors, suppliers, regulatory consultants, or strategic partners.

The right partnerships can:
- Accelerate your market entry timeline
- Reduce your risk and investment requirements
- Provide market knowledge and local connections
- Build credibility with local customers and regulators

Building these relationships takes time and cultural awareness. Understanding local business practices, communication styles, and relationship-building approaches is crucial for long-term success.`,
      },
      {
        title: "5. Execute with Discipline and Flexibility",
        content: `The final step is execution—bringing your plan to life in the new market. This requires discipline to stick to your strategy while maintaining flexibility to adapt as you learn.

Key execution principles:
- Set clear milestones and KPIs to track progress
- Build a local team that understands the market
- Maintain regular communication with headquarters
- Be prepared to adapt your approach based on market feedback
- Manage your resources efficiently to optimize ROI

Market entry is rarely a straight path. The businesses that succeed are those that execute thoughtfully while remaining responsive to market realities.`,
      },
    ],
    relatedArticles: [
      { slug: "brand-positioning", title: "Building an Unshakeable Brand Position", category: "Branding" },
      { slug: "data-driven-decisions", title: "Making Data-Driven Decisions", category: "Analytics" },
    ],
  },
  "digital-transformation": {
    title: "Digital Transformation: From Strategy to Implementation",
    category: "Technology",
    author: "James Chen",
    date: "December 10, 2024",
    readTime: "10 min read",
    excerpt:
      "Discover how to successfully transform your business through technology. We explore common challenges, proven strategies, and real-world examples of digital transformation success.",
    image: "placeholder",
    content:
      "Digital transformation is no longer optional—it's essential for competitive survival. Yet many organizations struggle with the implementation. This comprehensive guide will help you navigate the transformation journey successfully.",
    sections: [
      {
        title: "Understanding Digital Transformation",
        content:
          "Digital transformation goes beyond implementing new technology. It's fundamentally about reimagining how your business operates, creates value, and serves customers using digital capabilities.",
      },
      {
        title: "Key Technology Areas",
        content:
          "Cloud computing, artificial intelligence, data analytics, automation, and customer experience platforms are the primary technology areas driving business transformation.",
      },
      {
        title: "Building Your Transformation Roadmap",
        content:
          "Success requires a clear vision, phased implementation approach, skilled team, and ongoing adaptation. Your roadmap should align technology investments with business objectives.",
      },
    ],
    relatedArticles: [
      { slug: "engineering-excellence", title: "Scaling Engineering Operations", category: "Engineering" },
      { slug: "data-driven-decisions", title: "Making Data-Driven Decisions", category: "Analytics" },
    ],
  },
  "brand-positioning": {
    title: "Building an Unshakeable Brand Position in Your Market",
    category: "Branding",
    author: "Elena Rodriguez",
    date: "December 5, 2024",
    readTime: "7 min read",
    excerpt:
      "Strong brand positioning sets you apart from competitors. Learn how to define, communicate, and reinforce your unique value proposition in the minds of your target audience.",
    image: "placeholder",
    content:
      "Your brand positioning is the foundation of all your marketing efforts. It's how your target audience perceives you relative to competitors.",
    sections: [
      {
        title: "Defining Your Position",
        content:
          "Start by understanding your unique strengths, target customer needs, and competitive landscape. Your positioning should be authentic, relevant, and differentiated.",
      },
      {
        title: "Communicating Your Position",
        content:
          "Effective communication requires consistency across all touchpoints—from your website and advertising to customer interactions and company culture.",
      },
      {
        title: "Reinforcing Your Position",
        content:
          "Build your position over time through consistent messaging, quality delivery, thought leadership, and strategic partnerships.",
      },
    ],
    relatedArticles: [
      { slug: "marketing-roi", title: "Maximizing ROI from Digital Marketing", category: "Marketing" },
      { slug: "market-entry-strategy", title: "5 Steps for Global Market Entry", category: "Global Expansion" },
    ],
  },
  "data-driven-decisions": {
    title: "Making Data-Driven Decisions That Drive Growth",
    category: "Analytics",
    author: "Rajesh Desai",
    date: "November 28, 2024",
    readTime: "9 min read",
    excerpt:
      "Data is your competitive advantage. Learn how to collect, analyze, and act on data insights to optimize operations, identify opportunities, and accelerate growth.",
    image: "placeholder",
    content:
      "Organizations that leverage data effectively consistently outperform their competitors. Yet many struggle to translate raw data into actionable insights.",
    sections: [
      {
        title: "Building Your Data Foundation",
        content: "Start by identifying your key business questions, then determine what data you need to answer them.",
      },
      {
        title: "Collecting and Organizing Data",
        content:
          "Quality data starts with good collection and organization processes. Invest in the right tools and systems.",
      },
      {
        title: "Analyzing and Interpreting Data",
        content: "Use both quantitative analysis and business intuition to extract meaningful insights from your data.",
      },
    ],
    relatedArticles: [
      { slug: "digital-transformation", title: "Digital Transformation Guide", category: "Technology" },
      { slug: "engineering-excellence", title: "Scaling Engineering Operations", category: "Engineering" },
    ],
  },
  "engineering-excellence": {
    title: "Scaling Engineering Operations Without Losing Quality",
    category: "Engineering",
    author: "Michael Brooks",
    date: "November 20, 2024",
    readTime: "8 min read",
    excerpt:
      "Growth brings challenges for engineering firms. Discover strategies to scale operations, maintain project quality, manage teams, and improve profitability as you expand.",
    image: "placeholder",
    content:
      "For engineering firms, scaling presents a unique set of challenges. How do you grow while maintaining the quality and execution standards that built your reputation?",
    sections: [
      {
        title: "Process Standardization",
        content:
          "Document and standardize your key processes. This creates consistency and enables faster training of new team members.",
      },
      {
        title: "Team Development and Capacity",
        content:
          "Scaling requires building stronger teams. Invest in training, clear roles, and performance management systems.",
      },
      {
        title: "Quality Assurance",
        content:
          "Implement robust quality assurance processes to maintain standards as you grow. Don't sacrifice quality for speed.",
      },
    ],
    relatedArticles: [
      { slug: "market-entry-strategy", title: "5 Steps for Global Market Entry", category: "Global Expansion" },
      { slug: "digital-transformation", title: "Digital Transformation Guide", category: "Technology" },
    ],
  },
  "marketing-roi": {
    title: "Maximizing ROI from Your Digital Marketing Investments",
    category: "Marketing",
    author: "Sophia Lambert",
    date: "November 15, 2024",
    readTime: "7 min read",
    excerpt:
      "Every marketing dollar should deliver measurable results. Learn how to strategize, execute, measure, and optimize digital marketing campaigns for maximum return on investment.",
    image: "placeholder",
    content:
      "Digital marketing offers unprecedented ability to measure and optimize your marketing investments. Yet many organizations fail to capture this potential.",
    sections: [
      {
        title: "Strategy and Planning",
        content:
          "Start with clear objectives, target audience definition, and strategy development. Your strategy should guide all tactical decisions.",
      },
      {
        title: "Campaign Execution",
        content:
          "Execute campaigns with consistent messaging, clear calls-to-action, and well-designed customer journeys.",
      },
      {
        title: "Measurement and Optimization",
        content:
          "Track key metrics, analyze performance, and continuously optimize based on data. Small improvements compound to significant results.",
      },
    ],
    relatedArticles: [
      { slug: "brand-positioning", title: "Building Brand Position", category: "Branding" },
      { slug: "data-driven-decisions", title: "Making Data-Driven Decisions", category: "Analytics" },
    ],
  },
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params
  const article = blogArticles[slug]

  if (!article) {
    notFound()
  }

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-12">
        <Link href="/blog" className="text-accent hover:text-accent/80 transition mb-8 inline-block">
          ← Back to Blog
        </Link>
        <p className="text-accent font-semibold text-sm tracking-widest mb-4">{article.category}</p>
        <h1 className="text-5xl font-bold mb-6">{article.title}</h1>
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
          <span>By {article.author}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border flex items-center justify-center">
          <span className="text-muted-foreground">Featured Article Image</span>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{article.content}</p>

          {article.sections.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 mt-12">{section.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">{section.content}</p>
            </div>
          ))}

          {/* Key Takeaways */}
          <div className="bg-muted/50 border border-border rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold mb-6">Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Success requires a structured approach combined with flexibility to adapt</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Investment in research and planning pays dividends throughout execution</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Local partnerships and relationships are critical success factors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Continuous monitoring and optimization ensure sustained success</span>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center my-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply These Insights?</h3>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Our consultants can help you develop a customized strategy tailored to your specific challenges and goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-bold rounded hover:opacity-90 transition"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {article.relatedArticles.map((related) => (
            <Link key={related.slug} href={`/blog/${related.slug}`}>
              <div className="p-8 bg-muted/30 rounded-lg border border-border hover:border-accent transition group cursor-pointer">
                <p className="text-accent text-sm font-semibold mb-3">{related.category}</p>
                <h3 className="text-xl font-bold group-hover:text-accent transition">{related.title}</h3>
                <p className="text-accent mt-4 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition">
                  Read Article →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-border">
        <div className="bg-muted/50 rounded-lg border border-border p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't Miss Future Insights</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for expert insights, industry trends, and actionable strategies.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
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
    </main>
  )
}
