

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import './Work.css';

const Projects = () => {
  const projects = [
    {
      title: 'Machubeni Clinic Website',
      image: '/Images/medi-pic.jpg',
      github: 'https://github.com/Asekona80/Clinic-WEB',
      live: 'https://axclinicwebsite.netlify.app/',
    },
    {
      title: 'Journal / Diary Web App',
      image: '/Images/journal.png',
      github: 'https://github.com/Asekona80/Luhle-Siya',
      live: 'https://luhle-siya.netlify.app/',
    },
    {
      title: 'Kuyasa Health Services',
      image: '/Images/healthCare.png',
      github: 'https://github.com/Asekona80/Kuyasa-Health-services',
      live: 'https://keen-tapioca-29c1f9.netlify.app/',
    },
    {
      title: 'Tetris Game',
      image: '/Images/tetris.jpg',
      github: 'https://github.com/yourusername/project6',
      live: 'https://asegame-86928a.netlify.app/',
    },

    {
      title: 'License Application System (Power Apps)',
      image: '/Images/canvasApp.png',
      github: '',
      live: '',
      tags: ['Power Apps', 'Dataverse', 'Power Automate', 'Business Solution'],
      description:
        'Enterprise license management system built using Microsoft Power Apps to automate approvals and workflows.',
    },

    {
      title: 'InfoShare Platform',
      image: '/Images/Info.png',
      github: '',
      live: 'https://infosharesa.co.za/',
    },

    {
      title: 'Credit Note Solution (Power BI)',
      image: '/Images/powerbi1.png',
      github: '',
      live: '/Powerbi/credit-note.pdf',
      tags: ['Power BI', 'Data Analytics', 'Reporting'],
    },

    {
      title: 'Overall Scoring Dashboard (Power BI)',
      image: '/Images/powerbi2.png',
      github: '',
      live: '/Powerbi/Overall.pdf',
      tags: ['Power BI', 'HR Analytics'],
    },

    {
      title: 'Employee Performance Report (Power BI)',
      image: '/Images/powerbi3.png',
      github: '',
      live: '/Powerbi/employee.pdf',
      tags: ['Power BI', 'Performance Tracking'],
    },
  ];

  return (
    <section
      id="work"
      className="py-16 px-4 min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 text-gray-900"
    >
      <h2 className="text-4xl font-bold text-center mb-12 underline">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {project.description && (
                <p className="text-sm text-gray-600 mb-2">
                  {project.description}
                </p>
              )}

              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                  >
                    <FaGithub size={22} />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                  >
                    <FaExternalLinkAlt size={22} />
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
