"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">RMG</h3>
            <p className="text-primary-foreground/80">Strategic partners for sustainable business growth</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Global Expansion
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>info@rmgconsulting.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Global Offices</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex justify-between items-center">
          <p className="text-primary-foreground/80">© 2025 RMG Consulting Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-accent transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-accent transition">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
