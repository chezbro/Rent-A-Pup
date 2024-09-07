'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
            <p className="mb-4">Welcome, {session.user.name || session.user.email}</p>
            <p className="mb-4">Email: {session.user.email}</p>
            <p className="mb-4">User ID: {session.user.id}</p>
          </div>
        </div>
      </div>
    </div>
  )
}