import { useEffect, useRef } from "react";
import profile from "../../../../assets/akasImage.jpg";
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
import img16 from "../../../../assets/icon/typescript.png";
import img17 from "../../../../assets/icon/npm.png";
import img18 from "../../../../assets/icon/medium.png";
import img19 from "../../../../assets/icon/redux.png";
import img20 from "../../../../assets/icon/nodejs.jpeg";
import img21 from "../../../../assets/icon/next.webp";

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
      <div className="md:mt-2 lg:mt-6 mt-0">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-8 gap-0 lg:gap-4 ">
        <div data-aos="zoom-in" data-aos-duration="1000" className="card">
          <div className="card-body px-0">
            <a
            href="#about"
            className="flex px-8 xl:py-16 lg:py-20 py-10 flex-col items-center rounded-3xl shadow md:flex-row dark:border-gray-950 bg-[#161616]"
          >
            <img
              className="hidden xl:block lg:hidden md:block object-cover w-48 h-48 rounded-full"
              src={profile}
              alt="Profile"
            />

            <div className="flex flex-col justify-between px-4 leading-normal">
              <h5 className="mb-2 mx-1 tracking-tight text-gray-300">HI, I'm</h5>
              <h5 className="mb-2 text-5xl lg:text-4xl xl:text-4xl font-bold tracking-tight text-white">
                  AKAS DATTA.
              </h5>
              <h5 className="mb-2 font-bold tracking-tight text-white"><span className="autoType" ref={autoTypeRef}></span></h5>
              <p className="mb-3 font-normal text-gray-300">
              based in Feni, Bangladesh. <br />
              <span>I have a strong passion for creating engaging and user-friendly web experiences.</span>
              </p>
              <a href="#contact" className="card-actions my-2">
                <button className="btn btn-outline">Hire Me</button>
              </a>
            </div>
          </a>
          </div>
        </div>


        <div className="card py-0 pb-8 md:pt-0 lg:pt-8 ">

          <div className="card-body bg-[#161616] rounded-3xl" data-aos="zoom-in" data-aos-duration="1200">
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
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img19} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img20} alt="" />
              </div>
              <div>
                <img className="object-cover h-10 w-15 mx-4" src={img21} alt="" />
              </div>
            </Marquee>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <a href="#about" className="card pt-6">
              <div className="card-body bg-[#161616] rounded-3xl">
                <img className="mb-5" src={aboutMe} alt="" />
                <h5 className="card-title text-white">MORE ABOUT ME</h5>
                <p>Credentials</p>
              </div>
            </a>

            <a href="#projects" className="card pt-6">
              <div className="card-body bg-[#161616] rounded-3xl">
                <img className="mb-5 rounded-2xl" src={aboutMe2} alt="" />
                <h5 className="card-title text-white">SHOWCASE</h5>
                <p>Projects</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Banner;
  