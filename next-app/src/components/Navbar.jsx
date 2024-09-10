import UnderlineLink from './UnderlineLink';

export default function NavBar() {
  return (
    <nav className="p-4 flex justify-between items-center mx-auto w-full fixed backdrop-blur-md">
      <UnderlineLink href="/" className="text-lg font-bold">
        Nicholas Matthew Saw
      </UnderlineLink>

      <div className="flex font-bold gap-6">
        <UnderlineLink href="/about">About Me</UnderlineLink>
        <UnderlineLink href="/contact">Contact</UnderlineLink>
      </div>
    </nav>
  );
}
