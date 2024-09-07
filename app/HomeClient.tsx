'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'


export default function HomeClient() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
    <header className="px-4 lg:px-6 h-16 flex items-center justify-center">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div className="animate-fade-in opacity-0">
          <Link href="/" className="flex items-center justify-center">
            <ShovelIcon className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">TripShaman</span>
          </Link>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          {[
            { name: "Home", href: "/" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "Featured Shamans", href: "#featured-shamans" },
            { name: "Find a Shaman", href: "/find-shaman" },
            { name: "Become a Shaman", href: "/become-shaman" },            
          ].map((item, index) => (
            <div
              key={item.name}
              className={`animate-fade-in opacity-0`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={item.href} className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              <div className="flex flex-col justify-center space-y-4 animate-slide-up opacity-0 text-center lg:text-left max-w-xl">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                    On-Demand Shamanic Healing
                  </h1>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    Experience the transformative power of shamanic healing with our on-demand service. Book a session
                    with a certified Shaman and start your journey to wellness.
                  </p>
                  {session ? (
                  <>
                    <p>Welcome, {session.user.name || session.user.email}</p>
                    <button 
                      onClick={() => signOut()} 
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Sign In
                    </Link>
                    <Link href="/auth/register" className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      Register
                    </Link>
                  </>
                )}                  
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/find-shaman"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow-smooth transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-700"
                  >
                    Book a Shaman
                  </Link>
                  <Link
                    href="#learn-more"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-smooth transition-colors hover:bg-gray-100 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="animate-fade-in opacity-0 w-full max-w-md" style={{ animationDelay: '300ms' }}>
                <img
                  src="https://images.unsplash.com/photo-1543440419-32378906cbc2?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="550"
                  height="550"
                  alt="Shamanic Healing"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-smooth"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-primary-800 animate-fade-in opacity-0">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Book a Session", description: "Select the type of shamanic healing you need and book a session." },
                { title: "Connect with a Shaman", description: "A Shaman will be with you within 30 minutes to guide your session." },
                { title: "Experience Transformation", description: "Unlock your full potential with shamanic healing." },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center animate-slide-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 text-3xl font-bold text-primary-600">{index + 1}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="featured-shamans" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-primary-800 animate-fade-in opacity-0">
              Featured Shamans
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Amara Willow", title: "Shamanic Healer" },
                { name: "Kai Nakamura", title: "Shamanic Practitioner" },
                { name: "Lila Raven", title: "Shamanic Guide" },
              ].map((shaman, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-smooth animate-slide-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={`https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528`}
                    width="150"
                    height="150"
                    alt={shaman.name}
                    className="rounded-full mb-4 border-4 border-primary-100"
                  />
                  <h3 className="text-xl font-bold text-gray-800">{shaman.name}</h3>
                  <p className="text-gray-500 mb-4">{shaman.title}</p>
                  <Link
                    href={`/shaman/${index + 1}`}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-smooth transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-700"
                  >
                    Book Session
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">About Us</h3>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Our Story</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Team</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Careers</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Services</h3>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Shamanic Healing</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Energy Work</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Spiritual Counseling</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Contact</h3>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Contact Us</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Support</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">FAQ</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Legal</h3>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Privacy Policy</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Terms of Service</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary-600">Cookie Policy</Link>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-xs text-gray-500">&copy; 2024 TripShaman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ShovelIcon(props: React.SVGProps<SVGSVGElement>) {
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