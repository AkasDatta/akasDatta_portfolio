import { useEffect, useRef } from "react";
import profile from "../../../../assets/akas.jpg"
import Typed from "typed.js";

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
          <div className="card">
            <a
            href="#"
            className="flex p-12 flex-col items-center rounded-3xl shadow md:flex-row dark:border-gray-950 bg-[#161616]"
          >
            <img
              className="object-cover w-full h-112 md:h-auto md:w-56 rounded-br-3xl rounded-tl-3xl"
              src={profile}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 tracking-tight text-gray-900 dark:text-gray-400">HI, I'm</h5>
              <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-teal-600  dark:text-teal-300">
                  AKAS DATTA.
              </h5>
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"><span className="autoType text-xl" ref={autoTypeRef}></span></h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              based in Feni, Bangladesh. 
              </p>
            </div>
          </a>
          </div>
          </div>
        </div>
        <div className="card p-8">
          <div className="card-body bg-[#161616] rounded-3xl">
            <h5 className="card-title">Special title treatment</h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card py-8">
              <div className="card-body bg-[#161616] rounded-3xl">
                <h5 className="card-title">Special title treatment</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aspernatur dolorum amet quae perferendis corrupti consectetur hic autem aliquid, facilis nobis delectus optio quasi iste in totam, consequuntur minus voluptate!</p>
              </div>
            </div>
            <div className="card py-8">
              <div className="card-body bg-[#161616] rounded-3xl">
                <h5 className="card-title">Special title treatment</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aspernatur dolorum amet quae perferendis corrupti consectetur hic autem aliquid, facilis nobis delectus optio quasi iste in totam, consequuntur minus voluptate!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  };
  
  export default Banner;
  