'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'

type SVGProps = React.SVGProps<SVGSVGElement>;


export default function Home() {
  const { data: session } = useSession()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <header className={`px-4 lg:px-6 h-20 flex items-center justify-center sticky top-0 transition-all duration-300 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="w-full max-w-7xl flex justify-between items-center">
          <div className="animate-fade-in opacity-0">
            <Link href="/" className="flex items-center justify-center group">
              <ShovelIcon className="h-10 w-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="ml-2 text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">TripShaman</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            {[
              { name: "Featured Shamans", href: "#featured-shamans" },
              { name: "Find a Shaman", href: "find-shaman" },
              { name: "Become a Shaman", href: "become-shaman" },
              { name: "Book Now", href: "auth/register" },
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
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-600 hover:text-primary-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-30"></div>
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              <div className="flex flex-col justify-center space-y-8 animate-slide-up opacity-0 text-center lg:text-left max-w-xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                  On-Demand Shamanic Healing
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Experience the transformative power of shamanic healing with our on-demand service. Book a session
                  with a certified Shaman and start your journey to wellness.
                </p>
                {session ? (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      href="dashboard"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out transform hover:-translate-y-1"
                    >
                      Go to Dashboard
                    </Link>
                    <button 
                      onClick={() => signOut()} 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out transform hover:-translate-y-1"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="waitlist" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out transform hover:-translate-y-1">
                      Join Waitlist
                    </Link>
                  </div>
                )}
              </div>
              <div className="animate-fade-in opacity-0 w-full max-w-md" style={{ animationDelay: '300ms' }}>
                <img
                  src="https://images.unsplash.com/photo-1543440419-32378906cbc2?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shamanic Healing"
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16 text-gray-900 animate-fade-in opacity-0">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                  Unveiling the Ancient Wisdom
                </span>
                <br />of Shamanic Healing
              </h2>
              
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6 animate-slide-up opacity-0" style={{ animationDelay: '100ms' }}>
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">What is Shamanic Healing?</h3>
                    <p className="text-gray-600">
                      Shamanic healing is a holistic approach that has been used for thousands of years across various cultures worldwide. Rooted in the belief that everything is interconnected, it addresses the spiritual and emotional causes of ailments or disharmony.
                    </p>
                    <p className="text-gray-600 mt-4">
                      Shamans, also known as medicine men or women, act as intermediaries between the physical and spiritual worlds, using various techniques to facilitate healing and personal growth.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Historical Usage and Cultural Significance</h3>
                    <p className="text-gray-600">
                      The practice of shamanism dates back to prehistoric times and has been observed in cultures across the globe, from the indigenous peoples of the Americas to the tribal societies of Siberia and beyond.
                    </p>
                    <ul className="mt-4 space-y-2">
                      {['Healing physical and emotional ailments', 'Guiding individuals through life transitions', 'Maintaining harmony within communities and with nature', 'Preserving cultural wisdom and traditions'].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="h-6 w-6 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Today, modern shamanic practices blend ancient wisdom with contemporary understanding, offering a unique approach to wellness and personal development in our fast-paced world.
                </p>
                <Link
                  href="learn-more"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore Shamanic Practices
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-800 animate-fade-in opacity-0">
                How It Works
              </h2>
              <p className="mt-4 text-xl text-gray-600 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
                Your journey to spiritual awakening, just a click away
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              {[
                { title: "Book a Session", description: "Select the type of shamanic healing you need and book a session.", icon: "📅" },
                { title: "Connect with a Shaman", description: "A Shaman will be with you within 30 minutes to guide your session.", icon: "🔗" },
                { title: "Experience Transformation", description: "Unlock your full potential with shamanic healing.", icon: "✨" },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center animate-slide-up opacity-0 bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="featured-shamans" className="w-full py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-800 animate-fade-in opacity-0">
                Featured Shamans
              </h2>
              <p className="mt-4 text-xl text-gray-600 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
                Wisdom keepers, bridging ancient traditions with modern healing
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "Amara Willow", title: "Shamanic Healer" },
                { name: "Kai Nakamura", title: "Shamanic Practitioner" },
                { name: "Lila Raven", title: "Shamanic Guide" },
              ].map((shaman, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg animate-slide-up opacity-0 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={`https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528`}
                    alt={shaman.name}
                    className="w-32 h-32 rounded-full mb-6 border-4 border-primary-100 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{shaman.name}</h3>
                  <p className="text-gray-600 mb-6">{shaman.title}</p>
                  <Link
                    href={`shaman/${index + 1}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out transform hover:-translate-y-1"
                  >
                    Book Session
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">About Us</h3>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Our Story</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Team</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Shamanic Healing</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Energy Work</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Spiritual Counseling</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Support</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">&copy; 2024 TripShaman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


function ShovelIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
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