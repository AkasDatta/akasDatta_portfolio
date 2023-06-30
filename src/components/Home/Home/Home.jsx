import Banner from "./Banner/Banner";
import LastBanner from "./LastBanner/LastBanner";
import MiddleBanner from "./MiddleBanner/MiddleBanner";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <MiddleBanner></MiddleBanner>
            <LastBanner></LastBanner>
        </div>
    );
};

export default Home;