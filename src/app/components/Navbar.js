"use client"

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 bg-black p-4 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      <div className="container flex justify-between items-center">
        <img src="/images/logo.png" alt="Logo" className="h-12"/>
        <nav className="flex space-x-4 text-white text-xl">
          <a href="#event" className="hover:text-gray-300">Event</a>
          <a href="#team" className="hover:text-gray-300">Team</a>
          <a href="#magazine" className="hover:text-gray-300">Magazine</a>
          <a href="#contact" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
