/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Project = ({ port, title }) => {
  return (
    <div>
      <div className="relative group mb-7">
        <img src={port} className="w-full" alt="Port" />
        <div className=" absolute bottom-[27px] left-5 right-5 bg-primary pt-[25px] pb-5 px-[30px] translate-y-[119px] opacity-0 duration-500 rounded-[5px] group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-secondary font-medium text-base pb-2 block">
                Logistics
              </span>
              <Link
                to="/"
                className="sm:text-xl text-base font-bold text-white"
              >
                {title}
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="inline-block bg-secondary py-[6px] px-[11px] rounded-[0_50px_50px_0]"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white text-xl text-center"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
