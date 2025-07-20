import Hero from "@/components/hero"
import FeaturedDestinations from "@/components/featured-destinations"
import ExploreSection from "@/components/explore-section"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedDestinations />
      <HowItWorks />
      <ExploreSection />
      <Testimonials />
      <CTA />
    </div>
  )
}
