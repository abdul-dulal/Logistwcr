import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeaturedSlider from "../components/HomeOne/FeaturedSlider";
import STslider from "../components/HomeOne/STslider";
import about from "/src/assets/HomeOne/about.jpg";
import icon from "/src/assets/HomeOne/icon5.png";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
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

const HomeOne = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {/* ST__Featured__Slider */}
      <FeaturedSlider />

      {/* ST__Slider */}
      <section className="relative">
        <STslider />
      </section>

      {/* ST__About__Area */}
      <ScrollTrigger onEnter={() => setVisible(true)}>
        {visible && (
          <section className="relative py-[100px] ">
            <div className="grid lg:grid-cols-2 gap-[48px] container slider_button">
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
                  stions enable businesses to accept payments from ctly
                  customers ctly securely. stions enable businesses to accept
                  payments from ctly customers ctly securely.
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
                    <h3 className="mb-2 text-secondary">Real-Time Tracking</h3>
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
        )}
      </ScrollTrigger>

      {/* ST__Service__Area */}
      <section className="bg-[#f5f4f9] pt-[100px] pb-20">
        <div className="container">
          <div className="text-center">
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Types of Loglstice
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Popular Logistics Services</h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
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
          <div className="text-center">
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              What Our Clients
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Stories From Our Users</h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
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
          <div className="text-center">
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Deltvering Results
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Proud to Deliver Excellence</h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            <Projects img={project1} />

            <div className="">
              <Projects img={project2} />

              <div className=" mt-1">
                <Projects img={project3} />
              </div>
            </div>

            <Projects img={project4} />
          </div>
        </div>
      </section>

      {/* ST__Project__Area */}
      <section className="pb-[100px]">
        <div className="container">
          <div className="text-center">
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Pricing & Plans
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Effective & Affordable Plans</h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <Pricing title="basic plan" price={65} />
            <Pricing title="standard plan" price={79} />
            <Pricing title="premium plan" price={93} />
          </div>
        </div>
      </section>

      {/*ST__Call_To_Action  */}

      <section className="relative pt-[180px] pb-[450px]  bg-[url('/src/assets/HomeOne/call-to-action.jpg')]  bg-cover bg-no-repeat bg-center">
        <h2 className="text-white text-center">
          Looking For The Best Logistics <br />
          Transport Service?
        </h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="">
            <Link
              to="/"
              className={` sm:mt-10 mt-5 relative inline-block bg-primary text-lg capitalize text-white py-[16px] px-[32px] overflow-hidden transition-all duration-500 z-[1]  before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-secondary before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
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
              className={`group sm:mt-10 mt-5 relative inline-block bg-primary text-lg capitalize text-white py-[16px] px-[32px] overflow-hidden transition-all duration-500 z-[1] hover:text-secondary before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-white before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
            >
              read more
              <FontAwesomeIcon
                className="icon ml-4 -rotate-[49deg]  text-[18px] duration-500 group-hover:text-secondary group-hover:duration-500 "
                icon={faArrowRight}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ST__Subscribe__Area */}

      <section className="relative">
        <div className="container">
          <div
            className="bg-white grid grid-cols-12 -mt-[267px] ml-[35px] items-center"
            style={{
              filter: "drop-shadow(0px 1px 20px rgba(0, 0, 0, 0.08))",
            }}
          >
            <div className="lg:col-span-8 col-span-12 lg:pt-0 pt-10">
              <div className="md:px-[70px] px-8">
                <h3 className="lg:text-[32px] text-[25px] mb-1 font-semibold">
                  Coverage That Protect Your World!
                </h3>
                <span className="text-lg text-secondary">
                  Not sure which policy suits you the best?
                </span>
                <form>
                  <div className="relative mt-[55px]">
                    <input
                      type="email"
                      placeholder="type your email"
                      className="w-full h-[62px] border border-solid border-[#ebebeb] outline-none focus:outline-none pl-8 placeholder:text-lg placeholder:text-[#747474] placeholder:font-normal placeholder:capitalize"
                    />
                    <button className="bg-primary text-white py-4 px-[38px] text-2xl font-medium sm:absolute right-0 top-0 sm:mt-0 mt-7">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 lg:px-0 px-4">
              <img
                src={call2}
                className="relative w-full xl:left-[15px] lg:pt-0 pt-10"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeOne;
