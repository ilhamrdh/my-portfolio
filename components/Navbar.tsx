'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ToggleDark from './ToggleDark';

const Navbar = () => {
  const pathname = usePathname();
  const handleNavigation = (url: string) => window.open(url, '_blank');
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="z-50 items-center py-5 fixed w-full left-1/2 -translate-x-1/2 backdrop-blur-lg">
      <div className="container mx-auto flex flex-row justify-center md:justify-between">
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center md:flex-nowrap">
          <Link href="/" className={isActive('/') ? 'text-blue-500 font-bold' : ''}>
            Home
          </Link>
          <Link href="/about" className={isActive('/about') ? 'text-blue-500 font-bold' : ''}>
            About
          </Link>
          <Link href="/experiences" className={isActive('/experiences') ? 'text-blue-500 font-bold' : ''}>
            Experience
          </Link>
          <Link href="/projects" className={isActive('/projects') ? 'text-blue-500 font-bold' : ''}>
            Projects
          </Link>
          <Link href="/contact" className={isActive('/contact') ? 'text-blue-500 font-bold' : ''}>
            Contact
          </Link>
        </div>
        <div className="hidden md:flex flex-row space-x-4">
          <FaGithub className="cursor-pointer" size={28} onClick={() => handleNavigation('https://github.com/ilhamrdh')} />
          <FaLinkedin
            className="cursor-pointer text-blue-600 dark:text-gray-300"
            size={28}
            onClick={() => handleNavigation('https://www.linkedin.com/in/ilhamrdh/')}
          />
          <ToggleDark />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
