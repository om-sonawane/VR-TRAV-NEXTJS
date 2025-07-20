import { NextResponse } from "next/server"

// This would typically fetch from a database
const destinationsData = {
  kashmir: {
    id: "kashmir",
    title: "Kashmir",
    country: "India",
    continent: "Asia",
    type: "Mountains",
    rating: 5,
    description:
      "Heaven on Earth Kashmir is one of the most beautiful travel destinations to visit in North India. Nowhere in India you will behold the scenic landscapes, icy glaciers, pristine lakes and lofty mountains as beautiful as Kashmir. Serenity and Tranquility redefines itself from the ambiance of Kashmir.",
    image: "/t1.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/4e1bb1afc53548aaa7b284dbc37b127b?utm_campaign=embed&utm_source=other&heading=340.34&pitch=11.67&field-of-view=94&size=large&display-plan=false",
    coordinates: { lat: 34.0837, lng: 74.7973 },
    bestTimeToVisit: "April to October",
    temperature: "15°C - 30°C",
    facts: [
      "Kashmir is often called 'Paradise on Earth'",
      "The Dal Lake is one of the most beautiful lakes in India",
      "Gulmarg is a popular skiing destination",
      "The region is famous for its Pashmina shawls",
    ],
    relatedDestinations: ["geneva", "bali"],
    panoramaViews: [
      {
        title: "Dal Lake View",
        url: "https://momento360.com/e/u/4e1bb1afc53548aaa7b284dbc37b127b?utm_campaign=embed&utm_source=other&heading=340.34&pitch=11.67&field-of-view=94&size=large&display-plan=false",
      },
      {
        title: "Gulmarg Snow View",
        url: "https://momento360.com/e/u/4e1bb1afc53548aaa7b284dbc37b127b?utm_campaign=embed&utm_source=other&heading=180&pitch=0&field-of-view=94&size=large&display-plan=false",
      },
    ],
  },
  // Add other destinations here...
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const destination = destinationsData[id as keyof typeof destinationsData]

  if (!destination) {
    return NextResponse.json({ success: false, error: "Destination not found" }, { status: 404 })
  }

  return NextResponse.json({
    success: true,
    data: destination,
  })
}
