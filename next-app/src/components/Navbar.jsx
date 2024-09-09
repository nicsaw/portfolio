// src/components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-neutral p-4 flex justify-between items-center mx-auto">
      <Link
        href="/"
        className="text-primary hover:text-secondary text-lg font-bold"
      >
        Nicholas Matthew Saw
      </Link>

      <div className="space-x-4">
        <Link href="/about" className="text-primary hover:text-secondary">
          About Me
        </Link>
        <Link href="/contact" className="text-primary hover:text-secondary">
          Contact
        </Link>
      </div>
    </nav>
  );
}
