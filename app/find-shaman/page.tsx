// app/find-shaman/page.jsx
import Link from 'next/link'

const mockShamans = [
  { id: 1, name: "Amara Willow", speciality: "Shamanic Healer", rating: 4.8 },
  { id: 2, name: "Kai Nakamura", speciality: "Shamanic Practitioner", rating: 4.6 },
  { id: 3, name: "Lila Raven", speciality: "Shamanic Guide", rating: 4.9 },
]

export default function FindShaman() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Find a Shaman</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockShamans.map((shaman) => (
            <div key={shaman.id} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-2">{shaman.name}</h2>
              <p className="text-gray-600 mb-2">{shaman.speciality}</p>
              <p className="text-yellow-500 mb-4">Rating: {shaman.rating}/5</p>
              <Link href={`/shaman/${shaman.id}`} className="bg-primary-600 text-white font-bold py-2 px-4 rounded hover:bg-primary-700">
                View Profile
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-primary-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}