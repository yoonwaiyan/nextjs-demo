import Link from 'next/link'

export default function () {
  return (
    <nav className="flex justify-between px-10 py-5 items-center bg-white">
      <h1 className="text-xl text-gray-800 font-bold">Hivekind</h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <Link href="/about" className="font-semibold text-gray-700">About</Link>
          <Link href="/pricing" className="font-semibold text-gray-700">Pricing</Link>
          <Link href="/contact" className="font-semibold text-gray-700">Contact</Link>
        </ul>
      </div>
    </nav>
  );
}
