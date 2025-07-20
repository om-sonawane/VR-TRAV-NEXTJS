"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/hooks/use-favorites"
import { Badge } from "@/components/ui/badge"

const featuredDestinations = [
  {
    id: "kashmir",
    country: "India",
    place: "Kashmir",
    image: "/t1.jpg",
    featured: true,
    continent: "Asia",
    type: "Mountains",
  },
  {
    id: "paris",
    country: "France",
    place: "Paris",
    image: "/t3.jpg",
    featured: true,
    continent: "Europe",
    type: "City",
  },
  {
    id: "dubai",
    country: "United Arab Emirates",
    place: "Dubai",
    image: "/t5.jpg",
    featured: true,
    continent: "Asia",
    type: "City",
  },
  {
    id: "bali",
    country: "Indonesia",
    place: "Bali",
    image: "/t4.jpg",
    featured: true,
    continent: "Asia",
    type: "Beach",
  },
]

export default function FeaturedDestinations() {
  const { favorites, toggleFavorite } = useFavorites()
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Asia", "Europe", "City", "Beach", "Mountains"]

  const filteredDestinations =
    activeFilter === "All"
      ? featuredDestinations
      : featuredDestinations.filter((dest) => dest.continent === activeFilter || dest.type === activeFilter)

  return (
    <section id="destinations" className="py-20 px-4 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="mb-4">
            Featured <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular virtual travel experiences and immerse yourself in stunning 360° panoramic views
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className="cursor-pointer text-sm py-1.5"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="location-card group h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={`${destination.place}, ${destination.country}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* Favorite button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full bg-black/30 hover:bg-black/50 z-10"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleFavorite(destination.id)
                    }}
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(destination.id) ? "fill-red-500 text-red-500" : "text-white"
                      }`}
                    />
                  </Button>

                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h5 className="font-medium">{destination.country}</h5>
                    <p className="text-xl font-bold">{destination.place}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {destination.continent}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {destination.type}
                    </Badge>
                  </div>
                  <Link href={`/destinations/${destination.id}`} className="btn-primary w-full flex justify-center">
                    Explore in 360°
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
