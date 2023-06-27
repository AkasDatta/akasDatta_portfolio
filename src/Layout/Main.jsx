import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Shared/Navbar/Navbar";
import Footer from "../components/Home/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;