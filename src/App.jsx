import { useEffect } from "react";
import WOW from "wow.js";
import "animate.css";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animate__animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);
  return (
    <div className="">
      <MainLayout />
    </div>
  );
};

export default App;
