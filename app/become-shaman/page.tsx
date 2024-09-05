// app/become-shaman/page.jsx
import Link from 'next/link'

export default function BecomeShaman() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Become a Shaman</h1>
        <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="speciality" className="block text-gray-700 font-bold mb-2">Speciality</label>
            <input type="text" id="speciality" name="speciality" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">Years of Experience</label>
            <input type="number" id="experience" name="experience" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-6">
            <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">Bio</label>
            <textarea id="bio" name="bio" rows="4" className="w-full px-3 py-2 border rounded-lg" required></textarea>
          </div>
          <button type="submit" className="w-full bg-primary-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-700">
            Apply
          </button>
        </form>
        <div className="mt-8 text-center">
          <Link href="/" className="text-primary-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}