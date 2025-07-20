"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/hooks/use-favorites"
import { Badge } from "@/components/ui/badge"

// All destinations data
const allDestinations = [
  {
    id: "kashmir",
    country: "India",
    place: "Kashmir",
    image: "/t1.jpg",
    continent: "Asia",
    type: "Mountains",
  },
  {
    id: "istanbul",
    country: "Turkey",
    place: "Istanbul",
    image: "/t2.jpg",
    continent: "Europe",
    type: "City",
  },
  {
    id: "paris",
    country: "France",
    place: "Paris",
    image: "/t3.jpg",
    continent: "Europe",
    type: "City",
  },
  {
    id: "bali",
    country: "Indonesia",
    place: "Bali",
    image: "/t4.jpg",
    continent: "Asia",
    type: "Beach",
  },
  {
    id: "dubai",
    country: "United Arab Emirates",
    place: "Dubai",
    image: "/t5.jpg",
    continent: "Asia",
    type: "City",
  },
  {
    id: "geneva",
    country: "Switzerland",
    place: "Geneva",
    image: "/t6.jpg",
    continent: "Europe",
    type: "Mountains",
  },
  {
    id: "port-blair",
    country: "Andaman & Nicobar",
    place: "Port Blair",
    image: "/t7.jpg",
    continent: "Asia",
    type: "Beach",
  },
  {
    id: "rome",
    country: "Italy",
    place: "Rome",
    image: "/t8.jpg",
    continent: "Europe",
    type: "City",
  },
]

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites()
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Filter destinations to only show favorites
  const favoriteDestinations = allDestinations.filter((destination) => favorites.includes(destination.id))

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">
            Your <span className="gradient-text">Favorites</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your collection of saved destinations for easy access
          </p>
        </motion.div>

        {favoriteDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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

                    {/* Remove from favorites button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 rounded-full bg-black/30 hover:bg-black/50 z-10"
                      onClick={(e) => {
                        e.preventDefault()
                        toggleFavorite(destination.id)
                      }}
                    >
                      <Trash2 className="h-5 w-5 text-white" />
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
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex justify-center items-center p-6 bg-muted rounded-full mb-6">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">No favorites yet</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Start exploring destinations and click the heart icon to add them to your favorites
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/destinations">Browse Destinations</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
