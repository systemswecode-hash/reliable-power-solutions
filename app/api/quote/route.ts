import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, productName, timestamp } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Google Sheets Web App URL - Replace with your Google Apps Script deployment URL
    const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxYduaOCgpgCqeJXGBRce1tBWKxgS13eVWjGT8QBiqW51WXFaJNpaqD_7TN1xAJ6-ZN/exec"

    if (!GOOGLE_SHEETS_URL) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Send data to Google Sheets via webhook
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp,
        name,
        email,
        phone,
        productName,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to save quote to Google Sheets")
    }

    return NextResponse.json({ message: "Quote request submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Quote submission error:", error)
    return NextResponse.json({ error: "Failed to process quote request" }, { status: 500 })
  }
}
