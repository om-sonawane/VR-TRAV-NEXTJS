"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote:
      "DreamDrift VR has completely changed how I plan my trips. Being able to explore destinations in 360° before booking gives me so much confidence in my travel decisions.",
    avatar: "/person1.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    quote:
      "As someone with limited mobility, DreamDrift VR allows me to experience places I may never physically visit. The 360° views are incredibly immersive and detailed.",
    avatar: "/person2.jpg",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    location: "London, UK",
    quote:
      "I use DreamDrift VR to reminisce about places I've visited and to scout new destinations. The interface is intuitive and the panoramas are stunning.",
    avatar: "/person3.jpg",
    rating: 4,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from people who have explored the world through our virtual travel experiences
          </p>
        </motion.div>

        <div className="relative bg-background rounded-2xl shadow-lg p-6 md:p-10">
          <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>

          {/* Quote marks */}
          <div className="absolute top-6 left-6 text-6xl leading-none text-primary/20 font-serif">"</div>
          <div className="absolute bottom-6 right-6 text-6xl leading-none text-primary/20 font-serif rotate-180">"</div>

          <div className="relative z-10">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary">
                <Image
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-lg md:text-xl italic mb-6">{testimonials[currentIndex].quote}</p>

              <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={index === currentIndex ? "default" : "outline"}
                size="sm"
                className={`rounded-full w-2 h-2 p-0 min-w-0 ${index === currentIndex ? "bg-primary" : ""}`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
