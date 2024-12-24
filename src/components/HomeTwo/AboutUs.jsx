import { useState } from "react";
import about from "/src/assets/HomeTwo/about2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlay,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <section className="pt-[100px] pb-[100px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <img src={about} alt="About" />
          </div>
          <div className="mt-[18px]">
            <h5 className="capitalize relative   left-10 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              about the company
            </h5>
            <h2 className="mt-[22px]">
              Global logistics Solution Provider 1999
            </h2>
            <p className="my-[23px]">
              Payment solutions enable businesses to accept payments Payment
              stions enable businesses to accept payments from ctly customers
              ctly securely. stions enable businesses to accept payments from
              ctly customers ctly securely.
            </p>
            <div className="grid sm:grid-cols-2 pt-3 pb-7 border-b border-solid border-[#f2f2f2]">
              <div className="">
                <ul className="">
                  <li className="relative pl-7 pb-[13px] md:text-xl text-[15px] text-secondary font-medium capitalize  before:absolute before:content-[''] before:top-[9px] before:left-[2px] before:w-[9px] before:h-[9px] before:bg-primary after:absolute after:content-[''] after:-left-[1px] after:top-[6px] after:h-[15px] after:w-[15px] after:border after:border-solid after:border-primary">
                    Worldwide Services
                  </li>
                  <li className="relative pl-7 pb-[13px] md:text-xl text-[15px] text-secondary font-medium capitalize  before:absolute before:content-[''] before:top-[9px] before:left-[2px] before:w-[9px] before:h-[9px] before:bg-primary after:absolute after:content-[''] after:-left-[1px] after:top-[6px] after:h-[15px] after:w-[15px] after:border after:border-solid after:border-primary">
                    Local Service
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="">
                  <li className="relative pl-7 pb-[13px] md:text-xl text-[15px] text-secondary font-medium capitalize  before:absolute before:content-[''] before:top-[9px] before:left-[2px] before:w-[9px] before:h-[9px] before:bg-primary after:absolute after:content-[''] after:-left-[1px] after:top-[6px] after:h-[15px] after:w-[15px] after:border after:border-solid after:border-primary">
                    Tracking Moving
                  </li>
                  <li className="relative pl-7 pb-[13px] md:text-xl text-[15px] text-secondary font-medium capitalize  before:absolute before:content-[''] before:top-[9px] before:left-[2px] before:w-[9px] before:h-[9px] before:bg-primary after:absolute after:content-[''] after:-left-[1px] after:top-[6px] after:h-[15px] after:w-[15px] after:border after:border-solid after:border-primary">
                    Due Time Delivery
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 pt-10 items-center">
              <div>
                <button
                  onClick={togglePopup}
                  className="inline-block h-[60px] w-[60px] leading-[60px] bg-primary text-center rounded-[50%] text-white text-xl about_video"
                >
                  <FontAwesomeIcon icon={faPlay} />
                </button>
                <span className="text-lg font-medium ml-5 underline capitalize">
                  watch the video
                </span>
                {isOpen && (
                  <div
                    onClick={togglePopup}
                    className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-75"
                  >
                    <button
                      onClick={togglePopup}
                      className="h-8 w-8 flex items-center justify-center p-[2px] rounded-full border border-solid border-gray-300 absolute top-2 right-2 text-2xl text-white"
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <div
                      onClick={closePopup}
                      className="relative w-[90%] h-[90%] bg-white rounded"
                    >
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/SZEflIVnhH8?si=Bh49mJbQuwQ-VpmA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="">
                  <Link
                    to="/"
                    className={` relative inline-block bg-primary text-xl capitalize text-white py-[18px] px-[42px] sm:mt-0 mt-10  overflow-hidden transition-all duration-500 z-[1]  before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-secondary before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
                  >
                    more details
                    <FontAwesomeIcon
                      className="icon ml-4 -rotate-[49deg]  text-[18px] text-white "
                      icon={faArrowRight}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
