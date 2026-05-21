import React, { useState } from 'react';
import { FaReact, FaPython, FaJava, FaDatabase, FaJs, FaNodeJs, FaMicrosoft, FaFlask, FaFigma } from 'react-icons/fa';
import { SiFigma, SiTailwindcss, SiMongodb, SiMysql, SiCss3, SiHtml5, SiNextdotjs, SiExpo } from 'react-icons/si';
import aboutImage from '../assets/abt.png';

const WhatIDo = () => {
  const [showMore, setShowMore] = useState(false);

const content = "I am a Full-Stack and Microsoft Power Platform Developer focused on building practical, real-world solutions. I develop web, mobile, and business applications that improve user experience, automate processes, and solve business problems using modern technologies like React, Node.js, and Power Platform.";
const experience = `
• Built and deployed full-stack web and mobile applications using React, React Native, and Node.js.

• Developed business automation solutions using Microsoft Power Platform (Power Apps, Power Automate, Dataverse) integrated with SharePoint and enterprise workflows.

• Designed and managed databases using MongoDB and MySQL for scalable application performance.

• Built responsive user interfaces using HTML, CSS, JavaScript, and Tailwind CSS focused on usability and performance.

• Worked in Agile teams to deliver real-world solutions aligned with business needs and user requirements.
`;

;  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '../assets/CvofAsekonaXanywa.pdf'; 
    link.download = 'CvofAsekonaXanywa.pdf';
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
            <p className="text-left leading-relaxed text-black mb-4">{experience}</p>
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

  <h2 className="text-2xl font-semibold mb-6 text-black underline">
    Skills
  </h2>

  <div className="flex flex-wrap justify-center gap-4">

    {/* Frontend */}
    <div className="bg-sky-100 shadow-md rounded-xl px-4 py-3 min-w-[160px] border border-sky-200">
      <p className="font-semibold">Frontend</p>
      <p className="text-sm text-gray-700">
        React, JavaScript, HTML, CSS, Tailwind
      </p>
    </div>

    {/* Backend */}
    <div className="bg-sky-100 shadow-md rounded-xl px-4 py-3 min-w-[160px] border border-sky-200">
      <p className="font-semibold">Backend</p>
      <p className="text-sm text-gray-700">
        Node.js, Python, Java
      </p>
    </div>

    {/* Databases */}
    <div className="bg-sky-100 shadow-md rounded-xl px-4 py-3 min-w-[160px] border border-sky-200">
      <p className="font-semibold">Databases</p>
      <p className="text-sm text-gray-700">
        MongoDB, MySQL
      </p>
    </div>

    {/* API Integration (IMPORTANT ADDITION) */}
    <div className="bg-sky-100 shadow-md rounded-xl px-4 py-3 min-w-[160px] border border-sky-200">
      <p className="font-semibold">API Integration</p>
      <p className="text-sm text-gray-700">
        REST APIs, JSON, AJAX, Express APIs
      </p>
    </div>

    {/* Microsoft Power Platform */}
    <div className="bg-sky-100 shadow-md rounded-xl px-4 py-3 min-w-[160px] border border-sky-200">
      <p className="font-semibold">Power Platform</p>
      <p className="text-sm text-gray-700">
        Power Apps, Power Automate, Dataverse
      </p>
    </div>

    {/* Microsoft Power Pages (NEW ADDITION) */}
    <div className="bg-sky-100 shadow-md rounded-xl px-4 py-3 min-w-[160px] border border-sky-200">
      <p className="font-semibold">Power Pages</p>
      <p className="text-sm text-gray-700">
        Portal development, Dataverse integration
      </p>
    </div>

    {/* Mobile */}
    <div className="bg-sky-100 shadow-md rounded-xl px-4 py-3 min-w-[160px] border border-sky-200">
      <p className="font-semibold">Mobile</p>
      <p className="text-sm text-gray-700">
        React Native, Expo
      </p>
    </div>

    {/* Tools */}
    <div className="bg-sky-100 shadow-md rounded-xl px-4 py-3 min-w-[160px] border border-sky-200">
      <p className="font-semibold">Tools</p>
      <p className="text-sm text-gray-700">
        Git, Figma, Agile, Power BI
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  );
};

export default WhatIDo;
