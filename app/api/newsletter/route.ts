import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Here you would typically save the email to a database
    // For now, we'll just simulate a successful subscription

    return NextResponse.json({ success: true, message: "Successfully subscribed to newsletter" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}
