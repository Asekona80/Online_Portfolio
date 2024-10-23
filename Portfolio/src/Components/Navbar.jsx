import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 p-4 z-50" style={{ background: 'linear-gradient(to right, #C9F6FF, #CCF9FF)' }}>
      <div className="container mx-auto border-round flex justify-between items-center">
        {/* Logo or title */}
        <div className="text-[#2dbcd8] font-bold text-2xl">A.X</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-[#0080BF]  font-bold  hover:text-white transition duration-300">Home</a>
          <a href="#what-i-do" className="text-[#0080BF] font-bold  hover:text-white  transition duration-300">What I Do</a>
          <a href="#work" className="text-[#0080BF]   font-bold  hover:text-white  transition duration-300">Work</a>
          <a href="#contact" className="text-[#0080BF]  font-bold  hover:text-white transition duration-300">Contact</a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent text-center mt-2 space-y-2">
          <a href="#home" className="block text-[#0080BF]  font-bold  p-2 hover:bg-gray-700 transition duration-300">Home</a>
          <a href="#what-i-do" className="block text-[#0080BF]   font-bold  p-2 hover:bg-gray-700 transition duration-300">What I Do</a>
          <a href="#work" className="block text-[#0080BF]   font-bold  hover:bg-gray-700 transition duration-300">Work</a>
          <a href="#contact" className="block text-[#0080BF]   font-bold  p-2 hover:bg-gray-700 transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
