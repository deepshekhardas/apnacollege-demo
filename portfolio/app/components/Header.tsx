import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-10">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">
          My Portfolio
        </Link>
        <div className="flex gap-4">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#services">Services</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
