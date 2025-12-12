import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to streamline your workflow?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Join thousands of teams who have transformed their development process with StreamLine. Start your free
            trial today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="px-8 py-3 text-base">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base bg-transparent">
              Schedule Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
