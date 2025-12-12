import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { LogosCarousel } from "@/components/logos-carousel"
import { Footer } from "@/components/footer"
import { PromotionalPosters } from "@/components/promotional-posters"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PromotionalPosters />
        <LogosCarousel />
      </main>
      <Footer />
    </div>
  )
}
