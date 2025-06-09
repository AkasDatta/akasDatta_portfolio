import { TfiAngleDoubleRight } from "react-icons/tfi";
import image from "../../../../assets/image.png"

const LastBanner = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8">
                <div className="card pt-0">
                    <div className="card-body bg-[#161616] rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="card py-7 border border-[#262626]">
                                <div className="card-body bg-[#161616] rounded-3xl text-center w-full flex justify-center items-center">
                                    <p className="card-title  mb-2 text-gray-400">+70</p>
                                    <p className="text-sm text-gray-200">TOTAL <br className="hidden md:block" /> PROJECTS</p>
                                </div>
                            </div>
                            <div className="card border py-7 border-[#262626]">
                                <div className="card-body bg-[#161616] rounded-3xl text-center w-full flex justify-center items-center">
                                    <p className="card-title  mb-2 text-gray-400">+26</p>
                                    <p className="text-sm text-gray-200">CLIENTS <br /> WORLDWIDE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card pt-0">
                    <a href="#contact" className="card-body bg-[#161616] rounded-3xl">
                    <img className="w-36 mb-6" src={image} alt="" />
                        <div className="flex justify-between items-end">
                            <div>
                                <h2 className="text-2xl md:text-4xl card-title text-gray-400">Let's works</h2>
                                <h2 className="text-4xl card-title"><span className="text-sky-700">Together</span></h2>
                            </div>
                            <div >
                                <TfiAngleDoubleRight className=" text-3xl  transition-colors text-[#161616]hover:text-[#fff]"></TfiAngleDoubleRight>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LastBanner;