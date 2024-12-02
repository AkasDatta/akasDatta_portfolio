import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Shared/Navbar/Navbar";
import Footer from "../components/Home/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import GoToTop from "../components/Home/Home/GoToTop/GoToTop";

const Main = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
    
    return (
          <div>
            {isVisible ? <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
                </div> : <div>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <GoToTop></GoToTop>
                        <Footer></Footer>
                </div> }
            </div>
    );
};

export default Main;