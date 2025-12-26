"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-accent">RMG</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="#" className="hover:text-accent transition">
            About
          </Link>
          <Link href="#" className="hover:text-accent transition">
            Services
          </Link>
          <Link href="#" className="hover:text-accent transition">
            Work
          </Link>
          <Link href="#" className="hover:text-accent transition">
            Blog
          </Link>
        </div>

        <button className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition">
          Let's Talk
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col gap-4 p-6">
            <Link href="#" className="hover:text-accent transition">
              About
            </Link>
            <Link href="#" className="hover:text-accent transition">
              Services
            </Link>
            <Link href="#" className="hover:text-accent transition">
              Work
            </Link>
            <Link href="#" className="hover:text-accent transition">
              Blog
            </Link>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition w-full">
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
