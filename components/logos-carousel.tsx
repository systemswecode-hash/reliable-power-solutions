"use client" // Keeping this line is fine, but not strictly necessary for this static version

// Data defining the company logos
const COMPANY_LOGOS = [
  { name: "Waaree", url: "/waaree.png" },
  { name: "Livepure", url: "/livpure.jpeg" },
  { name: "BPE", url: "/bpe.png" },
  { name: "Exide", url: "/exide-logo.png" },
  { name: "Luminous", url: "/Luminous.svg" }
]

export function LogosCarousel() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
          Powering Projects with Proven Partners
        </h2>

        {/* Static Logos Container */}
        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8 md:gap-x-16 h-full">
          {COMPANY_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center flex-shrink-0"
              style={{ minWidth: "150px" }}
            >
              <img
                src={logo.url || "/placeholder.svg"}
                alt={logo.name}
                className="max-h-24 max-w-[150px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
