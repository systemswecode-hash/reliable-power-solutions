import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rijo Matthew",
      role: "Authorized Dealer & Sales Manager",
      bio: "Expert in solar systems, inverters, batteries, and water heating solutions. Authorized dealer with specialized knowledge in all product categories.",
      image: "/placeholder.svg?height=300&width=300&text=Rio",
      contact: "r4reliablepowers@gmail.com",
      phone: "+91 94477 80799 / +91 95397 66799",
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
                About Reliable Power and Electricals
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Serving our community since 2005, Reliable Power and Electricals is your trusted local vendor for
                high-quality electrical and solar products. We don’t just supply equipment — we support homeowners,
                contractors, and businesses with reliable materials and honest guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To make electrical and solar solutions accessible and dependable for everyone. We focus on quality
                  products, transparent service, and expert support so your projects run smoothly from start to finish.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe reliable energy shouldn’t be complicated. That’s why we focus on trusted products, fair
                  pricing, and strong customer relationships built on service and integrity.
                </p>
              </div>
              <div className="relative">
                <img src="/ReliableLogo.svg" alt="Solar installation team" className="rounded-lg shadow-lg p-32" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and every relationship we build.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <CardTitle className="text-green-600">Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every product we supply contributes to a cleaner, more sustainable future for generations to come.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle className="text-orange-600">Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We succeed when our contractors succeed. Your growth and profitability are our top priorities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle className="text-blue-600">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in product quality, customer service, and technical expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Expert</h2>
            </div>
            <div className="gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-green-600 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    {member.contact && (
                      <div className="text-xs space-y-1 pt-4 border-t">
                        <p className="text-muted-foreground">
                          <span className="font-semibold">Email:</span> {member.contact}
                        </p>
                        {member.phone && (
                          <p className="text-muted-foreground">
                            <span className="font-semibold">Phone:</span> {member.phone}
                          </p>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
              <p className="text-green-100 text-lg mb-8">
                Join the Reliable Power and Electricals family and experience the difference that true partnership
                makes.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
