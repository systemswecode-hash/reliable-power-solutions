"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"

export function PromotionalPosters() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")

  const posters = [
    {
      id: 1,
      image: "/posters/1.jpg",
      product: "Luminous Topcon Bifacial Solar Panels",
      cta: "Buy Now!",
    },
    {
      id: 2,
      image: "/posters/2.jpg",
      product: "EXIDE Tubular Batteries",
      cta: "Get Quote",
    },
    {
      id: 3,
      image: "/posters/3.jpg",
      product: "Luminous Inverters",
      cta: "Get Quote",
    },
    {
      id: 4,
      image: "/posters/4.jpg",
      product: "Solar Water Heaters",
      cta: "Get Quote",
    }
  ]

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  const handleGetQuote = (product: string) => {
    setSelectedProduct(product)
    setIsQuoteModalOpen(true)
  }

  return (
    <>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Special Promotions</h2>
              <p className="text-muted-foreground mt-2">Discover exclusive offers on our premium products</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-green-500 [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {posters.map((poster) => (
              <div
                key={poster.id}
                className="flex-shrink-0 w-full sm:w-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
              >
                <img
                  src={poster.image || "/placeholder.svg"}
                  alt={poster.product}
                  className="w-full h-128 object-cover"
                />

                <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                    onClick={() => handleGetQuote(poster.product)}
                  >
                    {poster.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} productName={selectedProduct} />
    </>
  )
}
