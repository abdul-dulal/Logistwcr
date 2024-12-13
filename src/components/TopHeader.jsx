import { Link } from "react-router-dom";
import {
  faClock,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TopHeader = () => {
  return (
    <div className="py-[22px] bg-primary xl:block hidden">
      <div className="container flex justify-between ">
        <div className="">
          <ul className=" flex items-center gap-5">
            <li className="">
              <Link
                to="/"
                className="flex items-center gap-2 text-white text-[15px] font-normal"
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Location : 12W Profession Str Hobert, CA</p>{" "}
              </Link>
            </li>
            <li className="">
              <Link
                to="/"
                className="flex items-center gap-2 text-white text-[15px] font-normal"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <p>Our Email : helpus24@gmail.com </p>{" "}
              </Link>
            </li>
            <li className="">
              <Link
                to="/"
                className="flex items-center gap-2 text-white text-[15px] font-normal"
              >
                <FontAwesomeIcon icon={faClock} />
                <p>Office Time : Mon - Fri 8:00 - 6:30</p>{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <span className="text-white">Follow on:</span>
          <ul className="inline-block ml-3">
            <li className="inline mr-3 transition-all ease-out duration-300">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white hover:text-secondary rounded-full hover:transition-all hover:duration-300 hover:ease-out"
                />
              </Link>
            </li>
            <li className=" inline mr-3">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-white  hover:text-secondary rounded-full hover:transition-all hover:duration-300 hover:ease-out"
                />
              </Link>
            </li>
            <li className="inline mr-3">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white hover:text-secondary rounded-full hover:transition-all hover:duration-300 hover:ease-out"
                />
              </Link>
            </li>
            <li className="inline mr-3">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white hover:text-secondary rounded-full hover:transition-all hover:duration-300 hover:ease-out"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
