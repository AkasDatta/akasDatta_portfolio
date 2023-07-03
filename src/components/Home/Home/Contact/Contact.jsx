import { IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import image from "../../../../assets/image.png"
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <h5 className="card-title font-bold text-3xl mb-4 px-8">CONTACT INFO</h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4">
            <div className="card pt-6">
              <div className="card-body rounded-3xl">
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
                    <div className="card pt-0">
                        <div className="card-body bg-[#161616] rounded-3xl">
                            <div className='grid grid-cols-4'>
                                <h2 className="text-4xl card-title col-span-3">Let's work <span className="text-sky-700">Together</span></h2>
                                <img className="object-cover rounded-3xl w-full h-auto md:w-52 col-span-1" src={image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="form-control py-5">
                            <input type="text" placeholder="Name *" className="input input-bordered bg-gradient-to-r from-[#2A2A2A] to-[#191919]" />
                        </div>
                        <div className="form-control pb-5">
                            <input type="email" placeholder="Email *" className="input input-bordered bg-gradient-to-r from-[#2A2A2A] to-[#191919]" />
                        </div>
                        <div>
                            <textarea
                            className="w-full rounded-lg input-bordered bg-gradient-to-r from-[#2A2A2A] to-[#191919] p-4"
                            placeholder="Your Message *"
                            rows="4"
                            id="message"
                            ></textarea>
                        </div>
                        <div className="form-control pt-3">
                            <button className="btn btn-active">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Contact;