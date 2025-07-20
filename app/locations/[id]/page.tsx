import Image from "next/image"
import Link from "next/link"
import { Star, StarHalf } from "lucide-react"

// Location data
const locationData = {
  kashmir: {
    title: "Kashmir",
    rating: 5,
    description:
      "Heaven on Earth Kashmir is one of the most beautiful travel destinations to visit in North India. Nowhere in India you will behold the scenic landscapes, icy glaciers, pristine lakes and lofty mountains as beautiful as Kashmir. Serenity and Tranquility redefines itself from the ambiance of Kashmir. Be it summer, Winter or Monsoon, every season has its own charm in Kashmir. The numerous wonders of nature, culture, cuisines and rich history of Kashmir will elevate your travel experience in Incredible India.",
    image: "/t1.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/4e1bb1afc53548aaa7b284dbc37b127b?utm_campaign=embed&utm_source=other&heading=340.34&pitch=11.67&field-of-view=94&size=medium&display-plan=true",
  },
  istanbul: {
    title: "Istanbul",
    rating: 4.5,
    description:
      "Istanbul, that offers unique historical and cultural riches together has hosted many different civilizations with its geography spread over two continents. This unique city which is admired by its charming nature and the attractive atmosphere is also the symbol of dynamic and modern city life. Istanbul has a multicultural texture and a lively atmosphere that melts the past and future in a single pot which provides a sense of universal history at every step.",
    image: "/t2.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/869fc17961af48088d783adc261110d7?utm_campaign=embed&utm_source=other&heading=30.7&pitch=21.2&field-of-view=75&size=medium&display-plan=true",
  },
  paris: {
    title: "Paris",
    rating: 4.5,
    description:
      "Paris is a diverse and sophisticated city that appeals to the wealthy but can also be enjoyed on a budget. In addition to the Eiffel Tower, Paris has countless other gorgeous landmarks and monuments that add to the beauty of the spacious boulevards and their charming cafes. French cuisine is also world famous, and you can find some of the best of it in Paris. It has many stunning sights that showcase impressive architecture and design, and these places have become world-famous for their beauty.",
    image: "/t3.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/6b29f74c624448c79bcba531a2769c34?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  },
  bali: {
    title: "Bali",
    rating: 4.5,
    description:
      "Bali's beauty goes way deeper than its beautiful appearances. Matching Bali's natural wonders are its ever-growing choice of awesome accommodations. From lavish resorts to affordable hostels, developers go all-out to create outstanding, well-equipped and enjoyable places to stay. Private villas can even be rented at unbelievably affordable prices. Many resorts and hotels have splendid swimming and infinity pools, most of which are attractions in themselves.",
    image: "/t4.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/e01490e24eba47968f6991336fb6c41b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  },
  dubai: {
    title: "Dubai",
    rating: 5,
    description:
      "Dubai is an ideal holiday destination for families, with theme parks, beaches, Friday brunches and more to keep everyone happy. The famous Burj Khalifa, the tallest building in the world, is well worth the entrance fee. Burj Al-Arab, often touted as the world's only 7-star hotel, remains underwhelming. Similarly, the Aquaventure Water Park at the Palms Atlantis Hotel is not to be missed. Jumeriah Beach Residence is well established as Dubai's most popular beachfront, and its close proximity to a whole host of restaurants, cafes and shops make it more than worthy of its status.",
    image: "/t5.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/4645730bc1354310851c70253e5e67dc?utm_campaign=embed&utm_source=other&heading=-96.21&pitch=13.74&field-of-view=75&size=medium&display-plan=true",
  },
  geneva: {
    title: "Geneva",
    rating: 3.5,
    description:
      "The charming city of Geneva comes with a plethora of attractions and tremendous natural beauty that makes every traveler fall in love with it. However, because of this overabundance of attractions, it becomes difficult for the backpackers to determine where to go first. Most of them generally miss out on all the best things that this fantastic city has to offer. The capital of Switzerland and a beautiful lakeside city, Geneva is home to many international organisations like the UN.",
    image: "/t6.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/3a00998a7fc24dc593f107667240473b?utm_campaign=embed&utm_source=other&heading=-6.54&pitch=12.68&field-of-view=75&size=medium&display-plan=true",
  },
  "port-blair": {
    title: "Port Blair",
    rating: 4.5,
    description:
      "Port Blair is an alluring destination for tourists as it includes a host of attractive locales. There are shimmering but clean beaches, beaches that defy the ferocity of sea and let tourists swim leisurely, relics of colonial power and oppression, many must-go museums, libraries, coral reefs, and more.",
    image: "/t7.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/8c72ab49a32445b39132e0f2a388ff28?utm_campaign=embed&utm_source=other&heading=90.13&pitch=10.07&field-of-view=65&size=medium&display-plan=true",
  },
  rome: {
    title: "Rome",
    rating: 4,
    description:
      "The capital of one of the most powerful ancient empires in the world, Rome is a fascinating place that has inspired people to visit for millennia. With incredible works of art, a leisurely pace of life and world-renowned cuisine, the Eternal City is worth a visit at least once, though it would take a lifetime to see all it has to offer.",
    image: "/t8.jpg",
    panoramaUrl:
      "https://momento360.com/e/u/77cdb4079a544e6ab8e9143983c1fb8e?utm_campaign=embed&utm_source=other&heading=25.35&pitch=14.31&field-of-view=75&size=medium&display-plan=true",
  },
}

type LocationParams = {
  params: {
    id: keyof typeof locationData
  }
}

export default function LocationPage({ params }: LocationParams) {
  const { id } = params
  const location = locationData[id]

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Location not found</h1>
          <Link href="/#locations" className="text-teal-600 hover:underline">
            View all locations
          </Link>
        </div>
      </div>
    )
  }

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />)
    }

    return stars
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{location.title}</h1>

        <div className="flex items-center mb-6">{renderStars(location.rating)}</div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed mb-8">{location.description}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
                <Image src={location.image || "/placeholder.svg"} alt={location.title} fill className="object-cover" />
              </div>

              <div className="h-64 md:h-96 w-full rounded-lg overflow-hidden">
                <iframe
                  src={location.panoramaUrl}
                  className="w-full h-full border-0"
                  title={`360° view of ${location.title}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link
            href="/#locations"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Back to Locations
          </Link>

          <Link
            href="/register"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Book This Destination
          </Link>
        </div>
      </div>
    </div>
  )
}
