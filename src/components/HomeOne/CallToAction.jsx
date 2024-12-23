/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const CallToAction = ({ bgImg }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative pt-[180px] pb-[450px]  "
    >
      <h2
        className="text-white text-center wow animate__fadeInUp"
        data-wow-duration=".6s"
      >
        Looking For The Best Logistics <br />
        Transport Service?
      </h2>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        <div className=" wow animate__fadeInUp" data-wow-duration=".6s">
          <Link
            to="/"
            className={` sm:mt-10 mt-5 relative inline-block bg-primary text-lg capitalize text-white py-[16px] px-[32px] overflow-hidden transition-all duration-500 z-[1]  before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-secondary before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
          >
            more details
            <FontAwesomeIcon
              className="icon ml-4 -rotate-[49deg]  text-[18px] text-white "
              icon={faArrowRight}
            />
          </Link>
        </div>
        <div className=" wow animate__fadeInUp" data-wow-duration=".6s">
          <Link
            to="/"
            className={`group sm:mt-10 mt-5 relative inline-block bg-primary text-lg capitalize text-white py-[16px] px-[32px] overflow-hidden transition-all duration-500 z-[1] hover:text-secondary before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-white before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
          >
            read more
            <FontAwesomeIcon
              className="icon ml-4 -rotate-[49deg]  text-[18px] duration-500 group-hover:text-secondary group-hover:duration-500 "
              icon={faArrowRight}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
