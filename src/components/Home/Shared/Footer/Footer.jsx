
const Footer = () => {
    return (
        <div>
            <footer className="bg-black-800">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex justify-center text-white font-bold text-3xl">
                        <a href="/">Akas Datta</a>
                    </div>

                    <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mx-10">
                        <li>
                            <a
                            className=" text-white hover:text-white/75 transition"
                            href="/"
                            >
                            Home
                            </a>
                        </li>

                        <li>
                            <a
                            className=" text-white hover:text-white/75 transition"
                            href="#about"
                            >
                            About
                            </a>
                        </li>

                        <li>
                            <a
                            className=" text-white hover:text-white/75 transition"
                            href="#projects"
                            >
                            Projects
                            </a>
                        </li>

                        <li>
                            <a
                            className=" text-white hover:text-white/75 transition"
                            href="#experience"
                            >
                            Experience
                            </a>
                        </li>
                        

                        <li>
                            <a
                            className=" text-white hover:text-white/75 transition"
                            href="#contact"
                            >
                            Contact
                            </a>
                        </li>
                    </ul>
                    <p className="flex justify-center text-[#bdbcbc] mt-6">© Inspired by <a className="mx-1 text-teal-500" href="https://wpriverthemes.com/gridx/" target="_blank" rel="noopener noreferrer">GridX</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;