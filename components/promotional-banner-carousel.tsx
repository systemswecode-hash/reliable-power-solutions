"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const banners = [
  {
    id: 1,
    title: "Promo_1",
    desktop: "/banner/promo1_desktop.png",
    mobile: "/banner/promo1.png",
  },
  {
    id: 2,
    title: "End of the Year Sale",
    desktop:
      "https://lumprodblobcdn.azureedge.net/Banners/386080bd-9a41-488f-9f0c-fe4134481893_5afae7d4-04b5-42a6-b470-80f74a272f4b_Festive_Offer_banner_Revised_3-3_11zon.jpg",
    mobile:
      "https://lumprodblobcdn.azureedge.net/Banners/d75a2e94-6ba6-4980-8c9b-3915e6821d25_0bfc4696-0172-4719-8dbc-782d8825659a_960x1200-mobile_11zon.jpg",
  },
  {
    id: 3,
    title: "Your Home's Trusted Comfort Solution",
    desktop:
      "https://lumprodblobcdn.azureedge.net/Banners/9a2c3606-f1ef-4c88-a1f8-b8eedfae0c9a_30b069ef-09ea-40d9-a777-57b64c67ff1b_your-home's-trusted-comfort-solution_Combo_Banner_revised_11zon.jpg",
    mobile:
      "https://lumprodblobcdn.azureedge.net/Banners/2aef0a90-07c3-44fe-9683-f2c0943eeb92_your-home's-trusted-comfort-solution_Combo_Banner_Mobile%203.jpg",
  },
  {
    id: 4,
    title: "Luminous Days",
    desktop: "https://lumprodblobcdn.azureedge.net/Banners/b805e7d9-93f1-4daf-8223-ad5ebc45d94c_Dec-Banner.jpg",
    mobile:
      "https://lumprodblobcdn.azureedge.net/Banners/29eb924b-e5d0-4ced-afd8-454faf9fb49f_Under_100kb_Mobile_December_Banner.jpg",
  },
  {
    id: 5,
    title: "Reliable Power Solution with Trolley",
    desktop:
      "https://lumprodblobcdn.azureedge.net/Banners/e7bb0679-0af8-46d1-b79a-ee700e742cd2_Reliable-power-solution_with-trolley_Bammer.png",
    mobile:
      "https://lumprodblobcdn.azureedge.net/Banners/14255c27-4e9f-4637-87fd-a31cfd60c050_Mobile_Reliable-power-solution_with-trolley_Bammer.jpg",
  },
  {
    id: 6,
    title: "Edge Go 1500",
    desktop:
      "https://lumprodblobcdn.azureedge.net/Banners/a0236e09-88cb-45ce-932f-5b9f0f19fae7_10049096-f6a0-41c4-be41-350998191491_1500DesktopBanner_11zon.jpg",
    mobile:
      "https://lumprodblobcdn.azureedge.net/Banners/8f1afa42-8b4a-479a-a76c-5b51e3410429_208d56cf-2cc5-49fe-a42c-e097c3b5f5f5_1500MobileBanner_11zon.jpg",
  },
  {
    id: 7,
    title: "Edge Go P1200",
    desktop:
      "https://lumprodblobcdn.azureedge.net/Banners/14978cc1-62d0-4c16-b39b-805afb8e3ace_1fc14800-42c1-4ecc-9385-ed5bf76bb233_P1200DesktopBanner_11zon.jpg",
    mobile: "https://lumprodblobcdn.azureedge.net/Banners/e02897d2-187f-4f51-8582-78b09f7ccc7b_P1200MobBanner.jpg",
  },
  {
    id: 8,
    title: "Edge Go P1000",
    desktop: "https://lumprodblobcdn.azureedge.net/Banners/6e81d2f3-1055-4732-80a9-1f424e3f957c_P1000DesktopBanner.jpg",
    mobile: "https://lumprodblobcdn.azureedge.net/Banners/2e270d09-1110-4911-bedc-12efa5a659a0_P1000MobBanner.jpg",
  },
  {
    id: 9,
    title: "Edge Go P700",
    desktop: "https://lumprodblobcdn.azureedge.net/Banners/1cca2a69-e6ca-4a6d-98be-6957fc2531e5_P700DeskBanner.jpg",
    mobile: "https://lumprodblobcdn.azureedge.net/Banners/f43242db-e40a-4247-8caa-7ec02305fab2_P700MobBanner.jpg",
  },
]

export function PromotionalBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        goToNext()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div className="relative w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="w-full flex-shrink-0">
              <picture>
                <source media="(max-width: 768px)" srcSet={banner.mobile} />
                <source media="(min-width: 769px)" srcSet={banner.desktop} />
                <img
                  src={banner.desktop || "/placeholder.svg"}
                  alt={banner.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Next banner"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-green-600 w-8" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
