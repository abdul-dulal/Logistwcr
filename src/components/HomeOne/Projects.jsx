/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ img }) => {
  return (
    <div className="group relative overflow-hidden">
      <img
        src={img}
        className="w-full  transition-all duration-500"
        alt="Projcet"
      />
      <div className="absolute bottom-2 left-[10px] bg-[#ebebeb] w-[89%] pt-[25px] px-[30px] pb-[19px] rounded-tr-[35px] translate-y-[119px] invisible  opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
        <Link
          to="/"
          className="text-[21px] transition-all duration-300 capitalize text-secondary font-medium  hover:text-primary hover:transition-all hover:duration-500"
        >
          Experts in technology fields
        </Link>
        <span className="text-secondary text-lg block mt-2">
          Transportation 2024
        </span>
      </div>
      <div className="absolute -top-[90px] right-[11px] transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:top-[11px] group-hover:transition-all group-hover:duration-500">
        <Link
          to="/"
          className="block bg-primary py-[18px] px-5 text-white text-center font-medium  rounded-tl-[25px] transition-all duration-500 hover:bg-secondary "
        >
          Details
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className="block m-auto mt-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
