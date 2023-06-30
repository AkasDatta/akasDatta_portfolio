import aboutMe from "../../../../assets/icon/medium.png";
import { HiOutlinePencilAlt } from "react-icons/Hi";
import { BiCamera } from "react-icons/bi";
import { FaLaptopCode, FaConnectdevelop, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const MiddleBanner = () => {
    return (
        <div className="grid grid-cols-12 gap-6 px-8">
            <a href="/blogs" className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="card">
                    <div className="card-body bg-[#161616] rounded-3xl">
                        <img className="mx-auto px-3 object-cover w-full h-0 md:h-auto md:w-40" src={aboutMe} alt="" />
                        <h5 className="text-sm">BLOG</h5>
                        <h1 className="card-title text-white text-2xl">MEDIUM</h1>
                    </div>
                </div>
            </a>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                <div className="card">
                    <div className="card-body bg-[#161616] rounded-3xl">
                        <div className="flex gap-12 justify-center">
                            <div className="card pt-8 text-5xl py-8">
                            <HiOutlinePencilAlt></HiOutlinePencilAlt>
                            </div>
                            <div className="card pt-8 text-5xl">
                            <BiCamera></BiCamera>
                            </div>
                            <div className="card pt-8 text-5xl">
                            <FaLaptopCode></FaLaptopCode>
                            </div>
                            <div className="card pt-8 text-5xl">
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
      <div className="col-span-12 md:col-span-12 lg:col-span-3 pb-7">
    <div className="card ">
        <div className="card-body bg-[#161616] rounded-3xl">
            <div className="rounded-3xl border border-[#262626]">
            <div className="flex gap-4 justify-center items-center">
                <a href="https://www.linkedin.com/in/akasdatta/" target="_blank" className="py-8 text-4xl text-[#0A66C2]">
                    <FaLinkedin></FaLinkedin>
                </a>
                <a href="https://www.instagram.com/stories/_akash_datta/3136387846827874196/" target="_blank" className="py-8 text-4xl text-[#DA4F48]">
                    <FaInstagram></FaInstagram>
                </a>
                <a href="https://twitter.com/DattaAkas" target="_blank" className="py-9 text-4xl text-[#1C9CEA]">
                    <FaTwitter></FaTwitter>
                </a>
            </div>

            </div>
            <div className="mt-6">
                <h5 className="text-sm">STAY WITH ME</h5>
                <h1 className="card-title text-white text-3xl">Profiles</h1>
            </div>
        </div>
    </div>
</div>

        </div>
    );
};

export default MiddleBanner;

