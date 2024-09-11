import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-primary py-8 text-center mt-auto">
      <div className="container mx-auto flex flex-col items-center text-center space-y-8">
        <div>
          <p className="text-lg font-bold mb-4">Find me on</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/nicsaw"
              aria-label="Github"
              className="hover:text-gray-400"
            >
              <GitHubIcon style={{ fontSize: '40px' }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nicholas-matthew-saw-aa73aa232/"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
            >
              <LinkedInIcon style={{ fontSize: '40px' }} />
            </Link>
            <Link
              href="https://www.instagram.com/nicholas_matthew_saw/"
              aria-label="Instagram"
              className="hover:text-gray-400"
            >
              <InstagramIcon style={{ fontSize: '40px' }} />
            </Link>
          </div>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} Nicholas Matthew Saw
        </div>
      </div>
    </footer>
  );
}
