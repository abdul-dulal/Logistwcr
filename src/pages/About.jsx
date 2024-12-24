import AboutUs from "../components/HomeTwo/AboutUs";
import ServiceTwo from "../components/HomeTwo/ServiceTwo";
import BreadCumb from "../components/Others/BreadCumb";

import service1 from "/src/assets/HomeTwo/service3.jpg";
import service2 from "/src/assets/HomeTwo/service2.jpg";
import service3 from "/src/assets/HomeTwo/service1.jpg";
import icon1 from "/src/assets/HomeTwo/icon1.png";
import icon2 from "/src/assets/HomeTwo/icon2.png";
import icon3 from "/src/assets/HomeTwo/icon3.png";
import Pricing from "../components/HomeOne/Pricing";
import CustomerSupport from "../components/HomeTwo/CustomerSupport";

import Team from "../components/HomeTwo/Team";
import tm1 from "/src/assets/team/team.png";
import tm2 from "/src/assets/team/team2.png";
import tm3 from "/src/assets/team/team3.png";
import tm4 from "/src/assets/team/team4.png";
import Subscribe from "../components/HomeThree/Subscribe";

const About = () => {
  return (
    <div>
      <BreadCumb title="About Us" currentPage="About Us" />

      {/* ST__About */}
      <AboutUs />

      {/* ST__Service */}
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

      {/* ST__Price */}
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

      {/* ST__Appionment */}
      <CustomerSupport />

      {/* ST__Team */}
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

      {/* ST__Subscribe */}

      <Subscribe />
    </div>
  );
};

export default About;
