"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, StarHalf, ArrowLeft, Heart, Share2, MapPin, Calendar, Thermometer } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useFavorites } from "@/hooks/use-favorites"
import { useDestination } from "@/hooks/use-destinations"
import PanoramaViewer from "@/components/panorama-viewer"

type LocationParams = {
  params: {
    id: string
  }
}

export default function LocationPage({ params }: LocationParams) {
  const { id } = params
  const { destination, loading, error } = useDestination(id)
  const { favorites, toggleFavorite } = useFavorites()
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-48 mb-6"></div>
            <div className="h-12 bg-muted rounded w-64 mb-4"></div>
            <div className="h-6 bg-muted rounded w-32 mb-8"></div>
            <div className="h-96 bg-muted rounded-xl mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64 bg-muted rounded"></div>
              <div className="h-64 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Destination not found</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Link href="/destinations" className="text-primary hover:underline">
            View all destinations
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

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/destinations" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all destinations
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">{destination.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{destination.country}</p>
              <div className="flex items-center gap-4">
                <div className="flex">{renderStars(destination.rating)}</div>
                <Badge variant="outline">{destination.continent}</Badge>
                <Badge variant="outline">{destination.type}</Badge>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                onClick={() => toggleFavorite(id)}
              >
                <Heart className={`h-5 w-5 ${favorites.includes(id) ? "fill-red-500 text-red-500" : ""}`} />
                <span className="sr-only">{favorites.includes(id) ? "Remove from favorites" : "Add to favorites"}</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: `${destination.title} - DreamDrift VR`,
                      text: `Check out this amazing 360° view of ${destination.title}!`,
                      url: window.location.href,
                    })
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                    alert("Link copied to clipboard!")
                  }
                }}
              >
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Enhanced 360° Panorama Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <PanoramaViewer src={destination.panoramaUrl} title={destination.title} />
        </motion.div>

        {/* Destination Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Information */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>About {destination.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">{destination.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center p-3 bg-muted/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm font-medium">Best Time</p>
                      <p className="text-xs text-muted-foreground">{destination.bestTimeToVisit}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-muted/50 rounded-lg">
                    <Thermometer className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm font-medium">Temperature</p>
                      <p className="text-xs text-muted-foreground">{destination.temperature}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-muted/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm font-medium">Coordinates</p>
                      <p className="text-xs text-muted-foreground">
                        {destination.coordinates.lat.toFixed(2)}, {destination.coordinates.lng.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">Interesting Facts</h3>
                <ul className="space-y-3">
                  {destination.facts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">{fact}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Destination Image */}
            <Card>
              <CardContent className="p-0">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Related Destinations */}
            {destination.relatedDestinations && destination.relatedDestinations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">You might also like</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {destination.relatedDestinations.map((relatedId) => (
                      <Link
                        key={relatedId}
                        href={`/destinations/${relatedId}`}
                        className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                      >
                        <p className="font-medium capitalize">{relatedId.replace("-", " ")}</p>
                        <p className="text-sm text-muted-foreground">Explore in 360°</p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* VR Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>How to Navigate the 360° Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h4 className="font-medium mb-2">Look Around</h4>
                  <p className="text-sm text-muted-foreground">Click and drag to explore in any direction</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h4 className="font-medium mb-2">Zoom</h4>
                  <p className="text-sm text-muted-foreground">Use scroll wheel or pinch to zoom in/out</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h4 className="font-medium mb-2">Fullscreen</h4>
                  <p className="text-sm text-muted-foreground">Click fullscreen for immersive viewing</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h4 className="font-medium mb-2">VR Mode</h4>
                  <p className="text-sm text-muted-foreground">Use VR headset for ultimate immersion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
