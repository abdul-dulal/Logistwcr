import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faClock,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TopHeaderTwo = () => {
  return (
    <div className="relative  z-[1] before:absolute before:content-[''] before:left-0 before:top-0 before:w-[112px] before:h-full before:-z-[1]">
      <div className=" max-w-[1920px] pl-[138px]">
        <div className=" flex justify-between">
          <div className="flex items-center">
            <ul className=" flex items-center gap-5">
              <li className="">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-secondary text-[15px] font-normal"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>Location : 12W Profession Str </p>{" "}
                </Link>
              </li>
              <li className="">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-secondary text-[15px] font-normal"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>Our Email : helpus24@gmail.com </p>{" "}
                </Link>
              </li>
              <li className="">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-secondary text-[15px] font-normal"
                >
                  <FontAwesomeIcon icon={faClock} />
                  <p>Office Time : Mon - Fri 8:00 - 6:30</p>{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <span className="text-secondary">Follow on:</span>
            <ul className=" flex items-center ml-3">
              <li className="inline mr-3 transition-all ease-out duration-300">
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-secondary hover:text-primary rounded-full hover:transition-all hover:duration-300 hover:ease-out"
                  />
                </Link>
              </li>
              <li className=" inline mr-3">
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="text-secondary  hover:text-primary rounded-full hover:transition-all hover:duration-300 hover:ease-out"
                  />
                </Link>
              </li>
              <li className="inline mr-3">
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-secondary hover:text-primary rounded-full hover:transition-all hover:duration-300 hover:ease-out"
                  />
                </Link>
              </li>
              <li className="inline mr-3">
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-secondary hover:text-primary rounded-full hover:transition-all hover:duration-300 hover:ease-out"
                  />
                </Link>
              </li>
              <div className="inline-block w-[203px] bg-secondary py-[30px]">
                <Link
                  to="/"
                  className="capitalize block text-center text-white font-medium"
                >
                  get a quote
                  <FontAwesomeIcon
                    className="inline-block relative top-1 left-3  text-[18px] text-white "
                    icon={faArrowRight}
                  />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderTwo;
