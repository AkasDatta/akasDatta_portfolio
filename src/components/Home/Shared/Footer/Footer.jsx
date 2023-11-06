
const Footer = () => {
    return (
        <div>
            <footer className="bg-black-800">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex justify-center text-white font-bold text-xl">
                        Akas Datta
                    </div>

                    <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mx-10">
                        <li>
                            <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="/"
                            >
                            Home
                            </a>
                        </li>

                        <li>
                            <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="#about"
                            >
                            About
                            </a>
                        </li>

                        <li>
                            <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="#projects"
                            >
                            Projects
                            </a>
                        </li>

                        <li>
                            <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="#experience"
                            >
                            Experience
                            </a>
                        </li>

                        <li>
                            <a
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            href="#contact"
                            >
                            Contact
                            </a>
                        </li>
                    </ul>
                    <p className="flex justify-center mt-6">© Inspired by <a className="mx-1 text-teal-500" href="https://wpriverthemes.com/gridx/" target="_blank" rel="noopener noreferrer">GridX</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;