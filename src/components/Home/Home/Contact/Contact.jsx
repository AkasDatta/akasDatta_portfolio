import { IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import image from "../../../../assets/image1.png";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_o7lfkbd', 'template_gbflqkb', form.current, '65vLdtkuy4QrNgtY0')
    //   'YOUR_SERVICE_ID', 'template_gbflqkb', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Message sending failed. Please try again later.");
        });
    };
  
    return (
        <div id='contact' className='mt-12'>
            <h5 className="card-title font-bold text-3xl mb-4 px-6 pt-4 md:p-8 lg:p-8 text-sky-700">CONTACT INFO</h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4">
            <div className="card pt-0 md:pt-6 lg:pt-6" data-aos="zoom-in" data-aos-duration="1000">
              <div className="card-body rounded-3xl">
                    <div className="col-span-12 md:col-span-12 lg:col-span-3 pb-3 md:pb-7 lg:pb-7">
                    <div className="card ">
                        <div className="grid grid-cols-5  rounded-3xl">
                            <div className="col-span-1 rounded-3xl flex items-center justify-center">
                                <div className="p-6 rounded-xl bg-[#161616]">
                                    <IoMailOutline className="text-4xl text-gray-400"></IoMailOutline>
                                </div>
                            </div>
                            <div className="col-span-3 text-gray-300 mx-4 md:mx-0 lg:mx-4">
                                <h5 className="sm:text-sm md:text-md lg:text-lg">MAIL</h5>
                                <p className="font-bold">akasdatta.me@gmail.com</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-5  rounded-3xl my-6">
                            <div className="col-span-1 rounded-3xl flex items-center justify-center">
                                <div className="p-6 rounded-xl bg-[#161616]">
                                <FiPhone className="text-4xl text-gray-400" />
                                </div>
                            </div>
                            <div className="col-span-3 text-gray-300 mx-4 md:mx-0 lg:mx-4">
                                <h5 className="sm:text-sm md:text-md lg:text-lg mb-2">CONTACT ME</h5>
                                <p className="font-bold">+880 1810-318499</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 rounded-3xl">
                            <div className="col-span-1 rounded-3xl flex items-center justify-center">
                                <div className="p-6 rounded-xl  bg-[#161616]">
                                    <IoLocationOutline className=" text-4xl text-gray-400"></IoLocationOutline>
                                </div>
                            </div>
                            <div className="col-span-3 text-gray-300 mx-4 md:mx-0 lg:mx-4">
                                <h5 className="sm:text-sm md:text-md lg:text-lg">LOCATION</h5>
                                <p className="font-bold">Masterpara, Feni <br /> Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="card pt-6 lg:p-10 p-4 md:p-10" data-aos="zoom-in" data-aos-duration="1500" >
                <div className="card-body bg-[#161616] rounded-3xl">
                    <div className="card pt-0">
                        <div className="m-2 bg-[#161616] rounded-3xl">
                            <div className='grid grid-cols-4'>
                                <h1 className="sm:text-2xl md:text-4xl lg:text-4xl col-span-3 text-sky-700 mt-1 xl:mt-7 lg:mt-0 md:mt-7 ">Let's work Together <span className="text-sky-700"></span></h1>
                                <img className="object-cover rounded-3xl w-8 md:w-24 col-span-1 mt-2" src={image} alt="" />
                            </div>
                        </div>
                    </div>
                    <form className="card" ref={form} onSubmit={sendEmail}>
                        <div className="form-control py-5">
                            <input type="text" name="from_name" placeholder="Name *" className="input input-bordered bg-gradient-to-r text-white from-[#2A2A2A] to-[#191919]" />
                        </div>
                        <div className="form-control pb-5">
                            <input type="email" name="email_id" placeholder="Email *" className="input input-bordered text-white bg-gradient-to-r from-[#2A2A2A] to-[#191919]" />
                        </div>
                        <div>
                            <textarea
                            className="w-full rounded-lg bg-gradient-to-r from-[#2A2A2A] to-[#191919] p-4 textarea text-white"
                            name="message"
                            placeholder="Your Message *"
                            rows="4"
                            ></textarea>
                        </div>
                        <div className="form-control pt-3">
                            <button type="submit" value="send" className="btn btn-active">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Contact;