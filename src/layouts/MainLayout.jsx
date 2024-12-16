import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopHeader from "../components/TopHeader";

const MainLayout = () => {
  return (
    <div>
      <div>
        <TopHeader />
        {/* <Navbar /> */}
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
