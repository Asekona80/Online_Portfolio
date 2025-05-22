import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Medi from '../assets/medi-pic.jpg';
import Health from '../assets/healthCare.png';
import journal from '../assets/journal.png';
import chatApp from '../assets/tetris.jpg';

import './Work.css'; 

const Cube = () => {
  const projects = [
    {
      title: '',
      image: Medi, 
      live: 'axclinicwebsite.netlify.app',
    },
    {
      title: ' ',
      image: Health,
      github: 'https://github.com/Asekona80/Kuyasa-Health-services',
      live: 'https://keen-tapioca-29c1f9.netlify.app/',
    },
    {
      title: '',
      image: chatApp, 
      github: 'https://github.com/yourusername/project3',
      live: 'https://euphonious-starlight-eee065.netlify.app/',
    },
    {
      title: '',
      image: journal, 
      github: 'https://github.com/Asekona80/Luhle-Siya',
      live: 'https://luhle-siya.netlify.app/',
    },
    {
      title: '',
      image: 'path/to/image5.jpg', 
      github: 'https://github.com/your-github-repo',
      live: 'https://asegame-86928a.netlify.app/',
    },
    {
      title: 'Project 6',
      image: './assets.tetris.jpg', 
      github: 'https://github.com/yourusername/project6',
      live: 'https://asegame-86928a.netlify.app/',
    },
  ];

  return (
    <section id="work" className="py-16 px-4 min-h-screen flex flex-col justify-center items-center">
      {/* Add the heading here with anchor link */}
      
      <h2 className= "text-4xl font-bold mb-8 underline">
        <a href="#projects">My Work</a>
      </h2>
      
      <div className="cube">
        <div className="face front">
          <img src={projects[0].image} alt={projects[0].title} />
          <h3>{projects[0].title}</h3>
          <div className="icon-links">
            <a href={projects[0].github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={25}/>
            </a>
            <a href={projects[1].live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={25} />
            </a>
          </div>
        </div>
        <div className="face back">
          <img src={projects[1].image} alt={projects[1].title} />
          <h3>{projects[1].title}</h3>
          <div className="icon-links">
            <a href={projects[1].github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} />
            </a>
            <a href={projects[1].live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={25} />
            </a>
          </div>
        </div>
        <div className="face left">
          <img src={projects[2].image} alt={projects[2].title} />
          <h3>{projects[2].title}</h3>
          <div className="icon-links">
            <a href={projects[2].github} target="_blank" rel="noopener noreferrer">
              <FaGithub  size={25} />
            </a>
            <a href={projects[2].live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={25} />
            </a>
          </div>
        </div>
        <div className="face right">
          <img src={projects[3].image} alt={projects[3].title} />
          <h3>{projects[3].title}</h3>
          <div className="icon-links">
            <a href={projects[3].github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} />
            </a>
            <a href={projects[3].live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={25} />
            </a>
          </div>
        </div>
        <div className="face top">
          <img src={projects[4].image} alt={projects[4].title} />
          <h3>{projects[4].title}</h3>
          <div className="icon-links">
            <a href={projects[4].github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={25}/>
            </a>
            <a href={projects[4].live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={25} />
            </a>
          </div>
        </div>
        <div className="face bottom">
          <img src={projects[5].image} alt={projects[5].title} />
          <h3>{projects[5].title}</h3>
          <div className="icon-links">
            <a href={projects[5].github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} />
            </a>
            <a href={projects[5].live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={25}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cube;
