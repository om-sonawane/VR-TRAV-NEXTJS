"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="mb-4">
              About <span className="gradient-text">DreamDrift VR</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our mission is to make virtual travel accessible to everyone
            </p>
          </motion.div>

          <div className="bg-card rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:shrink-0">
                <div className="relative h-64 md:h-full md:w-64">
                  <Image src="/PFP.jpeg" alt="Developer Photo" fill className="object-cover" />
                </div>
              </div>
              <div className="p-8">
                <div className="text-primary font-semibold text-xl mb-4">Meet the Developer</div>
                <p className="text-muted-foreground mb-4">
                  DreamDrift VR is a virtual travel platform developed by OM SONAWANE using modern web technologies. Our
                  mission is to help people explore the world through immersive 360° virtual experiences.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe that everyone should be able to experience the beauty of our world's most incredible
                  destinations, regardless of physical or financial limitations. Our platform brings these places to
                  life through high-quality panoramic views that make you feel like you're actually there.
                </p>

                <Button asChild className="rounded-full">
                  <Link
                    href="https://www.linkedin.com/in/om-sonawane-23bab11b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect with me!
                  </Link>
                </Button>

                <div className="mt-8">
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/om_sonawane_03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/om-sonawane-23bab11b8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/om-sonawane"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              DreamDrift VR was created with a simple vision: to make travel experiences accessible to everyone. Whether
              you're planning your next adventure, unable to travel due to physical or financial constraints, or simply
              want to explore new places from the comfort of your home, our platform provides an immersive way to
              experience the world's most beautiful destinations.
            </p>

            <h2 className="text-2xl font-bold mb-4">The Technology</h2>
            <p className="text-muted-foreground mb-6">
              We use cutting-edge web technologies to deliver high-quality 360° panoramic views that work across all
              devices. Our platform is optimized for both desktop and mobile browsing, and supports VR headsets for an
              even more immersive experience.
            </p>

            <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground mb-8">
              We're constantly adding new destinations and improving our platform. If you have suggestions for places
              you'd like to see or features you'd like us to add, we'd love to hear from you!
            </p>

            <div className="text-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/destinations">Start Exploring</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
