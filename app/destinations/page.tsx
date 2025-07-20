"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Search, MapPin, Thermometer, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useFavorites } from "@/hooks/use-favorites"
import { useDestinations } from "@/hooks/use-destinations"
import { Card, CardContent } from "@/components/ui/card"

export default function DestinationsPage() {
  const { destinations, loading, error } = useDestinations()
  const { favorites, toggleFavorite } = useFavorites()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Asia", "Europe", "City", "Beach", "Mountains"]

  // Filter destinations based on search query and active filter
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter =
      activeFilter === "All" || destination.continent === activeFilter || destination.type === activeFilter

    return matchesSearch && matchesFilter
  })

  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted h-64 rounded-xl mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Destinations</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="mb-4">
            Explore <span className="gradient-text">360° Destinations</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of immersive virtual travel experiences from around the world
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search destinations..."
              className="pl-9 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className="cursor-pointer text-sm py-1.5 px-4"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={`${destination.title}, ${destination.country}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    {/* Favorite button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 rounded-full bg-black/30 hover:bg-black/50 z-10"
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
                      <h3 className="text-xl font-bold mb-1">{destination.title}</h3>
                      <p className="text-sm opacity-90">{destination.country}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        {destination.continent}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {destination.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{destination.description}</p>

                    <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        <span>Best time: {destination.bestTimeToVisit}</span>
                      </div>
                      <div className="flex items-center">
                        <Thermometer className="h-3 w-3 mr-2" />
                        <span>Temperature: {destination.temperature}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-2" />
                        <span>
                          {destination.coordinates.lat.toFixed(2)}, {destination.coordinates.lng.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Link href={`/destinations/${destination.id}`} className="btn-primary w-full flex justify-center">
                      Experience in 360°
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No destinations found matching your search criteria.</p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("All")
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
