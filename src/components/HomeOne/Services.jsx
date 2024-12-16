/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = ({ img, icon, title }) => {
  return (
    <div className="group relative">
      <div className="relative z-[1] transition-all duration-500 overflow-hidden before:absolute before:content-[''] before:bottom-0 before:left-0 before:w-[0%] before:h-[10px] before:bg-primary before:z-[1] before:transition-all before:duration-1000 before:hover:w-full ">
        <img src={img} className="w-full" alt="Service" />
        <div className="absolute xl:top-[46px] xl:left-8 md:left-5 md:top-8 sm:left-10 left-4 sm:top-16 top-12">
          <img
            src={icon}
            className="sm:max-w-full max-w-[65%]"
            alt="Service Icon"
          />
        </div>
      </div>
      <div className=" bg-white pt-[21px] pb-[52px] px-10 relative left-[25px] bottom-[50px] w-[89%] border-l-[5px] border-solid border-primary z-[1] max-h-[100%] before:absolute before:content-[''] before:top-0 before:right-0 before:bg-primary before:w-0 before:h-full before:transition-all before:duration-500 before:ease-out before:-z-[1] before:hover:w-full before:hover:left-0 before:hover:transition-all before:hover:duration-500 before:hover:ease-out group-hover:before:w-full group-hover:before:left-0">
        <span className="block relative text-lg text-secondary font-medium left-[46px] transition-all duration-500 ease-out before:absolute before:w-[34px] before:h-[2px] before:bg-primary before:-left-[46px] before:top-3 before:content-[''] group-hover:before:bg-white group-hover:text-white">
          Tracking
        </span>
        <Link
          to="/"
          className="text-[22px] font-medium text-secondary mt-3 group-hover:text-white transition-all duration-500 ease-out"
        >
          {title}
        </Link>
        <div className="absolute right-0 -bottom-[27px] z-[1]">
          <Link
            to="/"
            className="inline-block py-[10px] px-[34px] bg-secondary group-hover:bg-primary group-hover:transition-all group-hover:duration-500 group-hover:ease-out text-white text-[20px] relative transition-all duration-500 before:absolute before:content-[''] before:top-[23px] before:right-[87px] before:bg-secondary before:w-8 before:h-[27px] before:z-[1] before:transition-all before:duration-500 before:[clip-path:polygon(0_0,_100%_0%,_100%_100%)] group-hover:before:bg-primary group-hover:before:transition-all group-hover:before:duration-500 group-hover:before:ease-out"
          >
            <FontAwesomeIcon icon={faArrowRightLong} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
