import image from "../../../../assets/image.png"
const LastBanner = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8">
                <div className="card pt-0">
                    <div className="card-body bg-[#161616] rounded-3xl">
                        <div className="grid grid-cols-2 gap-10">
                            <div className="card py-7 border border-[#262626]">
                                <div className="card-body bg-[#161616] rounded-3xl text-center w-full flex justify-center items-center">
                                    <p className="card-title text-4xl mb-2">+20</p>
                                    <p className="text-sm">TOTAL <br /> PROJECTS</p>
                                </div>
                            </div>
                            <div className="card border py-7 border-[#262626]">
                                <div className="card-body bg-[#161616] rounded-3xl text-center w-full flex justify-center items-center">
                                    <p className="card-title text-4xl mb-2">+0</p>
                                    <p className="text-sm">CLIENTS <br /> WORLDWIDE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card pt-0">
                    <div className="card-body bg-[#161616] rounded-3xl">
                        <img className=" rounded-3xl object-cover w-full h-0 md:h-auto md:w-52" src={image} alt="" />
                        <h2 className="text-4xl card-title">Let's</h2>
                        <h2 className="text-4xl card-title">work <span className="text-sky-700">Together</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastBanner;