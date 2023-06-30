import { useEffect, useRef } from "react";
import profile from "../../../../assets/akas.jpg"
import Typed from "typed.js";
import Marquee from "react-fast-marquee";
import img1 from "../../../../assets/icon/html5.png";
import img2 from "../../../../assets/icon/css3.png";
import img3 from "../../../../assets/icon/bootstrap.png";
import img4 from "../../../../assets/icon/Tailwind_CSS_Logo.svg.png";
import img5 from "../../../../assets/icon/physics.png";
import img6 from "../../../../assets/icon/code-stable.png";
import img7 from "../../../../assets/icon/netlify.png";
import img8 from "../../../../assets/icon/axios_logo_icon_168545.png";
import img9 from "../../../../assets/icon/bracket-square.png";
import img10 from "../../../../assets/icon/figma.png";
import img11 from "../../../../assets/icon/firebase (1).png";
import img12 from "../../../../assets/icon/logomark-orange@2x.png";
import img13 from "../../../../assets/icon/github-mark-white.png";
import img14 from "../../../../assets/icon/icons8-jwt-480.png";
import img15 from "../../../../assets/icon/javascript.png";
import img16 from "../../../../assets/icon/nodejs.jpeg";
import img17 from "../../../../assets/icon/npm.png";
import img18 from "../../../../assets/icon/medium.png";

import aboutMe from "../../../../assets/Gallery.png";
import aboutMe2 from "../../../../assets/Gallery2.png";

const Banner = () => {
    const autoTypeRef = useRef(null);

    useEffect(() => {
        const options = {
        strings: ["FRONTEND DEVELOPER", "MERN STACK DEVELOPER", "WEB DEVELOPER"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
        };

        const typed = new Typed(autoTypeRef.current, options);

        return () => {
        typed.destroy();
        };
    }, []);


    return (
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <a
            href="#"
            className="flex px-10 pt-5 pb-3 flex-col items-center rounded-3xl shadow md:flex-row dark:border-gray-950 bg-[#161616]"
          >
            <img
              className="object-cover w-full h-112 md:h-auto md:w-56 rounded-br-3xl rounded-tl-3xl"
              src={profile}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 mx-1 tracking-tight text-gray-900 dark:text-gray-400 mt-5">HI, I'm</h5>
              <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-600  dark:text-gray-300">
                  AKAS DATTA.
              </h5>
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"><span className="autoType" ref={autoTypeRef}></span></h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              based in Feni, Bangladesh. <br />
              <span>I have a strong passion for creating engaging and user-friendly web experiences.</span>
              </p>
              <div className="card-actions">
                <button className="btn btn-outline">Hire Me</button>
              </div>
            </div>
          </a>
          </div>
        </div>


        <div className="card p-8">

          <div className="card-body bg-[#161616] rounded-3xl">
            <Marquee>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img1} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img2} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img3} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img4} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img5} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img6} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img7} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img8} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img9} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img10} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img11} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img12} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img13} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img14} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img15} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img16} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img17} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img18} alt="" />
              </div>
            </Marquee>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card pt-6">
              <div className="card-body bg-[#161616] rounded-3xl">
                <img className="mb-5" src={aboutMe} alt="" />
                <h5 className="card-title">MORE ABOUT ME</h5>
                <p>Credentials</p>
              </div>
            </div>

            <div className="card pt-6">
              <div className="card-body bg-[#161616] rounded-3xl">
                <img className="mb-5 rounded-2xl" src={aboutMe2} alt="" />
                <h5 className="card-title">SHOWCASE</h5>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Banner;
  