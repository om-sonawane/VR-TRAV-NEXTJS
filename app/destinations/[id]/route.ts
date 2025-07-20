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
  },
  istanbul: {
    id: "istanbul",
    title: "Istanbul",
    country: "Turkey",
    continent: "Europe",
    type: "City",
    rating: 4.5,
    description:
      "Istanbul offers unique historical and cultural riches together, having hosted many different civilizations with its geography spread over two continents.",
    image: "/t2.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/869fc17961af48088d783adc261110d7?utm_campaign=embed&utm_source=other&heading=30.7&pitch=21.2&field-of-view=75&size=large&display-plan=false",
    coordinates: { lat: 41.0082, lng: 28.9784 },
    bestTimeToVisit: "April to May, September to November",
    temperature: "8°C - 28°C",
    facts: [
      "Istanbul is the only city in the world that straddles two continents",
      "The Grand Bazaar is one of the oldest covered markets in the world",
      "The Hagia Sophia was once the world's largest cathedral",
      "The city has been the capital of three empires",
    ],
    relatedDestinations: ["rome", "paris"],
  },
  paris: {
    id: "paris",
    title: "Paris",
    country: "France",
    continent: "Europe",
    type: "City",
    rating: 4.5,
    description:
      "Paris is a diverse and sophisticated city with countless gorgeous landmarks, monuments, spacious boulevards, and charming cafes.",
    image: "/t3.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/6b29f74c624448c79bcba531a2769c34?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=large&display-plan=false",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    bestTimeToVisit: "June to August, September to October",
    temperature: "3°C - 25°C",
    facts: [
      "The Eiffel Tower was originally intended to be temporary",
      "Paris has over 470 parks and gardens",
      "The Louvre is the world's largest art museum",
      "There are more than 170 museums in Paris",
    ],
    relatedDestinations: ["rome", "geneva"],
  },
  bali: {
    id: "bali",
    title: "Bali",
    country: "Indonesia",
    continent: "Asia",
    type: "Beach",
    rating: 4.5,
    description:
      "Bali's beauty goes deeper than its appearances, with natural wonders and outstanding accommodations from lavish resorts to affordable hostels.",
    image: "/t4.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/e01490e24eba47968f6991336fb6c41b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=large&display-plan=false",
    coordinates: { lat: -8.3405, lng: 115.092 },
    bestTimeToVisit: "April to October",
    temperature: "26°C - 29°C",
    facts: [
      "Bali is known as the 'Island of the Gods'",
      "The island has over 10,000 temples",
      "Balinese people follow a unique form of Hinduism",
      "Rice terraces in Bali are a UNESCO World Heritage Site",
    ],
    relatedDestinations: ["port-blair", "dubai"],
  },
  dubai: {
    id: "dubai",
    title: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    type: "City",
    rating: 5,
    description:
      "Dubai is an ideal destination with theme parks, beaches, and modern architecture. The famous Burj Khalifa is the tallest building in the world.",
    image: "/t5.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/4645730bc1354310851c70253e5e67dc?utm_campaign=embed&utm_source=other&heading=-96.21&pitch=13.74&field-of-view=75&size=large&display-plan=false",
    coordinates: { lat: 25.2048, lng: 55.2708 },
    bestTimeToVisit: "November to March",
    temperature: "20°C - 30°C",
    facts: [
      "The Burj Khalifa is 828 meters tall",
      "Dubai has the world's largest shopping mall by total area",
      "85% of Dubai's population consists of expatriates",
      "Dubai has the world's only 7-star hotel",
    ],
    relatedDestinations: ["istanbul", "bali"],
  },
  geneva: {
    id: "geneva",
    title: "Geneva",
    country: "Switzerland",
    continent: "Europe",
    type: "Mountains",
    rating: 3.5,
    description:
      "Geneva is a charming lakeside city with tremendous natural beauty, surrounded by the Alps and home to many international organizations.",
    image: "/t6.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/3a00998a7fc24dc593f107667240473b?utm_campaign=embed&utm_source=other&heading=-6.54&pitch=12.68&field-of-view=75&size=large&display-plan=false",
    coordinates: { lat: 46.2044, lng: 6.1432 },
    bestTimeToVisit: "June to August",
    temperature: "2°C - 25°C",
    facts: [
      "Geneva hosts the European headquarters of the UN",
      "The Jet d'Eau fountain shoots water 140 meters high",
      "Geneva is surrounded by the Alps and Jura mountains",
      "CERN's Large Hadron Collider is located near Geneva",
    ],
    relatedDestinations: ["kashmir", "paris"],
  },
  "port-blair": {
    id: "port-blair",
    title: "Port Blair",
    country: "Andaman & Nicobar",
    continent: "Asia",
    type: "Beach",
    rating: 4.5,
    description:
      "Port Blair offers pristine beaches, coral reefs, and historical sites including relics of colonial power and the famous Cellular Jail.",
    image: "/t7.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/8c72ab49a32445b39132e0f2a388ff28?utm_campaign=embed&utm_source=other&heading=90.13&pitch=10.07&field-of-view=65&size=large&display-plan=false",
    coordinates: { lat: 11.6234, lng: 92.7265 },
    bestTimeToVisit: "October to May",
    temperature: "23°C - 31°C",
    facts: [
      "Port Blair is the capital of Andaman and Nicobar Islands",
      "The Cellular Jail is a major historical site",
      "Home to some of the most pristine beaches in the world",
      "The indigenous Jarawa tribe lives in parts of the islands",
    ],
    relatedDestinations: ["bali", "dubai"],
  },
  rome: {
    id: "rome",
    title: "Rome",
    country: "Italy",
    continent: "Europe",
    type: "City",
    rating: 4,
    description:
      "Rome, the capital of one of the most powerful ancient empires, offers incredible works of art, leisurely pace of life, and world-renowned cuisine.",
    image: "/t8.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/77cdb4079a544e6ab8e9143983c1fb8e?utm_campaign=embed&utm_source=other&heading=25.35&pitch=14.31&field-of-view=75&size=large&display-plan=false",
    coordinates: { lat: 41.9028, lng: 12.4964 },
    bestTimeToVisit: "April to June, September to October",
    temperature: "8°C - 30°C",
    facts: [
      "Rome was founded in 753 BC",
      "The Colosseum could hold up to 80,000 spectators",
      "Vatican City is the smallest country in the world",
      "€1.5 million is tossed into the Trevi Fountain yearly",
    ],
    relatedDestinations: ["paris", "istanbul"],
  },
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
