"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { QuoteModal } from "@/components/quote-modal"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt="Reliable Powers Logo"
                    width={40}
                    height={40}
                    className="w-46 sm:w-32 "
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                {/* <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </Link> */}
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </Link>
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white hidden sm:inline-flex"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Quote
              </Button>

              <button
                onClick={toggleMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <nav className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 text-sm font-medium rounded-md transition-colors block"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 text-sm font-medium rounded-md transition-colors block"
                >
                  Products
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 text-sm font-medium rounded-md transition-colors block"
                >
                  Services
                </Link>
                {/* <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 text-sm font-medium rounded-md transition-colors block"
                >
                  Contact
                </Link> */}
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 text-sm font-medium rounded-md transition-colors block"
                >
                  About
                </Link>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white w-full mt-2"
                  onClick={() => {
                    setIsQuoteModalOpen(true)
                    setIsOpen(false)
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  )
}
