"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import { PromotionalBannerCarousel } from "@/components/promotional-banner-carousel"

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

  BASE_PANEL_SPECS.forEach((brand) => {
    SYSTEM_SIZES_KW.forEach((sizeKw) => {
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
          "Complete kit for installation",
        ],
        image: "/solar-panel-installation.png", // Use a generic system image
      })
    })
  })
  return products
}

const solarBrands = [
  {
    id: 1,
    brandName: "Luminous",
    brandLogoUrl: LUMINOUS_LOGO_URL,
    systemVariants: ["1kW", "2kW", "3kW", "5kW", "10kW"],
    warranty: "25 Years",
    image: "/solar-panel-installation.png",
  },
  {
    id: 2,
    brandName: "Adani",
    brandLogoUrl: ADANI_LOGO_URL,
    systemVariants: ["1kW", "2kW", "3kW", "5kW", "10kW"],
    warranty: "25 Years",
    image: "/solar-panel-installation.png",
  },
  {
    id: 3,
    brandName: "Waaree",
    brandLogoUrl: WAAREE_LOGO_URL,
    systemVariants: ["1kW", "2kW", "3kW", "5kW", "10kW"],
    warranty: "25 Years",
    image: "/solar-panel-installation.png",
  },
  {
    id: 4,
    brandName: "Sungrow",
    brandLogoUrl: SUNGROW_LOGO_URL,
    systemVariants: ["1kW", "2kW", "3kW", "5kW", "10kW"],
    warranty: "25 Years",
    image: "/solar-panel-installation.png",
  },
]

export function HeroSection() {
  const [selectedVariants, setSelectedVariants] = useState<Record<number, string>>({})

  const handleVariantSelect = (brandId: number, variant: string) => {
    setSelectedVariants((prev) => ({ ...prev, [brandId]: variant }))
  }

  return (
    <section className="relative py-20 sm:py-16 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <PromotionalBannerCarousel />
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="l">
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
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Shop By Category</h2>
            <p className="text-muted-foreground">Explore our full range of solar and power products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/products#solar-panels">
              <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <h3 className="text-xl font-bold text-foreground mb-2">Solar Panels</h3>
                <p className="text-sm text-muted-foreground">High-efficiency photovoltaic modules</p>
              </Card>
            </Link>

            <Link href="/products#inverters">
              <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <h3 className="text-xl font-bold text-foreground mb-2">Inverters</h3>
                <p className="text-sm text-muted-foreground">Reliable power conversion systems</p>
              </Card>
            </Link>

            <Link href="/products#batteries">
              <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <h3 className="text-xl font-bold text-foreground mb-2">Batteries</h3>
                <p className="text-sm text-muted-foreground">Energy storage solutions</p>
              </Card>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Premium Solar Kits</h2>
            <p className="text-muted-foreground">
              Explore our range of high-efficiency solar systems from trusted brands. Select your desired system
              capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solarBrands.map((brand) => (
              <Card key={brand.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={brand.image || "/placeholder.svg"}
                      alt={`${brand.brandName} Solar Kit`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Solar Kit</span>
                    <img
                      src={brand.brandLogoUrl || "/placeholder.svg"}
                      alt={brand.brandName}
                      className="h-6 object-contain"
                    />
                  </div>

                  <h3 className="font-semibold text-foreground mb-3 text-base">{brand.brandName} Solar System</h3>

                  <div className="mb-3">
                    <label className="text-xs text-muted-foreground mb-2 block">System Type:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {brand.systemVariants.map((variant) => (
                        <button
                          key={variant}
                          onClick={() => handleVariantSelect(brand.id, variant)}
                          className={`px-2 py-2 text-xs font-medium rounded border transition-colors ${
                            selectedVariants[brand.id] === variant
                              ? "bg-green-600 text-white border-green-600"
                              : "bg-white text-foreground border-gray-300 hover:border-green-600"
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Warranty:</span>
                      <span className="font-medium">{brand.warranty}</span>
                    </div>
                  </div>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
