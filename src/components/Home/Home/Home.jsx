import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import LastBanner from "./LastBanner/LastBanner";
import MiddleBanner from "./MiddleBanner/MiddleBanner";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <MiddleBanner></MiddleBanner>
            <LastBanner></LastBanner>
            <Skills></Skills>
            <Projects></Projects>
            <About></About>
            <Experience></Experience>
            <Contact></Contact>
        </div>
    );
};

export default Home;