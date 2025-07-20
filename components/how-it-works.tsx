"use client"

import { Globe, Compass, Eye, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Choose a Destination",
    description: "Browse our collection of stunning locations from around the world",
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "Explore in 360°",
    description: "Immerse yourself in high-quality panoramic views that put you right in the scene",
  },
  {
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: "Look Around",
    description: "Click and drag to look in any direction and feel like you're actually there",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "VR Mode",
    description: "Use a VR headset for the most immersive experience (compatible devices only)",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Experience virtual travel in a few simple steps</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4 bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
