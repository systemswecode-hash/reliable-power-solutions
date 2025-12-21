"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import { QuoteModal } from "@/components/quote-modal" // Fixed import to use named export instead of default export

// Define image URLs as constants for reusability and clarity
const LUMINOUS_LOGO_URL = "/Luminous.svg" // Placeholder URL, replace with actual path
const EXIDE_LOGO_URL = "/exide-logo.png" // Placeholder URL, replace with actual path
const DEFAULT_LOGO_URL = "/logo-default.png" // Placeholder URL, replace with actual path
const ADANI_LOGO_URL = "/adani.png"
const WAAREE_LOGO_URL = "/waaree.png"
const SUNGROW_LOGO_URL = "/sungrow.png"

const solarPanels = [
  {
    id: 1,
    name: "Luminous Mono Perc 445W",
    category: "Solar Panel",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      wattage: "445W",
      type: "Mono PERC",
      efficiency: "20.5%",
      warranty: "25 Years",
    },
    features: ["High output", "Durable", "Ideal for rooftops"],
    image: "/product-list/solar/solar.png",
  },
  {
    id: 2,
    name: "Adani Mono Perc 545W",
    category: "Solar Panel",
    brandName: "Adani",
    brandLogoUrl: ADANI_LOGO_URL,
    specs: {
      wattage: "545W",
      type: "Mono PERC Half-Cut",
      efficiency: "21.1%",
      warranty: "25 Years",
    },
    features: ["Industrial grade", "High power", "Low degradation"],
    image: "/product-list/solar/solar.png",
  },
  {
    id: 3,
    name: "Waaree 540W Mono Perc",
    category: "Solar Panel",
    brandName: "Waaree",
    brandLogoUrl: WAAREE_LOGO_URL,
    specs: {
      wattage: "540W",
      type: "Mono PERC",
      efficiency: "20.7%",
      warranty: "25 Years",
    },
    features: ["Tier-1 performance", "Strong frame", "High yield"],
    image: "/product-list/solar/solar.png",
  },
  {
    id: 4,
    name: "Sungrow 550W Half-Cut",
    category: "Solar Panel",
    brandName: "Sungrow",
    brandLogoUrl: SUNGROW_LOGO_URL,
    specs: {
      wattage: "550W",
      type: "Half-Cut",
      efficiency: "21.3%",
      warranty: "25 Years",
    },
    features: ["Superior build", "High shading tolerance"],
    image: "/product-list/solar/solar.png",
  },
]

const inverters = [
  {
    id: 1,
    name: "EVO-S 1050",
    category: "Inverter",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      power: "1050 VA",
      voltage: "12V",
      runningLoad: "700–750 W",
      battery: "Single (1 × 12V)",
    },
    features: ["3 Fans support", "3-4 LED lights", "TV + Wi-Fi Router", "Ideal for small homes and shops"],
    image: "/product-list/inverters/luminous/evo-s1050.png",
  },
  {
    id: 2,
    name: "EVO-S 1250",
    category: "Inverter",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      power: "1250 VA",
      voltage: "12V",
      runningLoad: "850–900 W",
      battery: "Single (1 × 12V)",
    },
    features: ["4 Fans support", "4-5 LED lights", "TV, Router, Laptop", "Perfect for 1 BHK homes"],
    image: "/product-list/inverters/luminous/evo-s1250.png",
  },
  {
    id: 3,
    name: "EVO-S 1550",
    category: "Inverter",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      power: "1550 VA",
      voltage: "12V",
      runningLoad: "1100–1200 W",
      battery: "Single (1 × 12V)",
    },
    features: ["5 Fans support", "5-6 LED lights", "TV, Router, Mixer", "Medium homes solution"],
    image: "/product-list/inverters/luminous/evo-s1550.png",
  },
  {
    id: 4,
    name: "EVO-S 1650",
    category: "Inverter",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      power: "1650 VA",
      voltage: "24V",
      runningLoad: "1200–1300 W",
      battery: "Double (2 × 12V)",
    },
    features: ["6 Fans support", "6-8 LED lights", "TV, Router, Laptop", "Large homes and offices"],
    image: "/product-list/inverters/luminous/evo-s1650.png",
  },
  {
    id: 5,
    name: "EVO-S 2300",
    category: "Inverter",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      power: "2300 VA",
      voltage: "24V",
      runningLoad: "1800–1900 W",
      battery: "Double (2 × 12V)",
    },
    features: ["8 Fans support", "8-10 LED lights", "Refrigerator, TV, Router", "Bigger homes and commercial use"],
    image: "/product-list/inverters/luminous/evo-s2300.png",
  },
  {
    id: 6,
    name: "Optimus 2300",
    category: "Inverter",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      power: "2300 VA",
      voltage: "24V",
      runningLoad: "1800–1900 W",
      battery: "Double (2 × 12V)",
    },
    features: [
      "Optimized charging",
      "Better backup efficiency",
      "Long power cut support",
      "Extended backup capability",
    ],
    image: "/product-list/inverters/luminous/optimus-2300.png",
  },
  {
    id: 7,
    name: "Optimus 2800",
    category: "Inverter",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      power: "2800 VA",
      voltage: "24V",
      runningLoad: "2200–2300 W",
      battery: "Double (2 × 12V)",
    },
    features: [
      "10 Fans support",
      "10-12 LED lights",
      "Refrigerator, Washing machine",
      "Villas, offices, heavy load users",
    ],
    image: "/product-list/inverters/luminous/optimus-2800.png",
  },
  {
    id: 8,
    name: "GQP 1050",
    category: "Inverter",
    brandName: "EXIDE",
    brandLogoUrl: EXIDE_LOGO_URL,
    specs: {
      power: "1050 VA",
      voltage: "12V",
      runningLoad: "800 W",
      battery: "Single (1 × 12V)",
    },
    features: [
      "Pure Sine Wave output",
      "Ideal for computers and sensitive appliances",
      "Supports single battery setups",
      "Fast battery charging capability",
    ],
    image: "/product-list/inverters/exide/gqp-1050.png",
  },
  {
    id: 9,
    name: "GQP 1450",
    category: "Inverter",
    brandName: "EXIDE",
    brandLogoUrl: EXIDE_LOGO_URL,
    specs: {
      power: "1450 VA",
      voltage: "24V",
      runningLoad: "1150 W",
      battery: "Double (2 × 12V)",
    },
    features: [
      "High capacity Pure Sine Wave",
      "Suitable for medium homes/offices",
      "Supports two battery setups",
      "Intelligent load handling",
    ],
    image: "/product-list/inverters/exide/gqp-1050.png",
  },
]

const batteries = [
  {
    id: 1,
    name: "Inverlast Battery - ILST 10036",
    category: "Lead-Acid Battery",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      capacity: "100 Ah",
      voltage: "12V",
      backup: "3–4 hours",
      bestWith: "1 kVA / 1250 VA",
    },
    features: [
      "3-4 hours backup at 400W load",
      "Basic household use",
      "Standard lead-acid construction",
      "Compatible with 1kVA inverters",
    ],
    image: "/product-list/batteries/luminous/battery-100ah.png",
  },
  {
    id: 2,
    name: "Inverlast Battery - ILST 15048",
    category: "Lead-Acid Battery",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      capacity: "120 Ah",
      voltage: "12V",
      backup: "4–5 hours",
      bestWith: "1250 VA / 1550 VA",
    },
    features: ["4-5 hours backup at 400W load", "Regular home use", "Enhanced capacity", "Reliable performance"],
    image: "/product-list/batteries/luminous/battery-120ah.png",
  },
  {
    id: 3,
    name: "Inverlast Battery - ILTJ 18148",
    category: "Lead-Acid Battery",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      capacity: "150 Ah",
      voltage: "12V",
      backup: "5–6 hours",
      bestWith: "1550 VA / 1650 VA",
    },
    features: [
      "5-6 hours backup at 400W load",
      "Medium-large homes",
      "Extended backup capability",
      "Heavy-duty construction",
    ],
    image: "/product-list/batteries/luminous/battery-150ah.png",
  },
  {
    id: 4,
    name: "Inverlast Battery - ILTT 20060",
    category: "Lead-Acid Battery",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      capacity: "160 Ah",
      voltage: "12V",
      backup: "6–7 hours",
      bestWith: "1650 VA / 2300 VA",
    },
    features: [
      "6-7 hours backup at 400W load",
      "Extended backup needs",
      "High capacity",
      "Commercial-grade reliability",
    ],
    image: "/product-list/batteries/luminous/battery-160ah.png",
  },
  {
    id: 5,
    name: "Inverlast Battery - ILTT 24060",
    category: "Lead-Acid Battery",
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    specs: {
      capacity: "180 Ah",
      voltage: "12V",
      backup: "7–8 hours",
      bestWith: "2300 VA / 2800 VA",
    },
    features: [
      "7-8 hours backup at 400W load",
      "Long power cuts support",
      "Commercial applications",
      "Maximum capacity option",
    ],
    image: "/product-list/batteries/luminous/battery-180ah.png",
  },
  {
    id: 6,
    name: "InvaTubular IT500",
    category: "Tubular Battery",
    brandName: "EXIDE",
    brandLogoUrl: EXIDE_LOGO_URL,
    specs: {
      capacity: "150 Ah",
      voltage: "12V",
      type: "Tall Tubular",
      bestWith: "All Sine Wave Inverters",
    },
    features: [
      "Heavy duty tubular plates",
      "Suitable for frequent and long power cuts",
      "Superior backup performance",
      "Low maintenance design",
    ],
    image: "/product-list/batteries/exide/it500-150ah.png",
  },
  {
    id: 7,
    name: "InvaTubular IT500 200Ah",
    category: "Tubular Battery",
    brandName: "EXIDE",
    brandLogoUrl: EXIDE_LOGO_URL,
    specs: {
      capacity: "200 Ah",
      voltage: "12V",
      type: "Tall Tubular",
      bestWith: "High Capacity Inverters (24V System)",
    },
    features: [
      "Maximum capacity for extended backup",
      "Excellent charge acceptance",
      "Durable tubular technology",
      "Designed for heavy load applications",
    ],
    image: "/product-list/batteries/exide/it500-150ah.png",
  },
  {
    id: 8,
    name: "InvaMaster IM1500",
    category: "Tubular Battery",
    brandName: "EXIDE",
    brandLogoUrl: EXIDE_LOGO_URL,
    specs: {
      capacity: "150 Ah",
      voltage: "12V",
      type: "Short Tubular",
      bestWith: "1 kVA to 1.5 kVA Inverters",
    },
    features: [
      "Short tubular design for compact spaces",
      "Robust performance in all conditions",
      "Low water consumption",
      "Great value for money",
    ],
    image: "/product-list/batteries/exide/invamaster-150ah.png",
  },
  {
    id: 9,
    name: "InvaHome IH1500",
    category: "Flat Plate Battery",
    brandName: "EXIDE",
    brandLogoUrl: EXIDE_LOGO_URL,
    specs: {
      capacity: "150 Ah",
      voltage: "12V",
      type: "Flat Plate",
      bestWith: "Entry to Mid-level Inverters",
    },
    features: [
      "Flat plate technology",
      "Reliable backup for short to medium power cuts",
      "High performance grid design",
      "Suitable for general household use",
    ],
    image: "/product-list/batteries/exide/invahome-150ah.png",
  },
  {
    id: 10,
    name: "InvaTubular IT500 SLK",
    category: "Tubular Battery",
    brandName: "EXIDE",
    brandLogoUrl: EXIDE_LOGO_URL,
    specs: {
      capacity: "150 Ah",
      voltage: "12V",
      type: "Tall Tubular",
      bestWith: "High-Performance Sine Wave Inverters",
    },
    features: [
      "Special tubular electrolyte mix (SLK)",
      "Enhanced life and performance",
      "Very low maintenance",
      "Best for areas with frequent, long power outages",
    ],
    image: "/product-list/batteries/exide/it500-slk-150ah.png",
  },
  {
    id: 11,
    name: "InvaMaster IM1000",
    category: "Tubular Battery",
    brandName: "EXIDE",
    brandLogoUrl: EXIDE_LOGO_URL,
    specs: {
      capacity: "100 Ah",
      voltage: "12V",
      type: "Short Tubular",
      bestWith: "Entry-level Inverters (< 1 kVA)",
    },
    features: [
      "Compact 100Ah capacity tubular battery",
      "Ideal for basic backup needs (lights, fans, TV)",
      "Robust tubular plate construction",
      "Space-saving design",
    ],
    image: "/product-list/batteries/exide/invamaster-100ah.png",
  },
]

const productCategories = [
  {
    title: "Solar Panels",
    description: "High-efficiency photovoltaic panels for residential and commercial installations",
    icon: "☀️",
  },
  {
    title: "Battery Storage",
    description: "Reliable energy storage solutions for backup power and grid independence",
    icon: "🔋",
  },
  {
    title: "Inverters",
    description: "Convert DC power from solar panels to AC power for your electrical system",
    icon: "⚡",
  },
  {
    title: "Mounting Systems",
    description: "Secure and durable mounting solutions for various roof types",
    icon: "🏠",
  },
]

export default function ProductsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined)

  const handleQuoteClick = (productName: string) => {
    setSelectedProduct(productName)
    setIsQuoteModalOpen(true)
  }

  return (
    <>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} productName={selectedProduct} />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                  Our Product Categories
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                  Comprehensive solar solutions for contractors. From high-efficiency panels to reliable storage
                  systems, we provide everything you need for successful solar installations.
                </p>
              </div>
            </div>
          </section>

          {/* Solar Panels Section */}
          <section id="solar-panels" className="py-20 bg-yellow-50 scroll-mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">Solar Panels</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  High-efficiency solar modules from India's most trusted brands—perfect for homes, industries, and
                  commercial rooftops.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {solarPanels.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                    <div className="relative h-48 bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <CardHeader className="flex-grow">
                      <div className="text-sm text-yellow-600 font-semibold mb-2">{product.category}</div>

                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{product.name}</CardTitle>

                        {product.brandLogoUrl && (
                          <div className="relative w-16 h-8">
                            <Image
                              src={product.brandLogoUrl || "/placeholder.svg"}
                              alt={`${product.brandName} logo`}
                              fill
                              className="object-contain object-right"
                            />
                          </div>
                        )}
                      </div>

                      <CardDescription className="mt-2 text-xs">
                        <div className="space-y-1">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key}>
                              <span className="font-semibold capitalize">{key}:</span> {value}
                            </div>
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <Button
                        className="w-full bg-yellow-600 hover:bg-yellow-700"
                        onClick={() => handleQuoteClick(product.name)}
                      >
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Luminous Inverters Section */}
          <section id="inverters" className="py-20 bg-blue-50 scroll-mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">Inverters</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Premium inverter solutions, designed for reliable backup power and various load requirements
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {inverters.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                    <div className="relative h-48 bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg?height=192&width=400&query=Luminous inverter"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="text-sm text-blue-600 font-semibold mb-2">{product.category}</div>
                      {/* Display Product Name and Brand Logo */}
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{product.name}</CardTitle>
                        {product.brandLogoUrl && (
                          <div className="relative w-16 h-8 flex-shrink-0">
                            <Image
                              src={product.brandLogoUrl || "/placeholder.svg"}
                              alt={`${product.brandName} logo`}
                              fill
                              style={{ objectFit: "contain" }}
                              className="object-right"
                            />
                          </div>
                        )}
                      </div>
                      <CardDescription className="mt-2 text-xs">
                        <div className="space-y-1">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key}>
                              <span className="font-semibold capitalize">{key}:</span> {value}
                            </div>
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleQuoteClick(product.name)}
                      >
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Luminous Batteries Section */}
          <section id="batteries" className="py-20 bg-muted/30 scroll-mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">Lead-Acid Batteries</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Reliable 12V lead-acid battery solutions for inverter backup systems with various capacities
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {batteries.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                    <div className="relative h-48 bg-muted ">
                      <Image
                        src={product.image || "/placeholder.svg?height=192&width=400&query=Luminous battery"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="text-sm text-orange-600 font-semibold mb-2">{product.category}</div>
                      {/* Display Product Name and Brand Logo */}
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{product.name}</CardTitle>
                        {product.brandLogoUrl && (
                          <div className="relative w-16 h-8 flex-shrink-0">
                            <Image
                              src={product.brandLogoUrl || "/placeholder.svg"}
                              alt={`${product.brandName} logo`}
                              fill
                              style={{ objectFit: "contain" }}
                              className="object-right"
                            />
                          </div>
                        )}
                      </div>
                      <CardDescription className="mt-2 text-xs">
                        <div className="space-y-1">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key}>
                              <span className="font-semibold capitalize">{key}:</span> {value}
                            </div>
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        className="w-full bg-orange-600 hover:bg-orange-700"
                        onClick={() => handleQuoteClick(product.name)}
                      >
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Product Categories */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {productCategories.map((category) => (
                  <Card
                    key={category.title}
                    className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <div className="relative h-48 bg-muted">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-foreground">
                        {category.icon}
                      </div>
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="text-sm text-foreground font-semibold mb-2">{category.title}</div>
                      <div className="text-muted-foreground text-base">{category.description}</div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
