import Image from "next/image"

const services = [
  {
    title: "Flight Services",
    description: "Arrival and Departure",
    image: "/1a.jpg",
  },
  {
    title: "Food Services",
    description: "Catering",
    image: "/2a.jpg",
  },
  {
    title: "Travel Services",
    description: "Pick-up/drop",
    image: "/3a.jpg",
  },
]

export default function Services() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">We have the best services available for you!</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="container-box">
              <div className="relative h-48 w-full">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h4 className="font-bold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
