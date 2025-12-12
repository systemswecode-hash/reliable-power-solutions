"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface NewsletterSignupProps {
  variant?: "default" | "inline" | "footer"
  title?: string
  description?: string
}

export function NewsletterSignup({
  variant = "default",
  title = "Stay Updated",
  description = "Get the latest solar industry news and product updates delivered to your inbox.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbxYduaOCgpgCqeJXGBRce1tBWKxgS13eVWjGT8QBiqW51WXFaJNpaqD_7TN1xAJ6-ZN/exec"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // send email to Google Sheet
      })

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (variant === "inline") {
    return (
      <div className="bg-green-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-green-100 mb-8">{description}</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900 placeholder-gray-500"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <div>
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Newsletter</h4>
        <p className="text-muted-foreground text-sm mb-4">Get solar industry updates and exclusive offers.</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-sm"
          />
          <Button type="submit" disabled={isLoading} size="sm" className="w-full bg-green-600 hover:bg-green-700">
            {isLoading ? "..." : "Subscribe"}
          </Button>
        </form>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-green-600">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={isLoading} className="w-full bg-green-600 hover:bg-green-700">
            {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
