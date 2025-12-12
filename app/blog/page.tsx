import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Solar Panel Efficiency: What Contractors Need to Know in 2024",
      excerpt:
        "Understanding the latest developments in solar panel technology and how they impact your installations.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400&text=Solar+Panels",
    },
    {
      id: 2,
      title: "Battery Storage Systems: A Complete Guide for Installers",
      excerpt: "Everything you need to know about integrating battery storage into your solar installations.",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Installation",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400&text=Battery+Storage",
    },
    {
      id: 3,
      title: "Navigating Solar Incentives and Tax Credits in 2024",
      excerpt: "Stay updated on the latest federal and state incentives that benefit your customers.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      category: "Policy",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400&text=Tax+Credits",
    },
    {
      id: 4,
      title: "Common Installation Mistakes and How to Avoid Them",
      excerpt: "Learn from industry experts about the most frequent installation errors and prevention strategies.",
      author: "David Kim",
      date: "February 28, 2024",
      category: "Best Practices",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400&text=Installation+Tips",
    },
    {
      id: 5,
      title: "The Future of Solar: Emerging Technologies to Watch",
      excerpt: "Explore cutting-edge solar technologies that will shape the industry in the coming years.",
      author: "Sarah Johnson",
      date: "February 20, 2024",
      category: "Innovation",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400&text=Future+Solar",
    },
    {
      id: 6,
      title: "Customer Communication: Building Trust in Solar Sales",
      excerpt: "Effective strategies for educating customers and building long-term relationships.",
      author: "Emily Rodriguez",
      date: "February 15, 2024",
      category: "Business",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400&text=Customer+Relations",
    },
  ]

  const categories = ["All", "Technology", "Installation", "Policy", "Best Practices", "Innovation", "Business"]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Solar Industry Insights
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Stay informed with the latest trends, technologies, and best practices in solar energy. Expert insights
                to help you grow your business.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-green-600 hover:text-white"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-green-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Never Miss an Update</h2>
              <p className="text-green-100 text-lg mb-8">
                Subscribe to our newsletter and get the latest solar industry insights delivered to your inbox.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
