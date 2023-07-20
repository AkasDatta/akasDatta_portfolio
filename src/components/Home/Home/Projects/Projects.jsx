import { useState } from "react";
import project1 from "../../../../assets/project1.png";
import project2 from "../../../../assets/project2.png";
import project3 from "../../../../assets/project3.png";
import './Projects.css';
import { FaGithub, FaLink } from 'react-icons/fa';


const Projects = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);

  const handleMouseEnter = () => {
    setScrollAnimation(true);
  };

  const handleMouseLeave = () => {
    setScrollAnimation(false);
  };

  return (
    <div id="projects" className="projectSection mt-12">
      <h1 className="title font-bold text-3xl pb-8 px-4">MY LATEST PROJECTS</h1>

      <div className="projects flex gap-10 items-center flex-wrap flex-col-reverse lg:flex-nowrap lg:flex-row">
        <div className="projectDetails px-8 flex gap-3 flex-col">
          <h3 className="card-title text-3xl mb-2">ToyVerse</h3>
          <p className="text-sm font-bold mb-0">
            Technology Behind the project
          </p>
          <p>
            react.js | firebase | react-bootstrap | express.js | mongodb | vercel
          </p>
          <p>
            <b>Description:</b> ToyVerse is an interactive inventory management website. Users can explore and add toys by category, view their own added toys, and store them in a database sorted by descending order.
          </p>
          <p className="flex gap-4 text-3xl mt-3">
            <a href="https://github.com/AkasDatta/Toy-marketplace-Client"><FaGithub></FaGithub></a>
            <a href="https://github.com/AkasDatta/Toy-marketplace-Server"><FaGithub></FaGithub></a>
            <a href="https://toy-marketplace-f6b89.web.app/"><FaLink></FaLink></a>
          </p>
        </div>
        <div className="projectImgs h-96 overflow-hidden">
          <div
            className={`image-container h-full overflow-y-hidden ${
              scrollAnimation ? 'scroll-animation' : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img className="screen-image object-cover px-4 " src={project1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Projects;
