"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section className="py-16 px-4 bg-teal-600 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
        <p className="text-lg mb-8">Subscribe to get offers and latest updates every week!</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="px-4 py-3 rounded-full flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-teal-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {isSuccess && (
          <p className="mt-4 text-white bg-teal-700 inline-block py-2 px-4 rounded-full">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  )
}
