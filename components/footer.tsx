import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="DreamDrift VR Logo" fill className="object-contain" />
              </div>
              <span className="ml-2 text-xl font-bold gradient-text">DreamDrift VR</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Experience the world through immersive 360° virtual reality panoramas. Explore famous destinations from
              anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/om_sonawane_03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/om-sonawane-23bab11b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/om-sonawane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-muted-foreground hover:text-primary transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-muted-foreground hover:text-primary transition-colors">
                  Favorites
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations/paris" className="text-muted-foreground hover:text-primary transition-colors">
                  Paris, France
                </Link>
              </li>
              <li>
                <Link href="/destinations/dubai" className="text-muted-foreground hover:text-primary transition-colors">
                  Dubai, UAE
                </Link>
              </li>
              <li>
                <Link href="/destinations/bali" className="text-muted-foreground hover:text-primary transition-colors">
                  Bali, Indonesia
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/kashmir"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kashmir, India
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            Copyright © {new Date().getFullYear()} DreamDrift VR All Rights Reserved.
            <br />
            Website developed by: OM SONAWANE
          </p>
        </div>
      </div>
    </footer>
  )
}
