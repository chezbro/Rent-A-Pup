'use client'

import { useState, useEffect } from 'react'
import CustomLink from '../components/CustomLink'

interface Dog {
  id: number
  name: string
  breed: string
  availability: string
}

export default function AvailableDogs() {
  const [dogs, setDogs] = useState<Dog[]>([])

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchDogs = () => {
      const mockDogs: Dog[] = [
        { id: 1, name: "Buddy", breed: "Golden Retriever", availability: "Mon, Wed, Fri" },
        { id: 2, name: "Luna", breed: "Husky", availability: "Tue, Thu, Sat" },
        { id: 3, name: "Max", breed: "Labrador", availability: "Wed, Fri, Sun" },
        { id: 4, name: "Bella", breed: "Poodle", availability: "Mon, Thu, Sat" },
        { id: 5, name: "Charlie", breed: "Beagle", availability: "Tue, Fri, Sun" },
        { id: 6, name: "Lucy", breed: "Dachshund", availability: "Mon, Wed, Sat" },
        { id: 7, name: "Cooper", breed: "German Shepherd", availability: "Tue, Thu, Sun" },
        { id: 8, name: "Daisy", breed: "Corgi", availability: "Wed, Sat, Sun" },
        { id: 9, name: "Rocky", breed: "Bulldog", availability: "Mon, Thu, Fri" },
      ]
      setDogs(mockDogs)
    }

    fetchDogs()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Available Dogs</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {dogs.map((dog) => (
            <div key={dog.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={`https://placedog.net/400/400?id=${dog.id}`}
                  alt={dog.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <CustomLink href={`/rent/${dog.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {dog.name}
                    </CustomLink>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{dog.breed}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">Available: {dog.availability}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}