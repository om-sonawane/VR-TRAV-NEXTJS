"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    departure: "",
    return: "",
    destinations: [] as string[],
    package: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const destinations = ["Kashmir", "Istanbul", "Paris", "Bali", "Dubai", "Geneva", "Port Blair", "Rome"]

  const packages = ["Bronze", "Silver", "Gold", "Platinum"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement

    if (type === "checkbox") {
      const isChecked = (e.target as HTMLInputElement).checked
      const checkboxValue = value

      setFormData((prev) => {
        if (name === "destinations") {
          const updatedDestinations = isChecked
            ? [...prev.destinations, checkboxValue]
            : prev.destinations.filter((dest) => dest !== checkboxValue)

          return { ...prev, destinations: updatedDestinations }
        }
        return prev
      })
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Registration successful!")
      router.push("/")
    }, 1500)
  }

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">
            Register <span className="text-teal-600">Here</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="1"
                  max="120"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="male" className="ml-2 text-gray-700">
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="female" className="ml-2 text-gray-700">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-1">
                  Departure Date
                </label>
                <input
                  type="datetime-local"
                  id="departure"
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="return" className="block text-sm font-medium text-gray-700 mb-1">
                  Return Date
                </label>
                <input
                  type="datetime-local"
                  id="return"
                  name="return"
                  value={formData.return}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Travel Destinations</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {destinations.map((destination) => (
                  <div key={destination} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`dest-${destination}`}
                      name="destinations"
                      value={destination}
                      checked={formData.destinations.includes(destination)}
                      onChange={handleChange}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor={`dest-${destination}`} className="ml-2 text-gray-700">
                      {destination}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Package</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {packages.map((pkg) => (
                  <div key={pkg} className="flex items-center">
                    <input
                      type="radio"
                      id={`pkg-${pkg}`}
                      name="package"
                      value={pkg}
                      checked={formData.package === pkg}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor={`pkg-${pkg}`} className="ml-2 text-gray-700">
                      {pkg}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="terms" required className="h-4 w-4 text-teal-600 focus:ring-teal-500" />
              <label htmlFor="terms" className="ml-2 text-gray-700">
                I accept the Terms & Conditions
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Processing..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
