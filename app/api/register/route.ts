import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Validate required fields
    const requiredFields = ["name", "email", "phone", "age", "gender", "departure", "return", "package"]
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Validate destinations array
    if (!formData.destinations || !formData.destinations.length) {
      return NextResponse.json({ error: "At least one destination must be selected" }, { status: 400 })
    }

    // Here you would typically save the registration to a database
    // For now, we'll just simulate a successful registration

    return NextResponse.json({ success: true, message: "Registration successful" }, { status: 200 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}
