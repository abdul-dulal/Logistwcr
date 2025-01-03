import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import WOW from "wow.js";
import "animate.css";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about from "/src/assets/HomeOne/about-01.jpg";
import icon from "/src/assets/HomeOne/tracking.png";
import {
  faAnglesRight,
  faArrowRight,
  faArrowRightLong,
  faComment,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import serviceImg1 from "/src/assets/HomeOne/1-s-1.jpg";
import serviceImg2 from "/src/assets/HomeOne/1-s-2.jpg";
import serviceImg3 from "/src/assets/HomeOne/1-s-3.jpg";
import serviceIconOne from "/src/assets/HomeOne/dallar-icon.png";
import serviceIconTwo from "/src/assets/HomeOne/ship-icon.png";
import serviceIconthree from "/src/assets/HomeOne/home-icon.png";
import t1 from "/src/assets/HomeOne/1-1.png";
import t2 from "/src/assets/HomeOne/1-2.png";
import t3 from "/src/assets/HomeOne/1-3.png";
import project1 from "/src/assets/HomeOne/project1.jpg";
import project2 from "/src/assets/HomeOne/project2.jpg";
import project3 from "/src/assets/HomeOne/project3.jpg";
import project4 from "/src/assets/HomeOne/project4.jpg";
import call2 from "/src/assets/HomeOne/subscribe.jpg";
import Testimonial from "../components/HomeOne/Testimonial";
import shape from "/src/assets/HomeOne/air-plane.png";

import Projects from "../components/HomeOne/Projects";
import Pricing from "../components/HomeOne/Pricing";
import blog1 from "/src/assets/HomeOne/blog1.jpg";
import blog2 from "/src/assets/HomeOne/blog2.jpg";
import blog3 from "/src/assets/HomeOne/blog3.jpg";
import meta from "/src/assets/HomeOne/author.png";
import Brand from "../components/HomeOne/Brand";

import FooterSocial from "../components/Footer/FooterSocial";
import CallToAction from "../components/HomeOne/CallToAction";
import call from "/src/assets/HomeOne/subscribe-bg.jpg";
import StSubscribe from "../components/HomeOne/StSubscribe";
import slider1 from "/src/assets/slider/home1.jpg";
import slider2 from "/src/assets/slider/home2.jpg";
import FeaturedSliderContentOne from "../components/HomeOne/FeaturedSliderContentOne";

import icon1 from "/src/assets/HomeOne/slider-icon1.png";
import icon2 from "/src/assets/HomeOne/slider-icon2.png";
import icon3 from "/src/assets/HomeOne/slider-icon3.png";
import icon4 from "/src/assets/HomeOne/slider-icon4.png";
import STsliderContentOne from "../components/HomeOne/STsliderContentOne";
import ServiceOne from "../components/HomeOne/ServiceOne";
import AppoinmentLeft from "../components/HomeOne/AppoinmentLeft";

import VideoModal from "../components/HomeTwo/VideoModal";
const HomeOne = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
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
      {/* Featured__Slider */}
      <div className=" group">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <FeaturedSliderContentOne
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title="Experience The Best "
              titleTwo=" Logistic & Transport"
              subTitle="We Specialise in the transportation"
              index={0}
              bgImg={slider1}
              swiperRef={swiperRef}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedSliderContentOne
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title="Experience The Best "
              titleTwo=" Logistic & Transport"
              subTitle="We Specialise in the transportation"
              index={1}
              bgImg={slider2}
              swiperRef={swiperRef}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedSliderContentOne
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title="Experience The Best "
              titleTwo=" Logistic & Transport"
              subTitle="We Specialise in the transportation"
              index={2}
              bgImg={slider1}
              swiperRef={swiperRef}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedSliderContentOne
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title="Experience The Best "
              titleTwo=" Logistic & Transport"
              subTitle="We Specialise in the transportation"
              index={3}
              bgImg={slider2}
              swiperRef={swiperRef}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="relative bg-secondary pb-[60px]">
          <div className="wow animate__fadeInUp" data-wow-duration=".3s">
            <Swiper
              spaceBetween={2}
              speed={1000}
              loop={true}
              className="relative"
              breakpoints={{
                620: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: -10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: -10,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: -10,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: -10,
                },
              }}
            >
              <SwiperSlide>
                <STsliderContentOne icon={icon1} title=" Transparent Pricing" />
              </SwiperSlide>
              <SwiperSlide>
                <STsliderContentOne icon={icon2} title="Packaging Distri" />
              </SwiperSlide>
              <SwiperSlide>
                <STsliderContentOne icon={icon3} title="Real Time Tracking" />
              </SwiperSlide>
              <SwiperSlide>
                <STsliderContentOne icon={icon4} title="Warehoues Storage" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="wow animate__fadeInUp" data-wow-duration=".5s">
            <p className="text-white text-center text-lg font-normal mt-14">
              Our list of services does not end here. Find out how we can help
              you and your business.
              <Link
                className="relative inline-block capitalize text-primary ml-3 before:absolute before:content-[''] before:bottom-0 before:right-0 before:bg-primary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                to="/"
              >
                more services
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* About__Area */}

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

      {/* Service__Area */}
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
            <ServiceOne
              img={serviceImg1}
              icon={serviceIconOne}
              title="Transport by Road"
            />
            <ServiceOne
              img={serviceImg2}
              icon={serviceIconTwo}
              title="Safety Garunteed"
            />
            <ServiceOne
              img={serviceImg3}
              icon={serviceIconthree}
              title="Managing logistics for"
            />
          </div>
        </div>
      </section>

      {/* Client__Area */}
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

      {/* Appionment__Area */}

      <div className="relative bg-primary xl:pt-[100px] pt-10 overflow-hidden z-[1]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-9 col-span-12">
              <AppoinmentLeft />
            </div>
            <div className="col-span-3"></div>
            <div className="">
              <div className="absolute top-[33px]  -z-[1] right-0 w-[50%] h-full overflow-hidden">
                <img
                  src="/src/assets/HomeOne/appionment.jpg"
                  className="bg-cover bg-no-repeat  h-full"
                  alt="Appionment"
                />
              </div>
              <div className="absolute right-[4%] bottom-[18%] xl:block hidden">
                <img src={shape} className="w-[71%] shape" alt="" />
              </div>
              <div className="absolute top-[22%] right-[11%] lg:block hidden">
                <VideoModal />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project__Area */}
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

      {/* Price__Area */}
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
            data-wow-duration=".8s"
          >
            <Pricing title="basic plan" price={65} />
            <Pricing title="standard plan" price={79} />
            <Pricing title="premium plan" price={93} />
          </div>
        </div>
      </section>

      {/* Call_To_Action  */}

      <CallToAction bgImg={call} />

      {/* Subscribe__Area */}
      <StSubscribe img={call2} />

      {/* Blog__Area */}
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

      {/* Brand_Area */}

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

      {/* Footer__Area */}
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
