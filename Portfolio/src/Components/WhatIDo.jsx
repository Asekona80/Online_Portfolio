import React, { useState } from 'react';
import { FaReact, FaPython, FaJava, FaDatabase, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiFigma, SiTailwindcss, SiMongodb, SiMysql, SiCss3, SiHtml5, SiNextdotjs, SiExpo } from 'react-icons/si';
import aboutImage from '../assets/abt.png';

const WhatIDo = () => {
  const [showMore, setShowMore] = useState(false);

  const content = "A passionate and driven software developer and application developer with a commitment to creating innovative solutions for real-world challenges. Extensive experience in various programming languages enables the ability to tackle complex problems effectively and contribute meaningfully to projects. With a solid educational background and hands-on experience in software development.";

  const experience = "I have worked on various projects involving web and mobile applications, primarily utilizing React, React Native, and Expo. I also have experience in backend development with Node.js and databases such as MongoDB and MySQL. In addition, I have developed applications using Java, Python, C#, and Flutter with Dart. My front-end skills include proficiency in HTML, CSS, and JavaScript. I have actively participated in Agile development processes, contributing to both front-end and back-end tasks, ensuring efficient collaboration and timely project delivery.";

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/Asekona-Xanywa_CV.pdf'; 
    link.download = 'Asekona-Xanywa_CV.pdf';
    link.click();
  };

  return (
    <section
      id="what-i-do"
      className="w-full py-16 px-4 min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(to right, #8bd1f1, #fff)',
      }}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* WHAT I DO Section */}
        <h1 className="text-3xl font-bold mb-8 px-4 text-center mt-8 text-black underline" id="WhatIDo">
          WHAT I DO
        </h1>

        {/* What I Do and Experience side by side */}
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Image on the left */}
          <div className="md:text-left order-1 flex justify-center">
            <img
              src={aboutImage}
              alt="What I Do"
              className="rounded-lg shadow-lg max-w-full h-auto mb-4"
              style={{ maxWidth: '300px' }} 
            />
          </div>

          {/* What I Do and Experience on the right */}
          <div className="md:text-left order-2">
            <h2 className="text-xl font-normal mb-4 text-black underline">What I Do</h2>
            <p className="text-black mb-4">
              {content}
              {!showMore ? (
                <button
                  onClick={() => setShowMore(true)}
                  className="ml-2 text-blue-700 hover:underline"
                >
                  See More..
                </button>
              ) : (
                <>
                  <p className="text-black mb-4">
                  I Successfully developed and implemented applications that enhance user experiences and optimize functionality. Proficiency in Agile methodology and Scrum allows for collaborative work in dynamic team environments, ensuring projects are delivered efficiently and to the highest standards. Eager to continue growing in the tech industry, dedicated to leveraging skills to drive innovation and contribute to impactful projects.
                  </p>
                  <button
                    onClick={() => setShowMore(false)}
                    className="ml-2 text-blue-700 hover:underline"
                  >
                    See Less...
                  </button>
                </>
              )}
            </p>
            <h2 className="text-xl font-normal mb-4 text-black underline">Experience</h2>
            <p className="text-black mb-4">{experience}</p>
            <button
              onClick={downloadCV}
              className="bg-gradient-to-r from-[#62cff4] to-[#0b85d6] text-white py-2 px-6 rounded-full transition-transform transform hover:scale-105"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Skills Section at the bottom */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-black underline">Skills</h2>
          <div className="flex flex-wrap justify-center">
            <div className="p-2">
              <FaReact size={50} className="text-blue-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <FaPython size={50} className="text-yellow-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <FaJava size={50} className="text-red-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <FaDatabase size={50} className="text-green-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <FaJs size={50} className="text-yellow-400 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <FaNodeJs size={50} className="text-green-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <SiFigma size={50} className="text-pink-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <SiTailwindcss size={50} className="text-teal-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <SiMongodb size={50} className="text-green-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <SiMysql size={50} className="text-blue-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <SiCss3 size={50} className="text-blue-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <SiHtml5 size={50} className="text-orange-500 hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <SiNextdotjs size={50} className="text-black hover:text-indigo-500 transition-colors" />
            </div>
            <div className="p-2">
              <SiExpo size={50} className="text-black hover:text-indigo-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
