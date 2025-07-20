import Image from "next/image"

const packages = [
  {
    title: "Bronze",
    price: "9,999",
    image: "/p1.jpg",
    features: [
      "2 Star Hotel",
      "5 Nights Stay",
      "Free photo Session",
      "Friendly Tour Guide",
      "24/7 Customer Help Center",
    ],
  },
  {
    title: "Silver",
    price: "19,999",
    image: "/p2.jpg",
    features: [
      "3 Star Hotel",
      "7 Nights Stay",
      "Free photo Session",
      "Friendly Tour Guide",
      "24/7 Customer Help Center",
    ],
  },
  {
    title: "Gold",
    price: "29,999",
    image: "/p3.jpg",
    features: [
      "4 Star Hotel",
      "10 Nights Stay",
      "Breakfast and Dinner",
      "Free photo Session",
      "Friendly Tour Guide",
      "24/7 Customer Help Center",
    ],
  },
  {
    title: "Platinum",
    price: "39,999",
    image: "/p4.jpg",
    features: [
      "5 Star Hotel",
      "14 Nights Stay",
      "Breakfast, Lunch and Dinner",
      "Bornfire",
      "Free photo Session",
      "Friendly Tour Guide",
      "24/7 Customer Help Center",
    ],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                <div className="absolute bottom-0 right-0 bg-teal-600 text-white py-1 px-3 font-bold">
                  ₹{pkg.price}/-
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-bold text-xl mb-4">{pkg.title}</h4>
                <ul className="space-y-2 mb-6 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary w-full mt-auto">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
