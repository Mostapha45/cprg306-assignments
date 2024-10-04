import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-xl text-center font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="text-center block text-blue-500 hover:underline mb-2">
        Go to Week 2 Page
      </Link>
      <Link href="/week-3" className="text-center block text-blue-500 hover:underline mb-2">
        Go to Week 3 Page
      </Link>
      <Link href="/week-4" className="text-center block text-blue-500 hover:underline mb-2">
        Go to Week 4 Page
      </Link>
      <Link href="/week-5" className="text-center block text-blue-500 hover:underline mb-2">
        Go to Week 5 Page
      </Link>
      <Link href="/week-6" className="text-center block text-blue-500 hover:underline mb-2">
        Go to Week 6 Page
      </Link>
      <Link href="/week-7" className="text-center block text-blue-500 hover:underline mb-2">
        Go to Week 7 Page
      </Link>
    </div>
  );
}


