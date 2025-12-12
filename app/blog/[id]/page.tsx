import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// This would typically come from a CMS or database
const getBlogPost = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Solar Panel Efficiency: What Contractors Need to Know in 2024",
    content: `
      <p>The solar industry continues to evolve at a rapid pace, with new technologies and efficiency improvements being introduced regularly. As a contractor, staying informed about these developments is crucial for providing the best solutions to your customers.</p>
      
      <h2>Understanding Efficiency Ratings</h2>
      <p>Solar panel efficiency refers to the percentage of sunlight that a panel can convert into usable electricity. Modern panels typically range from 15% to 22% efficiency, with premium models reaching even higher rates.</p>
      
      <h2>Latest Technology Trends</h2>
      <p>Several key technologies are driving efficiency improvements in 2024:</p>
      <ul>
        <li>PERC (Passivated Emitter and Rear Cell) technology</li>
        <li>Bifacial solar panels</li>
        <li>Half-cell technology</li>
        <li>Advanced anti-reflective coatings</li>
      </ul>
      
      <h2>Impact on Installation</h2>
      <p>Higher efficiency panels mean more power generation in smaller spaces, which is particularly beneficial for residential installations with limited roof space.</p>
    `,
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Technology",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=800&text=Solar+Panel+Efficiency",
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <article className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">{post.title}</h1>
                <div className="flex items-center text-muted-foreground text-sm">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </header>

              {/* Featured Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share & CTA */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Found this helpful?</h3>
                    <p className="text-muted-foreground text-sm">Share it with your network</p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">Contact Our Experts</Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
