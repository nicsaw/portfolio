import Link from 'next/link';

export default function UnderlineLink({ href, className, children }) {
  return (
    <Link
      href={href}
      className={`${className} text-primary relative after:bg-secondary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
    >
      {children}
    </Link>
  );
}
