import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeatureSlider from "../components/HomeTwo/FeatureSlider";
import about from "/src/assets/HomeTwo/about2.png";

import {
  faArrowRight,
  faPlay,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import service1 from "/src/assets/HomeTwo/service3.jpg";
import service2 from "/src/assets/HomeTwo/service2.jpg";
import service3 from "/src/assets/HomeTwo/service1.jpg";
import icon1 from "/src/assets/HomeTwo/icon1.png";
import icon2 from "/src/assets/HomeTwo/icon2.png";
import icon3 from "/src/assets/HomeTwo/icon3.png";
import ServiceTwo from "../components/HomeTwo/ServiceTwo";
import tm1 from "/src/assets/team/team.png";
import tm2 from "/src/assets/team/team2.png";
import tm3 from "/src/assets/team/team3.png";
import tm4 from "/src/assets/team/team4.png";
import Team from "../components/HomeTwo/Team";
import shape from "/src/assets/HomeTwo/shape2.png";
import faq from "/src/assets/HomeTwo/faq.jpg";
import Accrodian from "../components/HomeTwo/Accrodian";
import AppionmentTwo from "../components/HomeTwo/AppionmentTwo";
const HomeTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      {/* ST__Slider__Area */}
      <FeatureSlider />

      {/* ST__About__Area */}
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
                          src="https://www.youtube.com/embed/SZEflIVnhH8?si=BH39mJbQuwQ-VpmA"
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

      {/* ST__Service__Area */}
      <section className="relative py-[100px] bg-[#f5f4f9]">
        <div className="container">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration="1s"
          >
            <h5 className="capitalize relative  mb-5 inline-block text-secondary after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Types of Loglstice
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Popular Logistics Services</h2>
          </div>
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 wow animate__fadeInUp"
            data-wow-duration=".6s"
          >
            <ServiceTwo
              service={service1}
              icon={icon1}
              title="Shipping Worldwide"
            />
            <ServiceTwo
              service={service2}
              icon={icon2}
              title="Real-Time Tracking"
            />
            <ServiceTwo
              service={service3}
              icon={icon3}
              title="Other Solution "
            />
          </div>
        </div>
      </section>

      {/* ST__Team__Area */}
      <section className="relative py-[100px]">
        <div className="container">
          <div
            className="mb-[50px] text-center wow animate__fadeInUp"
            data-wow-duration="1s"
          >
            <h5 className="capitalize relative  mb-5 inline-block text-secondary after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Our Most Team
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Meet The Excecutive Panel</h2>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <Team img={tm1} name="Somaiya Akter" />
            <Team img={tm2} name="Abdul Dulal" />
            <Team img={tm3} name="Monio Roman" />
            <Team img={tm4} name="Saad Alam" />
          </div>
        </div>
      </section>

      {/* ST__Appionment__Area */}
      <section className="relative py-[140px] bg-[url('/src/assets/HomeTwo/bg.jpg')] bg-no-repeat bg-cover bg-center ">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-9 col-span-12">
              <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                <h5 className="relative ml-9 text-white capitalize  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-white before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
                  Booking Appointment
                </h5>
                <h2 className="mb-5 text-white text-left">
                  24/7 customer support any time
                  <br />
                  of the day or night
                </h2>
                <p className="   sm:w-[55%] w-full text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div className="">
                    <Link
                      to="/"
                      className={` mt-10 relative inline-block bg-primary text-xl capitalize text-white py-[18px] px-[42px] overflow-hidden transition-all duration-500 z-[1]  before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-secondary before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
                    >
                      more details
                      <FontAwesomeIcon
                        className="icon ml-4 -rotate-[49deg]  text-[18px] text-white "
                        icon={faArrowRight}
                      />
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      to="/"
                      className={` sm:mt-10 mt-1 relative inline-block bg-transparent border border-solid border-white hover:border-primary text-xl capitalize text-white py-[18px] px-[42px] overflow-hidden transition-all duration-500 z-[1]  before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-primary before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
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
            <div className="col-span-3 lg:block hidden relative top-16">
              <button className="inline-block h-[100px] w-[100px] leading-[103px] bg-primary rounded-[50%] text-center duration-500 relative before:absolute before:content-[''] before:left-[50%] before:top-[50%] before:block before:w-full before:h-full before:rounded-[50%] before:z-[1] ap_video">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-white text-2xl"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="shape xl:block hidden">
          <img
            src={shape}
            className="absolute w-[25%] bottom-[25%] right-[30%]"
            alt="Shape"
          />
        </div>
      </section>

      {/* ST__FAQ__Area */}
      <section className="pt-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h5 className="relative ml-9 text-secondary capitalize  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
                Frequently Asked Questions
              </h5>
              <h2 className="mb-5 text-secondary text-left">
                The Fastest And Reliable Courier Solutions
              </h2>
              <Accrodian />
            </div>
            <div>
              <img src={faq} alt="FAQ" />
            </div>
          </div>
        </div>
      </section>

      {/* ST__Booking__Area */}
      <section className="bg-[#f5f4f9] pt-[100px] mt-[100px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div className="pt-[79px] px-[132px] pb-[47px] ">
                <h5 className="relative ml-9 text-secondary capitalize  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
                  Booking Appointment
                </h5>
                <h2 className="mb-5 text-secondary text-left">
                  Book Transport & Logistics
                </h2>
                <AppionmentTwo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTwo;
