import aboutMe from "../../../../assets/icon/medium.png";
import { HiOutlinePencilAlt } from "react-icons/Hi";
import { BiCamera } from "react-icons/bi";
import { FaLaptopCode, FaConnectdevelop } from "react-icons/fa";

const MiddleBanner = () => {
    return (
        <div className="grid grid-cols-12 gap-6 px-8">
            <a href="#" className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="card pt-8">
                    <div className="card-body bg-[#161616] rounded-3xl">
                        <img className="mx-auto px-3 object-cover w-full h-0 md:h-auto md:w-40" src={aboutMe} alt="" />
                        <h5 className="text-sm">BLOG</h5>
                        <h1 className="card-title text-white text-2xl">MEDIUM</h1>
                    </div>
                </div>
            </a>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                <div className="card py-8">
                    <div className="card-body bg-[#161616] rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="card pt-8 px-5 text-5xl py-8">
                                <HiOutlinePencilAlt></HiOutlinePencilAlt>
                            </div>
                            <div className="card pt-8 px-5 text-5xl">
                                <BiCamera></BiCamera>
                            </div>
                            <div className="card pt-8 px-5 text-5xl">
                                <FaLaptopCode></FaLaptopCode>
                            </div>
                            <div className="card pt-8 px-5 text-5xl">
                                <FaConnectdevelop></FaConnectdevelop>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h5 className="text-sm">SPECIALIZATION</h5>
                            <h1 className="card-title text-white text-3xl">Services Offering</h1>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="card py-8">
                    <div className="card-body bg-[#161616] rounded-3xl">
                        {/* <img className="mb-5 rounded-2xl" src={aboutMe2} alt="" /> */}
                        <h5 className="card-title">SHOWCASE</h5>
                        <p>Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleBanner;

