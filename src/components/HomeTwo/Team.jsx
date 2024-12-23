/* eslint-disable react/prop-types */
import {
  faFacebook,
  faInstagram,
  faVimeoV,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Team = ({ img, name }) => {
  return (
    <div className="relative bg-secondary pb-[37px] rounded-tl-[280px] rounded-tr-[280px] overflow-hidden  z-[1] before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-full before:h-[0] before:bg-primary before:duration-500 before:-z-[1] before:hover:h-full before:hover:duration-500">
      <img src={img} className="w-full" alt="Team Member" />
      <div className="mt-8 text-center">
        <h4 className="sm:text-[26px] text-[22px]  font-medium text-white mb-[5px]">
          {name}
        </h4>
        <span className="capitalize text-base  text-white">Chief Engineer</span>
        <div className="mt-4">
          <Link
            to=""
            className="inline-block w-[42px] h-[42px] leading-[42px] bg-white text-center text-secondary text-lg mr-1 duration-500 ease-out hover:bg-secondary hover:text-white hover:duration-500 hover:ease-out"
          >
            <FontAwesomeIcon icon={faShareNodes} />
          </Link>
          <Link
            to=""
            className="inline-block w-[42px] h-[42px] leading-[42px] bg-white text-center text-secondary text-lg mr-1 duration-500 ease-out hover:bg-secondary hover:text-white hover:duration-500 hover:ease-out"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            to=""
            className="inline-block w-[42px] h-[42px] leading-[42px] bg-white text-center text-secondary text-lg mr-1 duration-500 ease-out hover:bg-secondary hover:text-white hover:duration-500 hover:ease-out"
          >
            <FontAwesomeIcon icon={faVimeoV} />
          </Link>
          <Link
            to=""
            className="inline-block w-[42px] h-[42px] leading-[42px] bg-white text-center text-secondary text-lg mr-1 duration-500 ease-out hover:bg-secondary hover:text-white hover:duration-500 hover:ease-out"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Team;
