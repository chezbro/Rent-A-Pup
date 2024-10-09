'use client'

import CustomLink from './components/CustomLink'
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
            <CustomLink href="/" className="flex items-center justify-center group">
              <DogIcon className="h-10 w-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="ml-2 text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Rent-A-Pup</span>
            </CustomLink>
          </div>
          <nav className="hidden md:flex gap-6">
            {[
              { name: "Available Dogs", href: "#available-dogs" },
              { name: "How It Works", href: "#how-it-works" },
              { name: "Pricing", href: "/pricing" },
              { name: "Rent Now", href: "/rent" },
            ].map((item, index) => (
              <div
                key={item.name}
                className={`animate-fade-in opacity-0`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CustomLink href={item.href} className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
                  {item.name}
                </CustomLink>
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
                  Your Daily Dose of Canine Companionship
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Experience the joy of having a furry friend without the long-term commitment. Rent a dog for a day and create unforgettable memories!
                </p>
                {session ? (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <CustomLink
                      href="/dashboard"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out transform hover:-translate-y-1"
                    >
                      Go to Dashboard
                    </CustomLink>
                    <button 
                      onClick={() => signOut()} 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out transform hover:-translate-y-1"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <CustomLink href="/rent" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out transform hover:-translate-y-1">
                      Rent a Pup
                    </CustomLink>
                  </div>
                )}
              </div>
              <div className="animate-fade-in opacity-0 w-full max-w-md" style={{ animationDelay: '300ms' }}>
                <img
                  src="https://placedog.net/800/600?random"
                  alt="Happy dog"
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
                  Why Choose Rent-A-Pup?
                </span>
              </h2>
              
              <div className="grid gap-12 md:grid-cols-3">
                {[
                  { title: "Wide Selection", description: "Choose from a variety of breeds and personalities to find your perfect match.", icon: "🐾" },
                  { title: "Flexible Rentals", description: "Rent for a few hours or a full day, whatever suits your schedule.", icon: "⏰" },
                  { title: "Health Checked", description: "All our dogs are vaccinated, well-cared for, and ready for adventure.", icon: "🏥" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center animate-slide-up opacity-0 bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-5xl mb-6">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
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
                Renting a pup is easy and fun!
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-4">
              {[
                { title: "Browse Dogs", description: "Explore our selection of available dogs.", icon: "🔍" },
                { title: "Choose Your Pup", description: "Select the perfect furry companion for your day.", icon: "🐶" },
                { title: "Book Your Time", description: "Pick a date and duration for your puppy adventure.", icon: "📅" },
                { title: "Enjoy Playtime", description: "Meet your new friend and create lasting memories!", icon: "🎉" },
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

        <section id="available-dogs" className="w-full py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-800 animate-fade-in opacity-0">
                Featured Pups
              </h2>
              <p className="mt-4 text-xl text-gray-600 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
                Meet some of our adorable dogs available for rent
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "Buddy", breed: "Golden Retriever" },
                { name: "Luna", breed: "Husky" },
                { name: "Max", breed: "Labrador" },
              ].map((dog, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg animate-slide-up opacity-0 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={`https://placedog.net/300/300?id=${index + 1}`}
                    alt={dog.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{dog.name}</h3>
                  <p className="text-gray-600 mb-6">{dog.breed}</p>
                  <CustomLink
                    href={`/rent/${index + 1}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out transform hover:-translate-y-1"
                  >
                    Rent {dog.name}
                  </CustomLink>
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
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Our Story</CustomLink>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Team</CustomLink>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Careers</CustomLink>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Dog Rentals</CustomLink>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Puppy Playdates</CustomLink>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Dog Walking</CustomLink>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</CustomLink>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Support</CustomLink>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</CustomLink>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</CustomLink>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</CustomLink>
              <CustomLink href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</CustomLink>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">&copy; 2024 Rent-A-Pup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DogIcon(props: SVGProps) {
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
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5M8 14v.5M16 14v.5M11.25 16.25h1.5L12 17l-.75-.75z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  )
}