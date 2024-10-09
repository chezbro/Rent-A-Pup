'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
type SVGProps = React.SVGProps<SVGSVGElement>;


export default function WaitlistSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Show success toast
    toast.success('You\'ve successfully joined the waitlist!', {
      duration: 5000,
      position: 'top-center',
    });

    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Toaster />
      <ShovelIcon className="h-16 w-16 text-primary-600 mb-8" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Welcome to the Rent A Pup Waitlist!</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">We're excited to have you on board. We'll notify you as soon as we launch.</p>
      <Link href="/" className="text-primary-600 hover:text-primary-800 transition-colors duration-200">
        Return to Home Page
      </Link>
    </div>
  );
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