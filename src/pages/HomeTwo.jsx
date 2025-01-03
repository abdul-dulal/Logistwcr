import { Link } from "react-router-dom";
import FeatureSlider from "../components/HomeTwo/FeatureSlider";

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

import faq from "/src/assets/HomeTwo/faq.jpg";
import Accrodian from "../components/HomeTwo/Accrodian";
import AppionmentTwo from "../components/HomeTwo/AppionmentTwo";
import Testimonial from "../components/HomeOne/Testimonial";
import t1 from "/src/assets/HomeOne/1-1.png";
import t2 from "/src/assets/HomeOne/1-2.png";
import t3 from "/src/assets/HomeOne/1-3.png";

import blog1 from "/src/assets/HomeTwo/b1.jpg";
import blog2 from "/src/assets/HomeTwo/b2.jpg";
import blog3 from "/src/assets/HomeTwo/b3.jpg";
import BlogContent from "../components/HomeTwo/BlogContent";

import FooterTwo from "../components/Footer/FooterTwo";
import Subscribe from "../components/HomeThree/Subscribe";
import AboutUs from "../components/HomeTwo/AboutUs";
import CustomerSupport from "../components/HomeTwo/CustomerSupport";

const HomeTwo = () => {
  return (
    <div>
      {/* ST__Slider__Area */}
      <FeatureSlider />

      {/* ST__About__Area */}
      <AboutUs />

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
          <div
            className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 wow animate__fadeInUp"
            data-wow-duration=".8s"
          >
            <Team img={tm1} name="Somaiya Akter" />
            <Team img={tm2} name="Abdul Dulal" />
            <Team img={tm3} name="Monio Roman" />
            <Team img={tm4} name="Saad Alam" />
          </div>
        </div>
      </section>

      {/* ST__Appionment__Area */}
      <CustomerSupport />

      {/* ST__FAQ__Area */}
      <section className="pt-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="wow animate__fadeInUp" data-wow-duration=".8s">
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
            <div className="lg:col-span-8 col-span-12">
              <div className=" xl:px-[132px] sm:px-10 px-0 pb-[47px] ">
                <h5
                  className="relative ml-9 text-secondary capitalize  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle wow animate__fadeInUp"
                  data-wow-duration=".8s"
                >
                  Booking Appointment
                </h5>
                <h2
                  className="mb-5 text-secondary text-left wow animate__fadeInUp"
                  data-wow-duration=".8s"
                >
                  Book Transport & Logistics
                </h2>
                <AppionmentTwo />
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12">
              <div className="bg-secondary pt-[49px] pb-[43px] px-9 relative z-[1] xl:before:absolute before:content-[''] before:-top-[41px]  before:left-[20%] before:h-[210px] before:w-[210px] before:bg-secondary before:rounded-[50%] before:-z-[1]  book_info">
                <h5 className=" font-semibold text-white leading-[1.3]">
                  How Can We Help You!
                </h5>
                <p className="text-white mt-3 leading-[28px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <button>
                  <Link
                    to="/"
                    className="inline-block bg-white text-primary py-[13px] px-[28px] text-xl font-normal mt-[18px] duration-500 hover:bg-primary hover:text-white hover:duration-500"
                  >
                    contact us
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ST__Client__Area */}

      <section className="pt-[100px] pb-20 bg-[#1d1d1d]">
        <div className="container">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration=".8s"
          >
            <h5 className="relative capitalize text-white  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-white before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              What Our Clients
            </h5>
            <span className="relative  inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-white before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="text-white mb-11">Stories From Our Users</h2>
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

      {/* ST__Blog__Area */}

      <section className="py-[100px]">
        <div
          className="mb-[50px] text-center wow animate__fadeInUp"
          data-wow-duration="1s"
        >
          <h5 className="capitalize relative  mb-5 inline-block text-secondary after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
            Our News from Blog
          </h5>
          <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
          <h2 className="mb-11">The latest News & Best Blog</h2>
        </div>
        <div className="container">
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 wow animate__fadeInUp"
            data-wow-duration=".8s"
          >
            <BlogContent
              blog={blog1}
              bTitle="New Additions to our great Metro trucks."
            />
            <BlogContent
              blog={blog2}
              bTitle="Express delivery is going to slow down in 2024."
            />
            <BlogContent
              blog={blog3}
              bTitle="Varying complexity, provide long-term guarantees"
            />
          </div>
        </div>
      </section>

      {/* ST__Subscribe__Area */}

      <Subscribe />

      {/* ST__Footer__Area */}
      <FooterTwo />
    </div>
  );
};

export default HomeTwo;
