import project1 from "../../../../assets/project1.png";
import project2 from "../../../../assets/project2.png";
import project3 from "../../../../assets/project3.png";
import './Projects.css';

const Projects = () => {
  return (
    <div className="container">
        <h1 className="font-bold text-3xl p-8 text-sky-700">MY LATEST PROJECTS</h1>
      <div className="content">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 sm:justify-center gap-4 px-8">
          <div className="pt-0">
            <div className="">
              <div>
                <div className="py-5">
                  <div className="card-body">
                    <p className="card-title text-3xl mb-2">ToyVerse</p>
                    <p className="text-sm font-bold mb-5">
                        Technology Behind the project
                    </p>
                        <p>
                            react.js | firebase | react-bootstrap | aos package | express.js | mongodb | cors | vercel | so many react package 
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
      </div>
    </div>
  );
};

export default Projects;
