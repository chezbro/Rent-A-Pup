'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
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
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-center">
        <div className="w-full max-w-7xl flex justify-between items-center">
          <Link href="/" className="flex items-center justify-center">
            <ShovelIcon className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">TripShaman</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <button
              onClick={() => signOut()}
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              Sign Out
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-primary-800 animate-fade-in opacity-0">
          Welcome, {session.user.name || session.user.email}
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-slide-up opacity-0">
          <DashboardCard title="My Bookings" description="View and manage your upcoming shaman sessions." />
          <DashboardCard title="Find a Shaman" description="Browse our network of experienced shamans and book a new session." />
          <DashboardCard title="My Profile" description="Update your personal information and preferences." />
        </div>
      </main>

      <footer className="w-full py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © 2024 TripShaman. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function DashboardCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-smooth">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href="#"
        className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
      >
        View
      </Link>
    </div>
  )
}

function ShovelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22v-5l5-5 5 5-5 5z" />
      <path d="M9.5 14.5 16 8" />
      <path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" />
    </svg>
  )
}