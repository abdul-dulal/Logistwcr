import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const StSliderContent = () => {
  return (
    <div className="bg-[url('/src/assets/HomeFour/Slider.jpg')] bg-cover bg-no-repeat bg-center relative h-[850px] overflow-hidden flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div className="">
            <h5 className="relative ml-9  text-xl text-black font-normal capitalize  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out  circle">
              We Specialise in the transportation
            </h5>
            <h2 className="text-black font-bold">
              Efficient Air <br /> Freight
            </h2>
            <p className="mt-4 text-lg font-normal">
              Your goods,delivered with precision and <br /> care, anywhere in
              the world.Lorem ipsum
            </p>
            <div className="group inline-block">
              <Link
                to="/"
                className={` mt-10 relative inline-block bg-primary text-lg capitalize text-white py-[18px] px-[42px] overflow-hidden transition-all duration-500 z-[1]  before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-white before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] hover:text-secondary `}
              >
                more details
                <FontAwesomeIcon
                  className="icon ml-4 -rotate-[49deg]  text-[18px] text-white group-hover:text-secondary "
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src="/src/assets/HomeFour/Ellipse.png" alt="" />
            <div className="absolute top-[160px] right-[99px]">
              <img src="/src/assets/HomeFour/banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StSliderContent;
