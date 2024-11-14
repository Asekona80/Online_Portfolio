import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    // Show scroll-up arrow when scrolled down 200px
    if (window.scrollY > 200) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="sticky top-0 p-4 z-50 rounded-lg" style={{ background: 'linear-gradient(to right, #C9F6FF, #CCF9FF)' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[#2dbcd8] font-bold text-2xl">A.X</div>

          <div className="hidden md:flex space-x-6">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-[#0080BF] font-bold hover:text-white transition duration-300">Home</a>
            <a href="#what-i-do" onClick={(e) => handleSmoothScroll(e, '#what-i-do')} className="text-[#0080BF] font-bold hover:text-white transition duration-300">What I Do</a>
            <a href="#work" onClick={(e) => handleSmoothScroll(e, '#work')} className="text-[#0080BF] font-bold hover:text-white transition duration-300">Work</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="text-[#0080BF] font-bold hover:text-white transition duration-300">Contact</a>
          </div>

          <button onClick={toggleMenu} className="text-white md:hidden focus:outline-none">
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

        {isOpen && (
          <div className="md:hidden bg-transparent text-center mt-2 space-y-2">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="block text-[#0080BF] font-bold p-2 hover:bg-gray-700 transition duration-300">Home</a>
            <a href="#what-i-do" onClick={(e) => handleSmoothScroll(e, '#what-i-do')} className="block text-[#0080BF] font-bold p-2 hover:bg-gray-700 transition duration-300">What I Do</a>
            <a href="#work" onClick={(e) => handleSmoothScroll(e, '#work')} className="block text-[#0080BF] font-bold hover:bg-gray-700 transition duration-300">Work</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="block text-[#0080BF] font-bold p-2 hover:bg-gray-700 transition duration-300">Contact</a>
          </div>
        )}
      </nav>

      {/* Scroll-Up Arrow */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-2 rounded-full bg-[#2dbcd8] text-white shadow-md hover:bg-[#0080BF] transition duration-300"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 011.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </>
  ); 
};

export default Navbar;
