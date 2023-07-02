import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
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
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;