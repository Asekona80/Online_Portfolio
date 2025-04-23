import React, { useEffect, useState } from 'react';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3,FaFigma,FaMicrosoft,FaFlask } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFirebase, SiMongodb } from "react-icons/si";
import hero from '../assets/hero.png';

const roles = [
  "SOFTWARE DEVELOPER",
  "MICROSOFT POWER PLATFORM DEVELOPER",
  "WEB DEVELOPER"
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="text-black h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #C9F6FF, #CCF9FF, #7CE8FF,#CCF9FF , #55D0FF,rgb(5, 171, 221), #0080BF)'
      }}
    >
      <div className="max-w-7xl w-full px-4 mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <p className="italic text-xl text-[#0f0f0f]">HI THERE</p>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-2 text-[#0c0c0c] animate-text-slide">
            I'M ASEKONA XANYWA
          </h1>

          {/* Rotating Titles */}
          <div className="h-[40px] mt-4 overflow-hidden relative">
            <p className="text-2xl md:text-3xl font-semibold text-[#030303] fade-in">
              {roles[currentRole]}
            </p>
          </div>

          {/* Icons */}
          <div className="flex justify-center md:justify-start mt-6 space-x-4 animate-icons">
            <AiOutlineGithub size={30} className="text-[#050505]" />
            <AiFillLinkedin size={30} className="linkedin-icon" />
          </div>

          {/* Tech Stack */}
          <div className="mt-8">
            <p className="font-medium text-xl md:text-2xl text-[#030303] mb-3">TECH STACK:</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-icon-slide">
              <FaPython size={30} className="floating-bounce python-icon[#a55d2c]" />
              <FaJava size={30} className="floating-bounce text-[#462c8b]" />
              <FaReact size={30} className="floating-bounce react-icon" />
              <SiTailwindcss size={30} className="floating-bounce tailwindcss" />
              <FaHtml5 size={30} className="floating-bounce text-[#a55d2c]" />
              <FaCss3 size={30} className="floating-bounce text-[#295179]" />
              <SiMysql size={30} className="floating-bounce text-[#462c8b]" />
              <SiMongodb size={30} className="floating-bounce text-[#3acf35]" />
              <SiFirebase size={30} className="floating-bounce firebase-icon" />
              <FaFigma size={30} className="floating-bounce text-[#462c8b]" />
              <FaMicrosoft size={30} className="floating-bounce text-[#462c8b]" />
              <FaFlask size={30} className="floating-bounce text-[#462c8b]" />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={hero}
            alt="Hero"
            className="h-64 md:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
