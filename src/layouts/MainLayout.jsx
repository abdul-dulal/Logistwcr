import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopHeader from "../components/TopHeader/TopHeader";
import TopHeaderTwo from "../components/TopHeader/TopHeaderTwo";
import HeaderTwo from "./HeaderTwo";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        {/* <div>{location.pathname == "/" ? <TopHeader /> : <TopHeaderTwo />}</div> */}
        {/* <div>{location.pathname == "/" ? <Navbar /> : <HeaderTwo />}</div> */}
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
