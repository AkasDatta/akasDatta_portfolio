import About from "./About/About";
import Banner from "./Banner/Banner";
import LastBanner from "./LastBanner/LastBanner";
import MiddleBanner from "./MiddleBanner/MiddleBanner";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <MiddleBanner></MiddleBanner>
            <LastBanner></LastBanner>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;