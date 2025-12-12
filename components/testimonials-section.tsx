import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "StreamLine transformed our development process. We're shipping features 3x faster and our team couldn't be happier.",
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      company: "TechFlow",
    },
    {
      quote: "The collaboration features are game-changing. Our remote team feels more connected than ever before.",
      author: "Marcus Rodriguez",
      role: "Lead Developer at InnovateLab",
      company: "InnovateLab",
    },
    {
      quote:
        "Finally, a platform that just works. The deployment speed and reliability have exceeded all our expectations.",
      author: "Emily Watson",
      role: "Engineering Manager at ScaleUp",
      company: "ScaleUp",
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {"See what our customers are saying about StreamLine's impact on their development workflow."}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <blockquote className="text-card-foreground leading-relaxed">{`"${testimonial.quote}"`}</blockquote>
                <div className="mt-6">
                  <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
