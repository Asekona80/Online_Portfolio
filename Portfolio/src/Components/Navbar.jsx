import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    target?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setShowScrollUp(scrollTop > 200);
    setIsScrolled(scrollTop > 10); 
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
      <nav
        className={`sticky top-0 z-50 bg-gradient-to-r from-[#C9F6FF] to-[#CCF9FF] transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-[#03254c] font-bold text-3xl tracking-wide">A.X</div>

          <div className="hidden md:flex space-x-8 text-lg font-semibold">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-[#03254c] hover:text-blue transition">Home</a>
            <a href="#what-i-do" onClick={(e) => handleSmoothScroll(e, '#what-i-do')} className="text-[#03254c] hover:text-blue transition">What I Do</a>
            <a href="#work" onClick={(e) => handleSmoothScroll(e, '#work')} className="text-[#03254c] hover:text-blue transition">Work</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="text-[#03254c] hover:text-blue transition">Contact</a>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-[#03254c] focus:outline-none">
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-r from-[#C9F6FF] to-[#CCF9FF] text-center py-4 shadow-lg">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="block py-3 text-xl text-[#0080BF] hover:bg-[#e0f7ff] transition duration-200">Home</a>
            <a href="#what-i-do" onClick={(e) => handleSmoothScroll(e, '#what-i-do')} className="block py-3 text-xl text-[#0080BF] hover:bg-[#e0f7ff] transition duration-200">What I Do</a>
            <a href="#work" onClick={(e) => handleSmoothScroll(e, '#work')} className="block py-3 text-xl text-[#0080BF] hover:bg-[#e0f7ff] transition duration-200">Work</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="block py-3 text-xl text-[#0080BF] hover:bg-[#e0f7ff] transition duration-200">Contact</a>
          </div>
        )}
      </nav>

      {/* Scroll-Up Arrow */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-[#2dbcd8] text-white shadow-lg hover:bg-[#0080BF] transition-opacity duration-300"
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
