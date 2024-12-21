import { Link } from "react-router-dom";
import FooterSocial from "./FooterSocial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const FooterTwo = () => {
  return (
    <div>
      <footer className="bg-[url('/src/assets/HomeTwo/footer-bg.jpg')] bg-center bg-no-repeat bg-cover pt-[120px] pb-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div>
              <Link to="/">
                <img src="/src/assets/HomeOne/logo.png" alt="Logo" />
              </Link>
              <p className="w-[80%] py-5 mt-2 text-white">
                Feugiat a ligula rutrum luctus primis ultrice nteger congue
                magna at pretium purus a pretium ligula rutrum and luctus
              </p>
              <FooterSocial />
            </div>
            <div>
              <h4 className="relative mb-[43px] text-[24px] text-white before:absolute before:content-[''] before:-bottom-[5px] before:-left-[17px] before:bg-primary before:w-[2px] before:h-[31px]">
                Industry Sectors
              </h4>
              <div>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  our team
                </Link>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  how it works
                </Link>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  office create
                </Link>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  Residencial Explore
                </Link>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  Terms & Service
                </Link>
              </div>
            </div>
            <div>
              <h4 className="relative mb-[43px] text-[24px] text-white before:absolute before:content-[''] before:-bottom-[5px] before:-left-[17px] before:bg-primary before:w-[2px] before:h-[31px]">
                Get In Touch
              </h4>
              <div>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  valentin, street road 24, new york,
                </Link>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  usa - 67452
                </Link>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  +02 574 - 328 - 301
                </Link>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  blog classic
                </Link>
                <Link
                  to=""
                  className="block text-white text-base leading-[2] capitalize duration-500 hover:text-primary hover:underline"
                >
                  Example@gmail.com
                </Link>
              </div>
            </div>
            <div>
              <h4 className="relative mb-[43px] text-[24px] text-white before:absolute before:content-[''] before:-bottom-[5px] before:-left-[17px] before:bg-primary before:w-[2px] before:h-[31px]">
                Our Projects
              </h4>
              <div className="md:ml-[41px] md:mr-24">
                <div className="">
                  <Link to="/" className="inline-block m-[5px]">
                    <img
                      src="/src/assets/HomeTwo/p1.png"
                      className="w-full"
                      alt="Footer"
                    />
                  </Link>
                  <Link to="/" className="inline-block m-[5px]">
                    <img
                      src="/src/assets/HomeTwo/p2.png"
                      className="w-full"
                      alt="Footer"
                    />
                  </Link>
                  <Link to="/" className="inline-block m-[5px]">
                    <img
                      src="/src/assets/HomeTwo/p3.png"
                      className="w-full"
                      alt="Footer"
                    />
                  </Link>
                  <Link to="/" className="inline-block m-[5px]">
                    <img
                      src="/src/assets/HomeTwo/p4.png"
                      className="w-full"
                      alt="Footer"
                    />
                  </Link>
                  <Link to="/" className="inline-block m-[5px]">
                    <img
                      src="/src/assets/HomeTwo/p5.png"
                      className="w-full"
                      alt="Footer"
                    />
                  </Link>
                  <Link to="/" className="inline-block m-[5px]">
                    <img
                      src="/src/assets/HomeTwo/p6.png"
                      className="w-full"
                      alt="Footer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#0a1d2e] p-8">
        <div className="flex flex-wrap justify-between items-center">
          <span className=" text-white text-lg inline-block mt-8">
            &copy; Copyrights 2024
            <Link to="/" className="text-primary underline inline-block px-2">
              sTheme-IT
            </Link>
            All rights reserved.
          </span>
          <div className="  w-[55px] h-[55px] bg-secondary leading-[60px] rounded-[50%] text-white  lg:inline-block hidden text-center">
            <FontAwesomeIcon icon={faAnglesDown} />
          </div>
          <div>
            <ul className="flex flex-wrap gap-7  lg:mt-0 mt-6">
              <li>
                <Link to="/" className="text-[#cacaca]">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#cacaca]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#cacaca]">
                  License
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#cacaca]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
