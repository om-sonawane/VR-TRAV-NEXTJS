"use client"

import { useState, useEffect } from "react"

export interface Destination {
  id: string
  title: string
  country: string
  continent: string
  type: string
  rating: number
  description: string
  image: string
  panoramaUrl: string
  coordinates: { lat: number; lng: number }
  bestTimeToVisit: string
  temperature: string
  facts: string[]
  relatedDestinations: string[]
}

export function useDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/destinations")
        const result = await response.json()

        if (result.success) {
          setDestinations(result.data)
        } else {
          setError("Failed to fetch destinations")
        }
      } catch (err) {
        setError("An error occurred while fetching destinations")
      } finally {
        setLoading(false)
      }
    }

    fetchDestinations()
  }, [])

  return { destinations, loading, error }
}

export function useDestination(id: string) {
  const [destination, setDestination] = useState<Destination | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/destinations/${id}`)
        const result = await response.json()

        if (result.success) {
          setDestination(result.data)
        } else {
          setError("Destination not found")
        }
      } catch (err) {
        setError("An error occurred while fetching destination")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchDestination()
    }
  }, [id])

  return { destination, loading, error }
}
