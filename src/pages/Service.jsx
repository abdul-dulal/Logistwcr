import BreadCumb from "../components/Others/BreadCumb";

import serviceOne from "/src/assets/HomeOne/1-s-1.jpg";
import serviceTwo from "/src/assets/HomeOne/1-s-2.jpg";
import serviceThree from "/src/assets/HomeOne/1-s-3.jpg";
import serviceIconOne from "/src/assets/HomeOne/dallar-icon.png";
import serviceIconTwo from "/src/assets/HomeOne/ship-icon.png";
import serviceIconthree from "/src/assets/HomeOne/home-icon.png";
import Appointment from "../components/HomeOne/Appointment";

import Testimonial from "../components/HomeOne/Testimonial";
import t1 from "/src/assets/HomeOne/1-1.png";
import t2 from "/src/assets/HomeOne/1-2.png";
import t3 from "/src/assets/HomeOne/1-3.png";
import ServiceOne from "../components/HomeOne/ServiceOne";
const Service = () => {
  return (
    <div>
      <BreadCumb title="Service" currentPage="Service" />
      {/* ST__Service */}
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
              img={serviceOne}
              icon={serviceIconOne}
              title="Transport by Road"
            />
            <ServiceOne
              img={serviceTwo}
              icon={serviceIconTwo}
              title="Safety Garunteed"
            />
            <ServiceOne
              img={serviceThree}
              icon={serviceIconthree}
              title="Managing logistics for"
            />
          </div>
        </div>
      </section>

      {/* ST__Appionment */}
      <section className="relative bg-primary pt-[100px] overflow-hidden z-[1]">
        <Appointment />
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
            data-wow-duration=".8s"
          >
            <Testimonial img={t1} client="Sahinur Islam" />
            <Testimonial img={t2} client="Madriya Merin" />
            <Testimonial img={t3} client="Darrell Steward" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
