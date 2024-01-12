import { useState } from "react";
import CountUp from "react-countup";

import ScrollTrigger from "react-scroll-trigger";

const Skills = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div className="pt-10 md:pt-20 px-8" data-aos="zoom-in" data-aos-duration="1000">
            <h1 className="font-bold text-3xl text-sky-700 ">SKILLS</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={95} duration={10} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">HTML</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={95} duration={10} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">CSS</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={95} duration={10} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">BOOTSTRAP</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={95} duration={10} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">TAILWIND</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={80} duration={8} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">REACT .JS</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={70} duration={7} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">JAVASCRIPT</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={50} duration={6} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">TYPESCRIPT</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={40} duration={5} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">NODE .JS</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={55} duration={6} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">MONGODB</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={30} duration={4} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">NEXT .JS</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={45} duration={5} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">EXPRESS .JS</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={85} duration={9} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">FIGMA</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={35} duration={4} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">REDUX</h5>
                    </div>
                </div>
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl text-center">
                        <p className="text-gray-300">
                            {counterOn && (
                            <CountUp start={0} end={25} duration={4} delay={0} />
                            )}%
                            {!counterOn && "0%"}
                        </p>
                        <h5 className="text-white text-center mb-0 font-bold">JWT</h5>
                    </div>
                </div>
            </div>
            </div>
        </ScrollTrigger>
    );
};

export default Skills;