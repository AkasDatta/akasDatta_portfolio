import { IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';

const Contact = () => {
    return (
        <div>
            <h5 className="card-title font-bold text-3xl mb-4 px-8">CONTACT INFO</h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4">
            <div className="card pt-6">
              <div className="card-body rounded-3xl">
                <h5 className="card-title">MORE ABOUT ME</h5>
                    <div className="col-span-12 md:col-span-12 lg:col-span-3 pb-7">
                    <div className="card ">
                        <div className="grid grid-cols-5 card-body rounded-3xl">
                            <div className="col-span-1 rounded-3xl flex items-center justify-center">
                                <div className="p-6 rounded-xl  bg-[#161616]">
                                    <IoMailOutline className=" text-4xl"></IoMailOutline>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <h5 className="text-lg">MAIL ME</h5>
                                <p className="font-bold">akasdatta.me@gmail.com</p>
                                <p className="font-bold">012akasdatta@gmail.com</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 card-body rounded-3xl">
                            <div className="col-span-1 rounded-3xl flex items-center justify-center">
                                <div className="p-6 rounded-xl  bg-[#161616]">
                                    <FiPhone className=" text-4xl"></FiPhone>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <h5 className="text-lg mb-4">CONTACT ME</h5>
                                <p className="font-bold">+880 1810-318499</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 card-body rounded-3xl">
                            <div className="col-span-1 rounded-3xl flex items-center justify-center">
                                <div className="p-6 rounded-xl  bg-[#161616]">
                                    <IoLocationOutline className=" text-4xl"></IoLocationOutline>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <h5 className="text-lg">LOCATION</h5>
                                <p className="font-bold">Masterpara, Feni <br /> Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="card pt-6">
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

export default Contact;