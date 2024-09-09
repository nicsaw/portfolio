// src/components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center mx-auto">
      <Link
        href="/"
        className="text-gray-300 hover:text-white text-lg font-bold"
      >
        Your Name
      </Link>

      <div className="space-x-4">
        <Link href="/about" className="text-gray-300 hover:text-white">
          About Me
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
}
