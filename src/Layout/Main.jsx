import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Shared/Navbar/Navbar";
import Footer from "../components/Home/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import GoToTop from "../components/Home/Home/GoToTop/GoToTop";
import { ThemeProvider } from "styled-components";

const Main = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const theme = {
        colors: {
          heading: "rgb(24 24 29)",
          text: "rgb(24 24 29)",
          white: "#fff",
          black: " #212529",
          helper: "#0369A1",
          bg: "rgb(249 249 255)",
          footer_bg: "#0a1435",
          btn: "#0369A1",
          border: "rgba(98, 84, 243, 0.5)",
          hr: "#ffffff",
          gradient:
            "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
          shadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
          shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        },
        media: { mobile: "768px", tab: "998px" },
      };
    
    return (
          <div>
            {isVisible ? <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
                </div> : <div>
                    <ThemeProvider theme={theme}>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <GoToTop></GoToTop>
                        <Footer></Footer>
                    </ThemeProvider>
                </div> }
            </div>
    );
};

export default Main;