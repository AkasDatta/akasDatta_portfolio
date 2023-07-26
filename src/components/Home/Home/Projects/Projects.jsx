import { useRef } from "react";
import project1 from "../../../../assets/project1.png";
import project2 from "../../../../assets/project2.png";
import project3 from "../../../../assets/project3.png";
import './Projects.css';
import { FaGithub, FaLink } from 'react-icons/fa';


const Projects = () => {
  const bottomEls = [useRef(null), useRef(null), useRef(null)];
  const scrollDownIntervals = [null, null, null];

  function scrollToBottom(index) {
    if (scrollDownIntervals[index]) {
      clearInterval(scrollDownIntervals[index]);
    }

    const container = bottomEls[index].current;
    const image = container.querySelector('img');
    const distanceToScroll = image.clientHeight - container.clientHeight;

    let scrollStep = 0;
    const scrollInterval = 5; // Adjust this value to control the scrolling speed (smaller value = slower scrolling)

    scrollDownIntervals[index] = setInterval(() => {
      if (scrollStep >= distanceToScroll) {
        clearInterval(scrollDownIntervals[index]);
      } else {
        scrollStep += scrollInterval;
        container.scrollTo(0, scrollStep);
      }
    }, 15); // Adjust this value to control the animation smoothness (smaller value = smoother animation)
  }

  function resetScroll(index) {
    if (scrollDownIntervals[index]) {
      clearInterval(scrollDownIntervals[index]);
    }

    const container = bottomEls[index].current;
    container.scrollTo(0, 0);
  }

  return (
    <div id="projects" className="projectSection mt-12">
      <h1 className="title font-bold text-3xl pb-8 px-4">MY LATEST PROJECTS</h1>

      <div className="projects flex gap-10 items-center flex-wrap flex-col-reverse lg:flex-nowrap lg:flex-row my-10">
        <div className="projectDetails px-8 flex gap-3 flex-col">
          <h3 className="card-title text-3xl mb-2">ToyVerse</h3>
          <p className="text-sm font-bold mb-0">
            Interactive inventory management application
          </p>
          <p>
            <b>Technology Used:</b> react.js | firebase | react-bootstrap | express.js | mongodb | vercel
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
          <div onMouseEnter={() => scrollToBottom(0)} onMouseLeave={() => resetScroll(0)} className="image-container h-full overflow-y-hidden" ref={bottomEls[0]}>
            <img className="screen-image object-cover px-4" src={project1} alt="" />
          </div>
        </div>
      </div>

      <div className="projects flex gap-10 items-center flex-wrap lg:flex-nowrap lg:flex-row my-10">
      <div className="projectImgs h-96 overflow-hidden">
          <div onMouseEnter={() => scrollToBottom(1)} onMouseLeave={() => resetScroll(1)} className="image-container h-full overflow-y-hidden" ref={bottomEls[1]}>
            <img className="screen-image object-cover px-4" src={project2} alt="" />
          </div>
        </div>
        <div className="projectDetails px-8 flex gap-3 flex-col">
          <h3 className="card-title text-3xl mb-2">Foodiee _</h3>
          <p className="text-sm font-bold mb-0">
            Recipe exploration website
          </p>
          <p>
          <b>Technology Used:</b> react.js | firebase | react-bootstrap | express.js | mongodb
          </p>
          <p>
            <b>Description:</b> Foodiee _ is a food-related restaurant website. Where the identity of various chefs and their favourite recipes can be seen by logging in and registering on the website.
          </p>
          <p className="flex gap-4 text-3xl mt-3">
            <a href="https://github.com/AkasDatta/Chef-recipe-hunter-Client"><FaGithub></FaGithub></a>
            <a href="https://github.com/AkasDatta/Chef-recipe-hunter-Server"><FaGithub></FaGithub></a>
            <a href="https://chef-recipe-hunter-1a993.web.app/"><FaLink></FaLink></a>
          </p>
        </div>
        
      </div>

      <div className="projects flex gap-10 items-center flex-wrap flex-col-reverse lg:flex-nowrap lg:flex-row my-10">
        <div className="projectDetails px-8 flex gap-3 flex-col">
          <h3 className="card-title text-3xl mb-2">Chakri-Opportunities</h3>
          <p className="text-sm font-bold mb-0">
            Dynamic Job Portal
          </p>
          <p>
            react.js | react-bootstrap | React Router | Netlify 
          </p>
          <p>
            <b>Description:</b> Chakri-Opportunities is a type of job site that allows you to find and apply for various types of jobs.
          </p>
          <p className="flex gap-4 text-3xl mt-3">
            <a href="https://github.com/AkasDatta/Chakri-Opportunities"><FaGithub></FaGithub></a>
            <a href="https://moonlit-trifle-78401a.netlify.app/"><FaLink></FaLink></a>
          </p>
        </div>
        <div className="projectImgs h-96 overflow-hidden">
          <div onMouseEnter={() => scrollToBottom(2)} onMouseLeave={() => resetScroll(2)} className="image-container h-full overflow-y-hidden" ref={bottomEls[2]}>
            <img className="screen-image object-cover px-4" src={project3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;