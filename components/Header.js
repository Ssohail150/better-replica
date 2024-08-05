import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-900 fixed top-0 left-0 w-full z-50 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl font-bold mx-4">Better</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/mortgage-calculator" className="hover:underline">Mortgage Calculator</a></li>
            <li><a href="/start" className="hover:underline">Start</a></li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <a href="#" className="hover:underline mx-4">Sign in</a>
        </div>
      </div>
    </header>
  );
};

export default Header;