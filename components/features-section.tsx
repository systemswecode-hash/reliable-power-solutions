import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      title: "Lightning Fast Deployment",
      description:
        "Deploy your applications in seconds, not minutes. Our optimized infrastructure ensures your code goes live instantly.",
      icon: "⚡",
    },
    {
      title: "Seamless Collaboration",
      description:
        "Work together effortlessly with real-time collaboration tools, shared workspaces, and integrated communication.",
      icon: "🤝",
    },
    {
      title: "Advanced Analytics",
      description:
        "Get deep insights into your application performance with comprehensive analytics and monitoring dashboards.",
      icon: "📊",
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, compliance certifications, and advanced access controls.",
      icon: "🔒",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Powerful features designed to accelerate your development workflow and boost team productivity.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
