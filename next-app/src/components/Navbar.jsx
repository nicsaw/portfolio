import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-neutral p-4 flex justify-between items-center mx-auto">
      <Link
        href="/"
        className="text-primary text-lg font-bold relative after:bg-secondary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
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
