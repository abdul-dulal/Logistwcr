import { useEffect } from "react";
import WOW from "wow.js";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeaturedSlider from "../components/HomeOne/FeaturedSlider";
import STslider from "../components/HomeOne/STslider";
import about from "/src/assets/HomeOne/about.jpg";
import icon from "/src/assets/HomeOne/icon5.png";
import {
  faAnglesRight,
  faArrowRight,
  faArrowRightLong,
  faComment,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import serviceOne from "/src/assets/HomeOne/service1.jpg";
import serviceTwo from "/src/assets/HomeOne/service2.jpg";
import serviceThree from "/src/assets/HomeOne/service3.jpg";
import serviceIconOne from "/src/assets/HomeOne/dallar-icon.png";
import serviceIconTwo from "/src/assets/HomeOne/ship-icon.png";
import serviceIconthree from "/src/assets/HomeOne/home-icon.png";
import Services from "../components/HomeOne/Services";
import t1 from "/src/assets/HomeOne/t1.png";
import t2 from "/src/assets/HomeOne/t2.png";
import t3 from "/src/assets/HomeOne/t3.png";
import project1 from "/src/assets/HomeOne/p1.jpg";
import project2 from "/src/assets/HomeOne/p2.jpg";
import project3 from "/src/assets/HomeOne/p3.jpg";
import project4 from "/src/assets/HomeOne/p4.jpg";
import call2 from "/src/assets/HomeOne/call2.jpg";
import Testimonial from "../components/HomeOne/Testimonial";
import shape from "/src/assets/HomeOne/shape.png";
import Appointment from "../components/HomeOne/Appointment";
import Projects from "../components/HomeOne/Projects";
import Pricing from "../components/HomeOne/Pricing";
import blog1 from "/src/assets/HomeOne/b1.jpg";
import blog2 from "/src/assets/HomeOne/b2.jpg";
import blog3 from "/src/assets/HomeOne/b3.jpg";
import meta from "/src/assets/HomeOne/meta.png";
import Brand from "../components/HomeOne/Brand";

import FooterSocial from "../components/Footer/FooterSocial";
import CallToAction from "../components/HomeOne/CallToAction";
import call from "/src/assets/HomeOne/call-to-action.jpg";
import StSubscribe from "../components/HomeOne/StSubscribe";
const HomeOne = () => {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animate__animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);
  return (
    <div>
      {/* ST__Featured__Slider */}
      <FeaturedSlider />

      {/* ST__Slider */}
      <section className="relative">
        <STslider />
      </section>

      {/* ST__About__Area */}

      <section className="relative py-[100px] ">
        <div
          className="grid lg:grid-cols-2 gap-[48px] container  wow animate__fadeInUp"
          data-wow-duration="1s"
        >
          <div>
            <img src={about} alt="About" className=" h-auto max-w-full " />
          </div>
          <div className="mt-4 sm:ml-3">
            <h5 className="capitalize relative   left-10 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              about the company
            </h5>
            <h2 className="mt-[22px]">
              Logistics Solutions That Deliver Excellence
            </h2>
            <p className="my-[23px]">
              Payment solutions enable businesses to accept payments Payment
              stions enable businesses to accept payments from ctly customers
              ctly securely. stions enable businesses to accept payments from
              ctly customers ctly securely.
            </p>
            <div className="group lg:flex block lg:text-left text-center gap-[22px] items-center py-[31px] px-[59px] border-l-[5px] border-solid border-primary bg-[#f5f4f9] mt-[35px] mx-auto">
              <div className=" relative inline-block py-[17px] px-[18px] bg-white border border-dashed border-primary">
                <img
                  src={icon}
                  className="max-w-full xl:w-[72px]   transition-all duration-500 scale-100 group-hover:scale-[.8] "
                  alt="About icon"
                />
              </div>
              <div>
                <h4 className="mb-2 text-secondary">Real-Time Tracking</h4>
                <p>
                  There are many variations of passages of lorem suffered
                  alteration in some form, by injected
                </p>
              </div>
            </div>
            <div className="sm:flex block items-center gap-8 mt-2">
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
              <div className="flex gap-7 mt-6">
                <div className="inline-block h-[64px] w-[64px] bg-[#fce6ce] text-primary leading-[64px] text-center text-[22px] rounded-[50%]">
                  <Link to="tel:+562015550124">
                    <FontAwesomeIcon icon={faPhone} className="" />
                  </Link>
                </div>
                <div className="text-lg font-medium">
                  <span className="block text-primary">Emergency</span>
                  +56 (201) 555-0124
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ST__Service__Area */}
      <section className="bg-[#f5f4f9] pt-[100px] pb-20">
        <div className="container">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration="1s"
          >
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Types of Loglstice
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Popular Logistics Services</h2>
          </div>
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
          >
            <Services
              img={serviceOne}
              icon={serviceIconOne}
              title="Transport by Road"
            />
            <Services
              img={serviceTwo}
              icon={serviceIconTwo}
              title="Safety Garunteed"
            />
            <Services
              img={serviceThree}
              icon={serviceIconthree}
              title="Managing logistics for"
            />
          </div>
        </div>
      </section>

      {/* ST__Client__Area */}
      <section className="pt-[100px] pb-20">
        <div className="container">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration=".8s"
          >
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              What Our Clients
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Stories From Our Users</h2>
          </div>
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
          >
            <Testimonial img={t1} client="Sahinur Islam" />
            <Testimonial img={t2} client="Madriya Merin" />
            <Testimonial img={t3} client="Darrell Steward" />
          </div>
        </div>
      </section>

      {/* ST__Appionment__Area */}

      <section className="relative bg-primary pt-[100px] overflow-hidden z-[1]">
        <Appointment />
      </section>

      {/* ST__Project__Area */}
      <section className="py-[100px]">
        <div className="container">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration=".6s"
          >
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Deltvering Results
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Proud to Deliver Excellence</h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-8 ">
            <div className="wow animate__fadeInUp" data-wow-duration=".6s">
              <Projects img={project1} title="Experts in technology fields" />
            </div>

            <div className="wow animate__fadeInUp" data-wow-duration=".6s">
              <Projects img={project2} title="Experts in technology fields" />

              <div
                className=" mt-1 wow animate__fadeInUp"
                data-wow-duration=".6s"
              >
                <Projects img={project3} title="Experts in technology fields" />
              </div>
            </div>

            <div className="wow animate__fadeInUp" data-wow-duration=".6s">
              <Projects img={project4} title="Experts in technology fields" />
            </div>
          </div>
        </div>
      </section>

      {/* ST__Price__Area */}
      <section className="pb-[100px]">
        <div className="container">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration=".6s"
          >
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Pricing & Plans
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Effective & Affordable Plans</h2>
          </div>
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 wow animate__fadeInUp"
            data-wow-duration=".6s"
          >
            <Pricing title="basic plan" price={65} />
            <Pricing title="standard plan" price={79} />
            <Pricing title="premium plan" price={93} />
          </div>
        </div>
      </section>

      {/*ST__Call_To_Action  */}

      <CallToAction bgImg={call} />

      {/* ST__Subscribe__Area */}
      <StSubscribe img={call2} />

      {/* ST__Blog__Area */}
      <section className="relative pb-[100px]">
        <div className="container">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration=".6s"
          >
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Our News from Blog
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">The latest News & Best Blog</h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div className="wow animate__fadeInUp" data-wow-duration=".6s">
              <img src={blog1} className="mb-[30px] w-full" alt="Blog" />
              <div
                style={{
                  filter: "drop-shadow(0px 1px 20px rgba(0, 0, 0, 0.08))",
                }}
                className="relative bg-white rounded-[5px] pt-[42px] pb-7 px-[50px] overflow-hidden before:absolute before:content-[''] before:top-[100%] before:left-[82%] before:w-[55px] before:h-[55px] before:border-2 before:border-dashed before:border-primary before:rounded-[50px] before:duration-500 before:hover:top-[90%] after:absolute after:top-[90%] after:left-[100%] after:duration-500 after:w-[55px] after:h-[55px] after:border-2 after:border-dashed after:border-secondary after:rounded-[50px] after:-z-[1] after:hover:left-[88%] after:hover:duration-500"
              >
                <div className="relative mb-5 before:absolute before:content-[''] before:bg-[#ebebeb] before:h-9 before:w-[1px] before:top-2 before:left-[141px]">
                  <div className="flex flex-wrap justify-between">
                    <div className="flex items-center gap-[15px] ">
                      <img src={meta} className="rounded-[50%]" alt="Author" />
                      <span className="font-medium text-[#292930] capitalize">
                        by admin
                      </span>
                    </div>
                    <div className="flex items-center gap-1 font-medium xl:ml-0 ml-14">
                      <FontAwesomeIcon
                        icon={faComment}
                        className="text-primary"
                      />
                      <span>{6} Comment</span>
                    </div>
                  </div>
                  <div className="block">
                    <Link
                      to="/"
                      className="inline  xl:text-[29px] lg:text-[19px] text-[19px] xl:leading-[42px] leading-[30px] mb-2 text-secondary font-medium mt-[21px] bg-no-repeat bg-[linear-gradient(transparent_calc(100%-1px),currentColor_1px)] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.32,0.15,1.17)] bg-[size:0_100%] capitalize hover:bg-[size:100%_100%] hover:text-primary"
                    >
                      New Additions to our great Metro trucks.
                    </Link>
                  </div>
                  <Link
                    to="/"
                    className="inline mt-2 text-[17px] text-primary capitalize font-medium  bg-no-repeat bg-[linear-gradient(transparent_calc(100%-1px),currentColor_1px)] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.32,0.15,1.17)] bg-[size:0_100%]  hover:bg-[size:100%_100%] hover:text-primary"
                  >
                    read more
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className="inline-block ml-0 -rotate-[49deg]  relative text-lg top-0 left-[2px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  filter: "drop-shadow(0px 1px 20px rgba(0, 0, 0, 0.08))",
                }}
                className="relative wow animate__fadeInUp bg-white rounded-[5px] pt-[42px] pb-7 px-[50px] mb-[30px] overflow-hidden before:absolute before:content-[''] before:top-[100%] before:left-[82%] before:w-[55px] before:h-[55px] before:border-2 before:border-dashed before:border-primary before:rounded-[50px] before:duration-500 before:hover:top-[90%] after:absolute after:top-[90%] after:left-[100%] after:duration-500 after:w-[55px] after:h-[55px] after:border-2 after:border-dashed after:border-secondary after:rounded-[50px] after:-z-[1] after:hover:left-[88%] after:hover:duration-500"
                data-wow-duration=".6s"
              >
                <div className="relative mb-5 before:absolute before:content-[''] before:bg-[#ebebeb] before:h-9 before:w-[1px] before:top-2 before:left-[141px]">
                  <div className="flex flex-wrap justify-between">
                    <div className="flex items-center gap-[15px] ">
                      <img src={meta} className="rounded-[50%]" alt="Author" />
                      <span className="font-medium text-[#292930] capitalize">
                        by admin
                      </span>
                    </div>
                    <div className="flex items-center gap-1 font-medium xl:ml-0 ml-14">
                      <FontAwesomeIcon
                        icon={faComment}
                        className="text-primary"
                      />
                      <span>{6} Comment</span>
                    </div>
                  </div>
                  <div className="block">
                    <Link
                      to="/"
                      className="inline  xl:text-[29px] lg:text-[19px] text-[19px] xl:leading-[42px] leading-[30px] mb-2 text-secondary font-medium mt-[21px] bg-no-repeat bg-[linear-gradient(transparent_calc(100%-1px),currentColor_1px)] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.32,0.15,1.17)] bg-[size:0_100%] capitalize hover:bg-[size:100%_100%] hover:text-primary"
                    >
                      New Additions to our great Metro trucks.
                    </Link>
                  </div>
                  <Link
                    to="/"
                    className="inline mt-2 text-[17px] text-primary capitalize font-medium  bg-no-repeat bg-[linear-gradient(transparent_calc(100%-1px),currentColor_1px)] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.32,0.15,1.17)] bg-[size:0_100%]  hover:bg-[size:100%_100%] hover:text-primary"
                  >
                    read more
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className="inline-block ml-0 -rotate-[49deg]  relative text-lg top-0 left-[2px]"
                    />
                  </Link>
                </div>
              </div>
              <img src={blog2} className=" w-full" alt="Blog" />
            </div>
            <div className="wow animate__fadeInUp" data-wow-duration=".6s">
              <img src={blog3} className="mb-[30px] w-full" alt="Blog" />
              <div
                style={{
                  filter: "drop-shadow(0px 1px 20px rgba(0, 0, 0, 0.08))",
                }}
                className="relative bg-white rounded-[5px] pt-[42px] pb-7 px-[50px] overflow-hidden before:absolute before:content-[''] before:top-[100%] before:left-[82%] before:w-[55px] before:h-[55px] before:border-2 before:border-dashed before:border-primary before:rounded-[50px] before:duration-500 before:hover:top-[90%] after:absolute after:top-[90%] after:left-[100%] after:duration-500 after:w-[55px] after:h-[55px] after:border-2 after:border-dashed after:border-secondary after:rounded-[50px] after:-z-[1] after:hover:left-[88%] after:hover:duration-500"
              >
                <div className="relative mb-5 before:absolute before:content-[''] before:bg-[#ebebeb] before:h-9 before:w-[1px] before:top-2 before:left-[141px]">
                  <div className="flex flex-wrap justify-between">
                    <div className="flex items-center gap-[15px] ">
                      <img src={meta} className="rounded-[50%]" alt="Author" />
                      <span className="font-medium text-[#292930] capitalize">
                        by admin
                      </span>
                    </div>
                    <div className="flex items-center gap-1 font-medium xl:ml-0 ml-14">
                      <FontAwesomeIcon
                        icon={faComment}
                        className="text-primary"
                      />
                      <span>{6} Comment</span>
                    </div>
                  </div>
                  <div className="block">
                    <Link
                      to="/"
                      className="inline  xl:text-[29px] lg:text-[19px] text-[19px] xl:leading-[42px] leading-[30px] mb-2 text-secondary font-medium mt-[21px] bg-no-repeat bg-[linear-gradient(transparent_calc(100%-1px),currentColor_1px)] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.32,0.15,1.17)] bg-[size:0_100%] capitalize hover:bg-[size:100%_100%] hover:text-primary"
                    >
                      New Additions to our great Metro trucks.
                    </Link>
                  </div>
                  <Link
                    to="/"
                    className="inline mt-2 text-[17px] text-primary capitalize font-medium  bg-no-repeat bg-[linear-gradient(transparent_calc(100%-1px),currentColor_1px)] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.32,0.15,1.17)] bg-[size:0_100%]  hover:bg-[size:100%_100%] hover:text-primary"
                  >
                    read more
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className="inline-block ml-0 -rotate-[49deg]  relative text-lg top-0 left-[2px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ST__Brand_Area */}

      <section className="pb-[120px] border-t border-solid border-[#ebebeb]">
        <div className="container">
          <div
            className=" text-center wow animate__fadeInUp"
            data-wow-duration=".6s"
          >
            <h4 className="text-2xl text-secondary font-medium py-[13px] sm:px-[50px] px-[13px] inline-block relative -top-7 m-auto bg-white">
              Our Partners & Suppoters
            </h4>
          </div>
          <Brand />
        </div>
      </section>

      {/* ST__Footer__Area */}
      <footer className="pt-[120px] pb-8 overflow-hidden bg-[url('/src/assets/HomeOne/footer-bg.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="container">
          <div className="border-b border-dashed border-primary pb-[121px]">
            <div
              className="grid lg:grid-cols-4 md:grid-cols-2 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <div>
                <Link to="/">
                  <img src="/src/assets/HomeOne/logo.png" alt="Logo" />
                </Link>
                <p className="text-white w-[80%] mt-6">
                  Feugiat a ligula rutrum luctus primis ultrice nteger congue
                  magna at pretium purus a pretium ligula rutrum and luctus
                </p>
                <FooterSocial />
              </div>
              <div>
                <h5 className="relative text-white mb-[43px] lg:mt-0 mt-6 before:absolute before:content-[''] before:-bottom-[17px] before:left-0 before:bg-primary before:w-[100px] before:h-[1px]">
                  Our Navigation
                </h5>
                <div>
                  <div>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      Airplane Fright
                    </Link>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      About Portx
                    </Link>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      meet the team
                    </Link>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      News & Med
                    </Link>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      our project
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="relative text-white mb-[43px] lg:mt-0 mt-6 before:absolute before:content-[''] before:-bottom-[17px] before:left-0 before:bg-primary before:w-[100px] before:h-[1px]">
                  Our Service
                </h5>
                <div>
                  <div>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      Reliability & Punctuality
                    </Link>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      Trusted Franchise
                    </Link>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      Warehoues Storage
                    </Link>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      Real Time Tracking
                    </Link>
                    <Link
                      to="/"
                      className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className="mr-[7px] text-primary"
                      />
                      Transparent Pricing
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h5 className=" relative text-white mb-[43px] lg:mt-0 mt-6 before:absolute before:content-[''] before:-bottom-[17px] before:left-0 before:bg-primary before:w-[100px] before:h-[1px]">
                  Newsletter
                </h5>

                <p className="text-white ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
                <div className="mt-[45px] relative">
                  <form>
                    <input
                      type="email"
                      className="relative text-base text-[939393] font-normal w-[89%] py-[18px] px-[17px]"
                    />
                    <button
                      type="submit"
                      className="bg-primary py-3 px-[19px] absolute top-[6px] md:right-[14%] right-[13%]"
                    >
                      <FontAwesomeIcon
                        icon={faAnglesRight}
                        className=" text-white"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <span className=" text-white inline-block mt-8">
            &copy; Copyrights 2024
            <Link
              to="/"
              className="text-primary underline inline-block ml-1 mr-1"
            >
              sTheme-IT
            </Link>
            All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default HomeOne;
