import UnderlineLink from './UnderlineLink';

export default function Navbar() {
  return (
    <nav className="bg-neutral p-4 flex justify-between items-center mx-auto">
      <UnderlineLink href="/" className="text-lg font-bold">
        Nicholas Matthew Saw
      </UnderlineLink>

      <div className="space-x-4">
        <UnderlineLink href="/about">About Me</UnderlineLink>
        <UnderlineLink href="/contact">Contact</UnderlineLink>
      </div>
    </nav>
  );
}
