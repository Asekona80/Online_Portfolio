import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Medi from '../assets/medi-pic.jpg';
import Health from '../assets/healthCare.png';
import journal from '../assets/journal.png';
import chatApp from '../assets/tetris.jpg';
import canvasApp from '../assets/canvasApp.png'; 
import Info from '../assets/Info.png';

import './Work.css';

const Projects = () => {
  const projects = [
    {
      title: 'Machubeni Clinic Website',
      image: Medi,
      github: 'https://github.com/Asekona80/Clinic-WEB',
      live: 'https://axclinicwebsite.netlify.app/',
    },
    {
      title: 'Journal / Diary Web App',
      image: journal,
      github: 'https://github.com/Asekona80/Luhle-Siya',
      live: 'https://luhle-siya.netlify.app/',
    },
    {
      title: 'Kuyasa Health Services',
      image: Health,
      github: 'https://github.com/Asekona80/Kuyasa-Health-services',
      live: 'https://keen-tapioca-29c1f9.netlify.app/',
    },
    {
      title: 'Tetris Game',
      image: chatApp,
      github: 'https://github.com/yourusername/project6',
      live: 'https://asegame-86928a.netlify.app/',
    },
    {
      title: 'License App (Power Apps)',
      image: canvasApp,
      github: '',
      live: '',
    },
    {
      title: 'Inforshare',
      image: Info,
      github: '',
      live: 'https://infosharesa.co.za/',
    },
  ];

  return (
    <section
      id="work"
      className="py-16 px-4 min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 text-gray-900"
    >
      <h2 className="text-4xl font-bold text-center mb-12 underline">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex items-center space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
