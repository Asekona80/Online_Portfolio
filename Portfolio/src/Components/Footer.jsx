import React from 'react';
import {  FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#62cff4] text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-2 space-x-4">
          <a href="https://www.linkedin.com/in/asekona-xanywa-99b655200/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#011F4B] transition duration-300">
            <FaLinkedinIn className="mr-1" /> LinkedIn
          </a>
          <a href="https://github.com/Asekona80?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#011F4B] transition duration-300">
            <FaGithub className="mr-1" /> GitHub
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Asekona Xanywa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
