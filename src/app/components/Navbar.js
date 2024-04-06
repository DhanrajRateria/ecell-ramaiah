import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Image = dynamic(() => import("next/image"));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 bg-black p-4 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" className="h-12" width={100} height={20} />
        </Link>
        <nav className="flex space-x-8 text-white text-xl items-center">
          <Link href="../events" className="hover:text-gray-300 px-4 py-2 rounded-lg border border-grey-400 focus:text-gray-300">Event</Link>
          <Link href="../team" className="hover:text-gray-300 px-4 py-2 rounded-lg border border-grey-400 focus:text-gray-300">Team</Link>
          <a href="../magazine" className="hover:text-gray-300  px-4 py-2 rounded-lg border border-grey-400 focus:text-gray-300">Magazine</a>
          <div className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-grey-400 hover:bg-gray-700 focus:bg-gray-700 transition duration-200">
            <Link href="../contact">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;