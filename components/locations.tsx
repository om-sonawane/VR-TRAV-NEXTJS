import Link from "next/link"
import Image from "next/image"

const locations = [
  {
    id: "kashmir",
    country: "India",
    place: "Kashmir",
    image: "/l1.jpg",
  },
  {
    id: "istanbul",
    country: "Turkey",
    place: "Istanbul",
    image: "/l2.jpg",
  },
  {
    id: "paris",
    country: "France",
    place: "Paris",
    image: "/l3.jpg",
  },
  {
    id: "bali",
    country: "Indonesia",
    place: "Bali",
    image: "/l4.jpg",
  },
  {
    id: "dubai",
    country: "United Arab Emirates",
    place: "Dubai",
    image: "/l5.jpg",
  },
  {
    id: "geneva",
    country: "Switzerland",
    place: "Geneva",
    image: "/l6.jpg",
  },
  {
    id: "port-blair",
    country: "Andaman & Nicobar",
    place: "Port Blair",
    image: "/l7.jpg",
  },
  {
    id: "rome",
    country: "Italy",
    place: "Rome",
    image: "/l8.jpg",
  },
]

export default function Locations() {
  return (
    <section id="locations" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Locations</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <Link key={location.id} href={`/locations/${location.id}`} className="location-card group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={`${location.place}, ${location.country}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h5 className="font-medium">{location.country}</h5>
                  <p className="text-xl font-bold">{location.place}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
