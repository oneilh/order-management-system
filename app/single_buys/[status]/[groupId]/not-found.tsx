import Link from "next/link";
import { HiOutlineSearchCircle } from "react-icons/hi"; // Great for "not found"
import { IoArrowBack } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <div className="flex flex-col items-center max-w-sm text-center">
        {/* Icon with a subtle background pulse */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gray-100 animate-ping opacity-20" />
          <HiOutlineSearchCircle className="text-gray-300 w-24 h-24 relative z-10" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          ID Not Found
        </h2>
        
        <p className="text-gray-500 mb-10 leading-relaxed">
          The Group Buy ID you're looking for doesn't exist or has been archived. 
          Please check the URL and try again.
        </p>

        <Link
          href="/single_buys"
          className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-all active:scale-95"
        >
          <IoArrowBack />
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}