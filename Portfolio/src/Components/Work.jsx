import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Work.css';

const Projects = () => {

  // =========================
  // WEB & SOFTWARE PROJECTS
  // =========================
  const webProjects = [
    {
      title: 'Machubeni Clinic Website',
      image: '/Images/medi-pic.jpg',
      github: 'https://github.com/Asekona80/Clinic-WEB',
      live: 'https://axclinicwebsite.netlify.app/',
      tags: ['React', 'JavaScript', 'Healthcare'],
    },

    {
      title: 'Journal / Diary Web App',
      image: '/Images/journal.png',
      github: 'https://github.com/Asekona80/Luhle-Siya',
      live: 'https://luhle-siya.netlify.app/',
      tags: ['React', 'Firebase', 'Diary App'],
    },

    {
      title: 'Kuyasa Health Services',
      image: '/Images/healthCare.png',
      github: 'https://github.com/Asekona80/Kuyasa-Health-services',
      live: 'https://keen-tapioca-29c1f9.netlify.app/',
      tags: ['Healthcare', 'Responsive Design'],
    },

    {
      title: 'Tetris Game',
      image: '/Images/tetris.jpg',
      github: 'https://github.com/yourusername/project6',
      live: 'https://asegame-86928a.netlify.app/',
      tags: ['JavaScript', 'Game Development'],
    },
    {
      title: 'InfoShare Platform',
      image: '/Images/Info.png',
      github: '',
      live: 'https://infosharesa.co.za/',
      tags: [ 'Wordpress' ],      

      description:
        'Business information sharing and workflow management platform.',

      client: true,
    },
  ];

  // =========================
  // POWER PLATFORM PROJECTS
  // =========================
  const powerPlatformProjects = [
    {
      title: 'License Application System',
      image: '/Images/canvasApp.png',
      github: '',
      live: '',
      tags: [
        'Canvas App',
        'Power Apps',
        'Dataverse',
        'Power Automate',
      ],
      description:
        'Enterprise license management system built using Microsoft Power Apps to automate approvals and workflows.',

      client: true,
    },
        {
      title: 'Credit NOte Papeeless System',
      image: '/Images/image.png',
      github: '',
      live: '',
      tags: [
        'Canvas App',
        'Power Apps',
        'Dataverse',
        'Power Automate',
      ],
      description:
        'Paperless credit note processing system, and  Claims Approval on a Mobile App.',

      client: true,
    },
          {
      title: 'Medical Pharmacy System',
      image: '/Images/image copy.png',
      github: '',
      live: '',
      tags: [
        'Canvas App',
        'Power Apps',
        'Dataverse',
        'Power Automate',
      ],
      description:
        'Medical Oharmacy management system built using Microsoft Power Apps to automate the process of communication and storing of data.',

      client: true,
    },

    
  ];

  // =========================
  // POWER BI PROJECTS
  // =========================
  const powerBIProjects = [
    {
      title: 'Credit Note Solution',
      image: '/Images/powerbi1.png',
      github: '',
      live: '/Powerbi/credit-note.pdf',
      tags: ['Power BI', 'Data Analytics', 'Reporting'],
    },

    {
      title: 'Overall Scoring Dashboard',
      image: '/Images/powerbi2.png',
      github: '',
      live: '/Powerbi/Overall.pdf',
      tags: ['Power BI', 'HR Analytics'],
    },

    {
      title: 'Employee Performance Report',
      image: '/Images/powerbi3.png',
      github: '',
      live: '/Powerbi/employee.pdf',
      tags: ['Power BI', 'Performance Tracking'],
    },
  ];

  // =========================
  // REUSABLE CARD COMPONENT
  // =========================
  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover"
        />

        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            {project.client && (
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                Client Project
              </span>
            )}
          </div>

          {project.description && (
            <p className="text-sm text-gray-600 mb-4">
              {project.description}
            </p>
          )}

          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4 mt-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition"
              >
                <FaGithub size={22} />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="work"
      className="py-20 px-4 min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 text-gray-900"
    >
      <h2 className="text-5xl font-bold text-center mb-16 underline">
        My Projects
      </h2>

      {/* ========================= */}
      {/* WEB DEVELOPMENT */}
      {/* ========================= */}
      <div className="max-w-7xl mx-auto mb-20">
        <h3 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Web & Software Development
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderProjects(webProjects)}
        </div>
      </div>

      {/* ========================= */}
      {/* POWER PLATFORM */}
      {/* ========================= */}
      <div className="max-w-7xl mx-auto mb-20">
        <h3 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Microsoft Power Platform
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderProjects(powerPlatformProjects)}
        </div>
      </div>

      {/* ========================= */}
      {/* POWER BI */}
      {/* ========================= */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Power BI & Analytics
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderProjects(powerBIProjects)}
        </div>
      </div>
    </section>
  );
};

export default Projects;