import Link from 'next/link'

// Define the type for the mockShamans
type Shaman = {
  id: number;
  name: string;
  speciality: string;
  rating: number;
  bio: string;
  reviews: {
    id: number;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
};

const mockShamans: Shaman[] = [
  {
    id: 1,
    name: "Amara Willow",
    speciality: "Shamanic Healer",
    rating: 4.8,
    bio: "Amara has been practicing shamanic healing for over 15 years, specializing in energy cleansing and soul retrieval.",
    reviews: [
      { id: 1, user: "John D.", rating: 5, comment: "Life-changing experience!", date: "2024-08-15" },
      { id: 2, user: "Sarah M.", rating: 4, comment: "Very insightful session.", date: "2024-08-10" },
    ]
  },
  // Add more mock shamans here...
];

// Define the type for the params prop
type Params = {
  id: string;
};

export default function ShamanProfile({ params }: { params: Params }) {
  const shaman = mockShamans.find(s => s.id === parseInt(params.id))

  if (!shaman) {
    return <div>Shaman not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{shaman.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{shaman.speciality}</p>
          <p className="text-yellow-500 mb-4">Rating: {shaman.rating}/5</p>
          <h2 className="text-2xl font-bold mb-2">About</h2>
          <p className="mb-6">{shaman.bio}</p>
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          {shaman.reviews.map((review) => (
            <div key={review.id} className="mb-4 p-4 bg-gray-100 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{review.user}</span>
                <span className="text-yellow-500">{review.rating}/5</span>
              </div>
              <p className="mb-1">{review.comment}</p>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
          ))}
          <div className="mt-8">
            <Link href="/find-shaman" className="text-primary-600 hover:underline mr-4">Back to Shaman List</Link>
            <Link href="/" className="text-primary-600 hover:underline">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}