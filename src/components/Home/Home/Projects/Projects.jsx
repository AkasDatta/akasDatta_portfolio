import project1 from "../../../../assets/project1.png";
import project2 from "../../../../assets/project2.png";
import project3 from "../../../../assets/project3.png";
import './Projects.css';
import { FaGithub, FaLink } from 'react-icons/fa';


const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="font-bold text-3xl px-8 pb-8">MY LATEST PROJECTS</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:justify-center gap-4 px-8">
          <div className="pt-0">
                  <div className="card-body" data-aos="zoom-in" data-aos-duration="1000">
                    <p className="card-title text-3xl mb-2">ToyVerse</p>
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
          </div>

          <div className="screen" data-aos="zoom-in" data-aos-duration="1500">
            <div className="screen-container">
              <img className="screen-image object-cover" src={project1} alt="" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:justify-center gap-4 px-8 pt-8">
        <div className="screen" data-aos="zoom-in" data-aos-duration="1000">
            <div className="screen-container">
              <img className="screen-image object-cover" src={project2} alt="" />
            </div>
          </div>
          <div className="pt-0">
                  <div className="card-body" data-aos="zoom-in" data-aos-duration="1500">
                    <p className="card-title text-3xl mb-2">Foodiee _</p>
                    <p className="text-sm font-bold mb-0">
                        Technology Behind the project
                    </p>
                        <p>
                            react.js | firebase | react-bootstrap | express.js | vercel 
                        </p>
                        <p>
                            <b>Description:</b> Foodiee _ is a captivating recipe exploration website that showcases the culinary prowess of renowned chefs from around the globe. Immerse yourself in a world of gastronomic delight as you discover a treasure trove of exquisite recipes. Enhance the platform by contributing and adding talented chefs, creating a vibrant community passionate about the art of cooking. Delve into this culinary haven and unlock a universe of flavors and culinary inspiration.
                        </p>
                        <p className="flex gap-4 text-3xl mt-3">
                            <a href="https://github.com/AkasDatta/Chef-recipe-hunter-Client"><FaGithub></FaGithub></a>
                            <a href="https://github.com/AkasDatta/Chef-recipe-hunter-Server"><FaGithub></FaGithub></a>
                            <a href="https://chef-recipe-hunter-1a993.web.app/"><FaLink></FaLink></a>
                        </p>
                  </div>
                </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:justify-center gap-4 px-8">
          <div className="pt-0" data-aos="zoom-in" data-aos-duration="1000">
            <div>
              <div>
                <div>
                  <div className="card-body">
                    <p className="card-title text-3xl mb-2">Chakri Opportunities</p>
                    <p className="text-sm font-bold mb-0">
                        Technology Behind the project
                    </p>
                        <p>
                            react.js | react-bootstrap | React Router | React-hot-toast | Recharts 
                        </p>
                        <p>
                            <b>Description:</b> Chakri-Opportunities is a dynamic job portal providing a diverse range of job opportunities, along with personalized features for a seamless job search experience. Explore, apply, and elevate your career with Chakri-Opportunities.
                        </p>
                        <p className="flex gap-4 text-3xl mt-3">
                            <a href="https://github.com/AkasDatta/Chakri-Opportunities"><FaGithub></FaGithub></a>
                            <a href="https://moonlit-trifle-78401a.netlify.app/"><FaLink></FaLink></a>
                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="screen" data-aos="zoom-in" data-aos-duration="1500">
            <div className="screen-container">
              <img className="screen-image object-cover w-100" src={project3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
