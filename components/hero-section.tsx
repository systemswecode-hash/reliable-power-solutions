"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const LUMINOUS_LOGO_URL = "/Luminous.svg"
const ADANI_LOGO_URL = "/adani.png"
const WAAREE_LOGO_URL = "/waaree.png"
const SUNGROW_LOGO_URL = "/sungrow.png"

// Base panel specifications for calculation
const BASE_PANEL_SPECS = [
  {
    brandName: "Luminous",
    baseWattage: 445,
    type: "Mono PERC",
    efficiency: "20.5%",
    brandLogoUrl: LUMINOUS_LOGO_URL,
  },
  {
    brandName: "Adani",
    baseWattage: 545,
    type: "Mono PERC Half-Cut",
    efficiency: "21.1%",
    brandLogoUrl: ADANI_LOGO_URL,
  },
  {
    brandName: "Waaree",
    baseWattage: 540,
    type: "Mono PERC",
    efficiency: "20.7%",
    brandLogoUrl: WAAREE_LOGO_URL,
  },
  {
    brandName: "Sungrow",
    baseWattage: 550,
    type: "Half-Cut",
    efficiency: "21.3%",
    brandLogoUrl: SUNGROW_LOGO_URL,
  },
]

// System size variations requested
const SYSTEM_SIZES_KW = [2, 3, 5, 10]

/**
 * Generates the full product list by creating variations for each brand.
 * @returns {Array<Object>} The array of solar panel system products.
 */
function generateSolarProducts() {
  const products = []
  let idCounter = 1

  BASE_PANEL_SPECS.forEach(brand => {
    SYSTEM_SIZES_KW.forEach(sizeKw => {
      const totalWattage = sizeKw * 1000 // Convert kW to W
      // Calculate number of panels needed (rounded up)
      const numPanels = Math.ceil(totalWattage / brand.baseWattage)

      products.push({
        id: idCounter++,
        name: `${brand.brandName} ${sizeKw}kW System`,
        category: "Solar Kit",
        brandName: brand.brandName,
        brandLogoUrl: brand.brandLogoUrl,
        specs: {
          systemSize: `${sizeKw}kW`,
          numPanels: numPanels,
          panelType: brand.type,
          efficiency: brand.efficiency,
          warranty: "25 Years", // Standard warranty for panels
        },
        features: [
          `${numPanels} x ${brand.baseWattage}W panels included`, 
          `High-efficiency ${brand.type} technology`, 
          "Complete kit for installation"
        ],
        image: "/solar-panel-installation.png", // Use a generic system image
      })
    })
  })
  return products
}

const solarSystems = generateSolarProducts()

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-16 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Your Trusted Partner for Reliable, High-Grade Solar Supplies
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Power your projects with premium solar panels, batteries, and renewable energy solutions. We provide
              contractors with high-quality materials and expert support for successful installations.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">3000+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>

            {/* --- New CTA Button Added Here --- */}
            <div className="mt-10">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
                Know More on Solar
              </Button>
            </div>
            {/* --------------------------------- */}
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-green-100">
              <img
                src="/solar-panel-installation-worker-with-hard-hat.jpg"
                alt="Solar panel installation professional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Clean Energy</div>
                  <div className="text-sm text-muted-foreground">Sustainable Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Premium Solar Kits</h2>
            <p className="text-muted-foreground">
              Explore our range of high-efficiency Solars from trusted brands in popular sizes (2kW, 3kW, 5kW, 10kW).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solarSystems.map((system) => ( // Changed mapping name to solarSystems
              <Card key={system.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={system.image || "/placeholder.svg"}
                      alt={system.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                      {system.category}
                    </span>
                    <img
                      src={system.brandLogoUrl || "/placeholder.svg"}
                      alt={system.brandName}
                      className="h-6 object-contain"
                    />
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 text-sm">{system.name}</h3>

                  <div className="space-y-1 mb-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">System Size:</span>
                      <span className="font-medium">{system.specs.systemSize}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Panels Qty:</span>
                      <span className="font-medium">{system.specs.numPanels}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Panel Type:</span>
                      <span className="font-medium">{system.specs.panelType}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Efficiency:</span>
                      <span className="font-medium">{system.specs.efficiency}</span>
                    </div>
                  </div>

                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
