import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white flex flex-col justify-center items-center">
      <h1 className="mt-5 justify-content text-center text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500 animate-bounce">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <div className="flex flex-col space-y-4 items-center w-full max-w-md mx-auto">
        <Link href="/week-2" className="text-xl block py-2 px-4 bg-purple-400 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center w-full">
          Go to Week 2 Page
        </Link>
        <Link href="/week-3" className="text-xl block py-2 px-4 bg-purple-400 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center w-full">
          Go to Week 3 Page
        </Link>
        <Link href="/week-4" className="text-xl block py-2 px-4 bg-purple-400 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center w-full">
          Go to Week 4 Page
        </Link>
        <Link href="/week-5" className="text-xl block py-2 px-4 bg-purple-400 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center w-full">
          Go to Week 5 Page
        </Link>
        <Link href="/week-6" className="text-xl block py-2 px-4 bg-purple-400 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center w-full">
          Go to Week 6 Page
        </Link>
        <Link href="/week-7" className="text-xl block py-2 px-4 bg-purple-400 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center w-full">
          Go to Week 7 Page
        </Link>
        <Link href="/week-8" className="text-xl block py-2 px-4 bg-purple-400 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center w-full">
          Go to Week 8 Page
        </Link>
        <Link href="/week-9" className="text-xl block py-2 px-4 bg-purple-400 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center w-full">
          Go to Week 9 Page
        </Link>
      </div>
    </div>
  );
}