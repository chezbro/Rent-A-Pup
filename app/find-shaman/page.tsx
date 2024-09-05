'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock data for shamans
const mockShamans = [
  { id: 1, name: 'John Doe', speciality: 'Ayahuasca ceremonies', rating: 4.8 },
  { id: 2, name: 'Jane Smith', speciality: 'Energy healing', rating: 4.6 },
  { id: 3, name: 'Bob Johnson', speciality: 'Spiritual counseling', rating: 4.9 },
]

export default function FindShaman() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredShamans, setFilteredShamans] = useState(mockShamans)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchTerm(term)
    const filtered = mockShamans.filter(shaman => 
      shaman.name.toLowerCase().includes(term.toLowerCase()) ||
      shaman.speciality.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredShamans(filtered)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Find a Shaman</h1>
      
      <input
        type="text"
        placeholder="Search by name or speciality"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full max-w-md px-4 py-2 mb-8 border rounded-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredShamans.map(shaman => (
          <div key={shaman.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">{shaman.name}</h2>
            <p className="text-gray-600">{shaman.speciality}</p>
            <p className="text-yellow-500">Rating: {shaman.rating}/5</p>
            <Link href={`/shaman/${shaman.id}`} className="text-blue-500 hover:underline">
                View Profile
            </Link>
          </div>
        ))}
      </div>

      <Link href="/" className="mt-8 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </main>
  )
}