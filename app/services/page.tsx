import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      title: "System Design & Engineering",
      description: "Custom solar system design tailored to your specific project requirements",
      features: [
        "Site assessment and analysis",
        "Energy production modeling",
        "Electrical system design",
        "Permit-ready drawings",
      ],
      icon: "📐",
    },
    {
      title: "Technical Support",
      description: "Expert guidance throughout your installation process",
      features: [
        "24/7 technical hotline",
        "Installation troubleshooting",
        "Product training sessions",
        "On-site consultation",
      ],
      icon: "🛠️",
    },
    {
      title: "Logistics & Delivery",
      description: "Reliable supply chain management for timely project completion",
      features: ["Just-in-time delivery", "Inventory management", "Nationwide shipping", "Project staging"],
      icon: "🚛",
    },
    {
      title: "Warranty & Maintenance",
      description: "Comprehensive support for long-term system performance",
      features: [
        "Extended warranty options",
        "Performance monitoring",
        "Preventive maintenance",
        "Rapid replacement service",
      ],
      icon: "🔧",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Comprehensive Solar Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Beyond supplying premium solar materials, we provide end-to-end support services to ensure your projects
                are successful from design to completion.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-green-600">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
              <p className="text-green-100 text-lg mb-8">
                Join thousands of contractors who trust Reliable Power and Electricals for their solar material needs.
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                >
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
