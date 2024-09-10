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
];

// Add this function
export async function generateStaticParams() {
  return mockShamans.map((shaman) => ({
    id: shaman.id.toString(),
  }))
}

type Params = {
  id: string;
};

export default function ShamanProfile({ params }: { params: Params }) {
  const shaman = mockShamans.find(s => s.id === parseInt(params.id))

  if (!shaman) {
    return <div>Shaman not found</div>
  }

  // Rest of your component code...
}