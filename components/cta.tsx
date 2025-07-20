"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore the World?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Start your virtual journey today and discover breathtaking destinations from the comfort of your home
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full text-primary hover:text-primary">
            <Link href="/destinations">Start Exploring Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
