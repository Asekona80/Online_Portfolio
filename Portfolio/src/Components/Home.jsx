import React, { useEffect, useState } from 'react';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3, FaFigma, FaMicrosoft, FaFlask } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFirebase, SiMongodb } from "react-icons/si";
import hero from '../assets/hero.png';

const roles = [
  "SOFTWARE DEVELOPER",
  "POWER PLATFORM DEVELOPER",
  "FULL-STACK WEB DEVELOPER"
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
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

          <p className="italic text-xl text-[#0f0f0f]">HI THERE 👋 I AM</p>

          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-2 text-[#0c0c0c] animate-text-slide">
            ASEKONA XANYWA
          </h1>

          {/* Role */}
          <div className="h-[40px] mt-4 overflow-hidden relative">
            <p className="text-2xl md:text-3xl font-semibold text-[#030303]">
              {roles[currentRole]}
            </p>
          </div>

          {/* 🔥 VALUE STATEMENT (NEW - IMPORTANT) */}
          <p className="mt-6 text-lg text-[#111] max-w-xl">
            I build modern web, mobile, and business applications using React, Node.js,
            and Microsoft Power Platform. Focused on delivering real-world business solutions.
          </p>

          {/* 🔥 CTA BUTTONS (VERY IMPORTANT FOR HIRING) */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">

            <a
              href="#work"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              View My Work
            </a>

            <a
              href="/CV/Cv_Of_Asekona_Xanywa.pdf"
              download
              className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              Download CV
            </a>

          </div>

          {/* Icons */}
          <div className="flex justify-center md:justify-start mt-6 space-x-4 animate-icons">
            <AiOutlineGithub size={30} />
            <AiFillLinkedin size={30} />
          </div>

          {/* Tech Stack */}
          <div className="mt-8">
            <p className="font-medium text-xl md:text-2xl mb-3">
              TECH STACK:
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-icon-slide">

              <FaReact size={30} />
              <SiTailwindcss size={30} />
              <FaMicrosoft size={30} />
              <SiMongodb size={30} />
              <SiMysql size={30} />
              <FaPython size={30} />
              <FaJava size={30} />

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