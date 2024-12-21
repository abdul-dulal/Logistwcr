import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const FooterSocial = () => {
  return (
    <div>
      <h3 className="relative text-[22px] text-white font-medium opacity-[.8] mt-[25px] mb-[18px] ml-[18px]  before:absolute before:content-[''] before:-top-0 before:-left-4 before:w-[3px] before:h-[30px] before:bg-primary">
        Social Info
      </h3>
      <div className="inline-block text-white w-[38px] h-[38px] leading-[38px] border border-dashed border-[rgba(255,255,255,0.2)] text-center mp-[22px] mr-[10px] duration-500 hover:bg-primary hover:border hover:border-dashed hover:border-bg-primary">
        <Link to="/">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </div>
      <div className="inline-block text-white w-[38px] h-[38px] leading-[38px] border border-dashed border-[rgba(255,255,255,0.2)] text-center mp-[22px] mr-[10px] duration-500 hover:bg-primary hover:border hover:border-dashed hover:border-bg-primary">
        <Link to="/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
      <div className="inline-block text-white w-[38px] h-[38px] leading-[38px] border border-dashed border-[rgba(255,255,255,0.2)] text-center mp-[22px] mr-[10px] duration-500 hover:bg-primary hover:border hover:border-dashed hover:border-bg-primary">
        <Link to="/">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
      <div className="inline-block text-white w-[38px] h-[38px] leading-[38px] border border-dashed border-[rgba(255,255,255,0.2)] text-center mp-[22px] mr-[10px] duration-500 hover:bg-primary hover:border hover:border-dashed hover:border-bg-primary">
        <Link to="/">
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocial;
