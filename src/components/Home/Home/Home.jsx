import About from "./About/About";
import Banner from "./Banner/Banner";
import LastBanner from "./LastBanner/LastBanner";
import MiddleBanner from "./MiddleBanner/MiddleBanner";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <MiddleBanner></MiddleBanner>
            <LastBanner></LastBanner>
            <About></About>
        </div>
    );
};

export default Home;