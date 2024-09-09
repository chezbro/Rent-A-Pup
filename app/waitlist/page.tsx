import WaitlistForm from '../components/WaitlistForm';
type SVGProps = React.SVGProps<SVGSVGElement>;


export default function Waitlist() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <ShovelIcon className="mx-auto h-12 w-12 text-primary-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Join the TripShaman Waitlist</h2>
          <p className="mt-2 text-sm text-gray-600">
            Be the first to experience on-demand shamanic healing.
          </p>
        </div>
        <div className="mt-8">
          <WaitlistForm />
        </div>
      </div>
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