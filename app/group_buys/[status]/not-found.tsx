import Link from "next/link";
// Hi = Heroicons, Md = Material Design
import { HiOutlineExclamationCircle } from "react-icons/hi"; 
import { MdOutlineArrowBack } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="mb-6">
        <HiOutlineExclamationCircle size={80} className="text-gray-300 mx-auto" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Content Not Found
      </h2>
      
      <p className="text-gray-500 mb-8 max-w-sm mx-auto">
        The status or ID you are looking for doesn't exist. It may have been moved or deleted.
      </p>

      <Link
        href="/active" 
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <MdOutlineArrowBack />
        Return Home
      </Link>
    </div>
  );
}