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
    <div id="projects" className="projectSection mt-12 text-gray-300">
      <h1 className="title font-bold text-3xl pt-8 pb-4 px-4">MY LATEST PROJECTS</h1>
      <div className="projects flex gap-10 items-center flex-wrap flex-col-reverse lg:flex-nowrap lg:flex-row my-10" data-aos="zoom-in" data-aos-duration="1000">
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

      <div className="projects flex gap-10 items-center flex-wrap flex-col-reverse lg:flex-nowrap lg:flex-row my-10" data-aos="zoom-in" data-aos-duration="500">
      <div className="projectImgs h-96 overflow-hidden">
          <div onMouseEnter={() => scrollToBottom(1)} onMouseLeave={() => resetScroll(1)} className="image-container h-full overflow-y-hidden" ref={bottomEls[1]}>
            <img className="screen-image object-cover px-4 lg:px-0 md:px-0" src={project3} alt="" />
          </div>
        </div>
        <div className="projectDetails px-8 flex gap-3 flex-col">
          <h3 className="card-title text-3xl mb-2">CampusGo</h3>
          <p className="text-sm font-bold mb-0">
            University Enrollment Portal
          </p>
          <p>
            <b>Technology Used:</b> react.js | tailwind CSS | firebase | express.js | mongodb | dotenv | vercel
          </p>
          <p>
            <b>Description:</b> CampusGo is a University Enrollment Portal website. Users can explore universities, add them to their preferred list, and store the selections in a database sorted by descending order. Additionally, users can view their own added universities and manage them by category.
          </p>
          <p className="flex gap-4 text-3xl mt-3">
            <a href="https://github.com/AkasDatta/CampusGo"><FaGithub></FaGithub></a>
            <a href="https://github.com/AkasDatta/campusgo-server-side"><FaGithub></FaGithub></a>
            <a href="https://campusgo-endgame.web.app/"><FaLink></FaLink></a>
          </p>
        </div>
      </div>

      <div className="projects flex gap-10 items-center flex-wrap lg:flex-nowrap lg:flex-row my-10" data-aos="zoom-in" data-aos-duration="1000">
        <div className="projectDetails px-8 flex gap-3 flex-col">
          <h3 className="card-title text-3xl mb-2">Foodiee _</h3>
          <p className="text-sm font-bold mb-0">
            Recipe exploration website
          </p>
          <p>
          <b>Technology Used:</b> react.js | firebase | react-bootstrap | express.js | mongodb | Vercel
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
        <div className="projectImgs h-96 overflow-hidden">
          <div onMouseEnter={() => scrollToBottom(2)} onMouseLeave={() => resetScroll(2)} className="image-container h-full overflow-y-hidden" ref={bottomEls[2]}>
            <img className="screen-image object-cover px-4" src={project2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;