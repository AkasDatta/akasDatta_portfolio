import project1 from "../../../../assets/project1.png";
import project2 from "../../../../assets/project2.png";
import project3 from "../../../../assets/project3.png";
import './Projects.css';

const Projects = () => {
  return (
    <div className="container">
        <h1 className="font-bold text-3xl p-8 text-sky-700">MY LATEST PROJECTS</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 sm:justify-center gap-4 p-8 mb-10">
          <div className="pt-0">
            <div className="">
              <div>
                <div className="">
                  <div className="card-body">
                    <p className="card-title text-3xl mb-2">ToyVerse</p>
                    <p className="text-sm font-bold mb-0">
                        Technology Behind the project
                    </p>
                        <p>
                            react.js | firebase | react-bootstrap | aos package | express.js | mongodb | cors | vercel | so many react package 
                        </p>
                        <p>
                            <b>Description:</b> ToyVerse is an interactive inventory management website. Users can explore and add toys by category, view their own added toys, and store them in a database sorted by descending order.
                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="screen">
            <div className="screen-container">
              <img className="screen-image object-cover" src={project1} alt="" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:justify-center gap-4 px-8">
        <div className="screen">
            <div className="screen-container">
              <img className="screen-image object-cover" src={project2} alt="" />
            </div>
          </div>
          <div className="pt-0">
            <div className="">
              <div>
                <div className="">
                  <div className="card-body">
                    <p className="card-title text-3xl mb-2">Foodiee _</p>
                    <p className="text-sm font-bold mb-0">
                        Technology Behind the project
                    </p>
                        <p>
                            react.js | firebase | react-bootstrap | react-icons | react-to-pdf | react-rating  | express.js | cors | vercel | so many react package 
                        </p>
                        <p>
                            <b>Description:</b> Foodiee _ is a captivating recipe exploration website that showcases the culinary prowess of renowned chefs from around the globe. Immerse yourself in a world of gastronomic delight as you discover a treasure trove of exquisite recipes. Enhance the platform by contributing and adding talented chefs, creating a vibrant community passionate about the art of cooking. Delve into this culinary haven and unlock a universe of flavors and culinary inspiration.
                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 sm:justify-center gap-4 p-8 mb-10">
          <div className="pt-0">
            <div className="">
              <div>
                <div className="">
                  <div className="card-body">
                    <p className="card-title text-3xl mb-2">Chakri Opportunities</p>
                    <p className="text-sm font-bold mb-0">
                        Technology Behind the project
                    </p>
                        <p>
                            react.js | react-bootstrap | React Router | React Icons | React-hot-toast | Recharts | so many react package 
                        </p>
                        <p>
                            <b>Description:</b> Chakri-Opportunities is a dynamic job portal providing a diverse range of job opportunities, along with personalized features for a seamless job search experience. Explore, apply, and elevate your career with Chakri-Opportunities.
                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="screen">
            <div className="screen-container">
              <img className="screen-image object-cover w-100" src={project3} alt="" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Projects;
