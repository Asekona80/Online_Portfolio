import React from 'react';
import { FaFileDownload, FaDiscord, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import gif from '../assets/contact-gif.gif';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 px-4" style={{ background: '#ffffff' }}>
      <h1 className="text-3xl font-bold mb-8 px-4 text-center">Get in Touch</h1>
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Section - Contact Information */}
        <div className="lg:w-2/4 rounded-lg p-8 mb-16 lg:mb-0 lg:ml-8 text-center lg:text-left shadow-md border border-[#81c6f5] ">
          <p className="text-lx mb-6 text-black">Feel free to connect with me through the following platforms, and contact me by using the email.</p>
          
          <div className="flex justify-center lg:justify-start items-center space-x-6 mt-6">
          
            {/* Discord */}
            <a href="https://discordapp.com/users/asekona_31187" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center cursor-pointer">
              <FaDiscord size={30} className="text-2xl text-[#5865f2]" />
              <span className="mt-2 text-sm font-bold">Discord</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/asekona-xanywa-99b655200/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center cursor-pointer">
              <FaLinkedin size={30} className="text-2xl text-[#0077b5]" />
              <span className="mt-2 text-sm font-bold">LinkedIn</span>
            </a>

            {/* Email */}
            <a href="mailto:asekhonax@gmail.com" className="flex flex-col items-center cursor-pointer">
              <FaEnvelope size={30} className="text-2xl text-[#0c0d0e]" />
              <span className="mt-2 text-sm font-bold">Email Me</span>
            </a>
          </div>
        </div>
        
        {/* Right Section - Image */}
        <div className="lg:w-2/4">
          <img src={gif} alt="Get in Touch" className="w-full lg:h-auto lg:max-h-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
