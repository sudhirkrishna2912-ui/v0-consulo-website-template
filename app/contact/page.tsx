"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    serviceType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ firstName: "", lastName: "", email: "", company: "", serviceType: "", message: "" })
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "Send us a detailed message",
      contact: "info@rmgconsulting.com",
      response: "Typically respond within 24 hours",
    },
    {
      icon: "📞",
      title: "Phone",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      response: "Available during business hours",
    },
    {
      icon: "📍",
      title: "Office",
      description: "Visit our global offices",
      contact: "Multiple Locations Worldwide",
      response: "Schedule an in-person meeting",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect with our team",
      contact: "RMG Consulting Services",
      response: "Professional networking",
    },
  ]

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <p className="text-accent font-semibold text-sm tracking-widest mb-4">GET IN TOUCH</p>
        <h1 className="text-5xl font-bold mb-6">Let's Build Together</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Ready to transform your business? Our team is here to discuss your challenges and explore how RMG can drive
          sustainable growth.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-border">
        <div className="grid md:grid-cols-4 gap-8">
          {contactMethods.map((method, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="font-bold mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              <p className="font-semibold text-accent mb-2">{method.contact}</p>
              <p className="text-xs text-muted-foreground">{method.response}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Share your business challenges with us. Our experts will discuss your needs and show you how RMG's
                consulting services can drive measurable growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h3 className="font-bold mb-1">Free Initial Consultation</h3>
                  <p className="text-muted-foreground">No obligation, just genuine exploration of your needs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h3 className="font-bold mb-1">Expert Assessment</h3>
                  <p className="text-muted-foreground">Learn how RMG can add value to your organization</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h3 className="font-bold mb-1">Tailored Recommendations</h3>
                  <p className="text-muted-foreground">Customized approach based on your specific challenges</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-4">
                "RMG doesn't just listen—they understand. The consultation process itself provided valuable insights."
              </p>
              <p className="font-semibold">- Global Business Leader</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-muted/30 p-12 rounded-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Service Type</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select a service...</option>
                  <option value="global-expansion">Global Expansion</option>
                  <option value="engineering">Engineering Services</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="it-consulting">IT Consulting</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="branding">Branding & Digital</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about your business challenges and goals..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will only be used to contact you about your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-muted/30 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does an initial consultation take?",
                a: "Our initial consultations typically last 30-45 minutes. This gives us time to understand your business and challenges while answering your questions about RMG's approach.",
              },
              {
                q: "What is your engagement model?",
                a: "We offer flexible engagement models including project-based consulting, retainer arrangements, and dedicated team extensions. We'll recommend the best approach based on your needs.",
              },
              {
                q: "How do you measure success?",
                a: "We establish clear KPIs and success metrics during our initial engagement. Regular reporting and transparent communication ensure you see the impact of our work.",
              },
              {
                q: "Do you work with startups and small businesses?",
                a: "Yes! We work with businesses of all sizes. Our approach scales from early-stage companies to large enterprises. We tailor our services to fit your budget and stage.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold mb-3 text-accent">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
