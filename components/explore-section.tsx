"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ExploreSection() {
  const features = [
    "High-quality 360° panoramas",
    "Compatible with VR headsets",
    "Works on all devices",
    "No account required",
    "Save your favorite destinations",
    "Completely free to use",
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6">
              Discover the World <span className="gradient-text">Without Leaving Home</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Our immersive 360° panoramas let you explore famous landmarks, breathtaking landscapes, and iconic cities
              from the comfort of your device. Look in any direction, zoom in on details, and feel like you're actually
              there.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="mr-3 bg-primary/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button asChild size="lg" className="rounded-full">
              <Link href="/destinations">Explore All Destinations</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/vr-travel.jpg" alt="Virtual reality travel experience" fill className="object-cover" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>

            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium">VR Compatible</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
