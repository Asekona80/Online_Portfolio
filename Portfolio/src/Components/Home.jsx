import React, { useEffect, useState } from 'react';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import hero from '../assets/hero.png';

const Home = () => {
  const [textLoaded, setTextLoaded] = useState([]);
  const [animationDelayed, setAnimationDelayed] = useState(true);

  useEffect(() => {
    const typingDelay = 200;
    const text = [ "APPLICATION DEVELOPER", "JUNIOR SOFTWARE DEVELOPER"];
    let index = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < text[index].length) {
        charIndex++;
        setTextLoaded(prevState => [...prevState.slice(0, index), text[index].slice(0, charIndex)]);
      } else if (index < text.length - 1) {
        index++;
        charIndex = 0;
        setTextLoaded(prevState => [...prevState, ""]);
      } else {
        clearInterval(typingInterval);
        setTextLoaded(prevState => [...prevState, text[index]]);
        setTimeout(() => {
          setAnimationDelayed(true);
        }, 2000);
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (animationDelayed) {
      const iconSlideInterval = setTimeout(() => {
        setAnimationDelayed(false);
      }, 1000);

      return () => clearTimeout(iconSlideInterval);
    }
  }, [animationDelayed]);

  return (
    <section
      id="home"
      className="text-black h-screen"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #C9F6FF, #CCF9FF, #7CE8FF,#CCF9FF , #55D0FF, #00ACDF, #0080BF)' // Updated gradient
      }}
    >
      <div className="max-w-full h-full max-auto justify-between items-center px-4 flex flex-col md:flex-row mx-10">
        <div className="order-2 md:order-1 mt-10">
          <p className="font-italic italic text-xl p-1 text-[#0f0f0f]">HI THERE</p> 
          <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl md:py-6 text-[#0c0c0c] animate-text-slide">I'M ASEKONA XANYWA</h1> {/* Deep Blue */}

          <div className="font-bold text-2xl md:text-3xl sm:text-2xl md:py-6">
            <span className={`inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden ${animationDelayed ? 'animate-text-slide' : ''}`}>
              <ul className="block animate-text-slide text-left leading-tight">
                <li>JUNIOR SOFTWARE DEVELOPER</li>
              </ul>
            </span>
          </div>
          <div className={`flex mt-10 ${animationDelayed ? 'animate-icons' : ''}`}>
            <AiOutlineGithub size={30} className="mx-2 text-[#050505]" /> 
            <AiFillLinkedin size={30} className="mx-2 text-[#eff8f8]" />
          </div>

          <div className="flex mt-10">
            <p className="font-medium mt-5 px-2 text-xl md:text-2xl sm:text-xl text-center md:text-left md:flex md:items-center md:justify-start whitespace-nowrap text-[#030303]">TECH STACK:</p> {/* Deep Blue */}

            <div className="flex mt-5 animate-icon-slide">
              <FaPython size={30} className="mx-2 floating-bounce text-[#7c8f27]" /> 
              <FaJava size={30} className="mx-2 floating-bounce text-[#462c8b]" /> 
              <FaReact size={30} className="mx-2 floating-bounce text-[#95f0e1]" /> 
              
              <SiTailwindcss size={30} className="mx-2 floating-bounce text-[#295179] " /> 
              <FaHtml5 size={30} className="mx-2 floating-bounce text-[#a55d2c] " /> 
              <FaCss3 size={30} className="mx-2 floating-bounce text-[#295179]" /> 
              <SiMysql size={30} className="mx-2 floating-bounce text-[#88e9fa]" /> 
              <SiMongodb  size={30} className='mx-2 floating-bounce text-[#3acf35] '/>
              <SiFirebase size={30} className="mx-2 floating-bounce text-[#ca5b2f]" /> 
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src={hero} alt="Hero Image" className="h-64 md:h-auto md:w-full object-cover mb-4 md:mb-0 float-right md:float-none mr-4 md:mr-0" />
        </div>
      </div>
    </section>
  );
};

export default Home;
