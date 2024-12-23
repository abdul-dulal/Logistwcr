/* eslint-disable react/prop-types */
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Services = ({ img, title }) => {
  return (
    <div>
      <div className="group relative">
        <div className="relative z-[1] transition-all duration-500 overflow-hidden before:absolute before:content-[''] before:bottom-0 before:left-0 before:w-[0%] before:h-[10px] before:bg-primary before:z-[1] before:transition-all before:duration-1000 before:group-hover:w-full  ">
          <img src={img} className="w-full" alt="Service" />
        </div>
        <div className=" bg-white py-[22px]  px-10 relative  w-full border-l-[5px] border-solid border-primary z-[1] max-h-[100%] before:absolute before:content-[''] before:top-0 before:right-0 before:bg-primary before:w-0 before:h-full before:transition-all before:duration-500 before:ease-out before:-z-[1] before:hover:w-full before:hover:left-0 before:hover:transition-all before:hover:duration-500 before:hover:ease-out group-hover:before:w-full group-hover:before:left-0">
          <span className="block relative text-lg text-secondary font-medium left-[46px] transition-all duration-500 ease-out before:absolute before:w-[34px] before:h-[2px] before:bg-primary before:-left-[46px] before:top-3 before:content-[''] group-hover:before:bg-white group-hover:text-white">
            Tracking
          </span>
          <Link
            to="/"
            className="block text-[22px] font-medium text-secondary mt-3 group-hover:text-white transition-all duration-500 ease-out"
          >
            {title}
          </Link>
          <Link
            to="/"
            className="inline-block bg-secondary text-lg py-3 px-5 mt-[17px] duration-500 text-white capitalize group-hover:bg-white group-hover:text-black"
          >
            read more
            <FontAwesomeIcon icon={faArrowRightLong} className="ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
