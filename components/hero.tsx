"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const destinations = [
  "Paris",
  "Dubai",
  "Bali",
  "Kashmir",
  "Rome",
  "Istanbul",
  "Geneva",
  "Port Blair",
];

export default function Hero() {
  const [currentDestination, setCurrentDestination] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero-bg.mp4"autoPlay loop muted playsInline
          className="object-cover w-full h-full"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-black/50 dark:from-purple-950/80 dark:to-black/70" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Explore The World In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              360°
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl mb-2 max-w-2xl mx-auto">
            Experience breathtaking destinations from around the globe through
            immersive virtual reality panoramas
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-8">
            <span className="text-gray-300">Discover </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              {destinations[currentDestination]}
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full text-base bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            <Link href="/#destinations">Start Exploring</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full text-base border-white text-white bg-transparent hover:bg-white/10"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>

        {/* VR Headset Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-[150px] right-[-50px] md:right-[-100px] opacity-30 pointer-events-none hidden md:block"
        >
          <div className="relative w-[200px] h-[200px] animate-float">
            <Image
              src="/headset.webp"
              alt="VR Headset"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5L12 19M12 19L19 12M12 19L5 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
