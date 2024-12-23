import { useEffect, useRef } from "react";
import "nice-select2/dist/css/nice-select2.css";
import NiceSelect from "nice-select2";

import {
  faArrowRight,
  faBagShopping,
  faCircleCheck,
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Service from "../components/HomeThree/Service";
import roadService from "/src/assets/homeThree/bus.png";
import trainService from "/src/assets/homeThree/train.png";
import airService from "/src/assets/homeThree/air.png";
import shipService from "/src/assets/homeThree/ship.png";
import liftService from "/src/assets/homeThree/lift.png";
import port1 from "/src/assets/homeThree/port3.png";
import port from "/src/assets/homeThree/port.png";
import port2 from "/src/assets/homeThree/port3.png";
import port3 from "/src/assets/homeThree/port2.png";
import port4 from "/src/assets/homeThree/port5.png";
import Project from "../components/HomeThree/Project";
import InputField from "../components/HomeOne/InputField";
import care from "/src/assets/homeThree/care.png";
import Safe from "../components/HomeThree/Safe";
import box from "/src/assets/homeThree/box.png";
import house from "/src/assets/homeThree/home.png";
import world from "/src/assets/homeThree/world.png";
import user from "/src/assets/homeThree/user.png";
import process from "/src/assets/homeThree/process1.png";
import process2 from "/src/assets/homeThree/process2.png";
import process3 from "/src/assets/homeThree/process-3.png";
import process4 from "/src/assets/homeThree/process-4.png";
import WorkProcess from "../components/HomeThree/WorkProcess";
import TestimonialSlider from "../components/HomeThree/TestimonialSlider";
import Team from "../components/HomeTwo/Team";
import tm1 from "/src/assets/team/team.png";
import tm2 from "/src/assets/team/team2.png";
import tm3 from "/src/assets/team/team3.png";
import tm4 from "/src/assets/team/team4.png";
import blog1 from "/src/assets/HomeTwo/b1.jpg";
import blog2 from "/src/assets/HomeTwo/b2.jpg";
import blog3 from "/src/assets/HomeTwo/b3.jpg";
import BlogContent from "../components/HomeTwo/BlogContent";
import Subscribe from "../components/HomeThree/Subscribe";
const HomeThree = () => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      const niceSelect = new NiceSelect(selectRef.current, {
        // searchable: true,
        placeholder: "Select Freight",
      });

      selectRef.current.addEventListener("change", (event) => {
        console.log("Selected value:", event.target.value);
      });

      return () => {
        niceSelect.destroy();
      };
    }
  }, []);
  return (
    <div>
      {/* ST__Hero__Area */}
      <section className="py-[217px] bg-[url('/src/assets/homeThree/home-bg.jpg')] bg-no-repeat">
        <div className="container">
          <div className="inline-block border-2 border-solid border-white py-[9px] sm:px-[55px] px-5   rounded-[25px]">
            <h4 className="sm:text-lg text-base font-medium text-white">
              Logistcwr Transportation Inc
            </h4>
          </div>
          <div>
            <h2 className="xl:text-[75px] md:text-[63px] sm:text-[52px] xl:leading-[90px] md:leading-[73px] text-[34px] sm:leading-[63px] leading-[43px] font-bold  mt-4 text-white">
              Modern Logistics <br />
              Transportation
            </h2>
            <p className="font-normal mt-4 text-white">
              Take your business to the next level with Loraic new business
              <br />
              management tools. Loraic will open a new horizon for us.
            </p>
          </div>
          <div className="flex flex-wrap gap-7 mt-[29px]">
            <Link
              to="/"
              className="py-[18px] pr-[39px] pl-[42px] bg-primary duration-500 font-medium text-base rounded-[5px] text-white capitalize hover:bg-secondary"
            >
              free quote
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 -rotate-[45deg]"
              />
            </Link>
            <div className="flex gap-4">
              <div className="bg-[#9f9f9f] text-white h-[60px] w-[60px] leading-[60px] inline-block text-center rounded-[50px] text-[27px]">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <p className="text-xl text-white font-medium">Call Us now </p>
                <a
                  href="tel:01643837728"
                  className="text-xl text-white font-medium block"
                >
                  01643837728
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ST__About__Area */}
      <section className="relative py-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-[60px] items-center">
            <div>
              <img
                src="/src/assets/homeThree/about.png"
                className="w-full"
                alt="About"
              />
            </div>
            <div>
              <h6 className="">about companay</h6>
              <h3>
                We Are Proud Of Workforce <br />
                And Have Worked Hard.
              </h3>
              <p className="my-[14px] font-normal">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text <br />
                piece of classical Latin literature from 45 BC
              </p>
              <div className="flex flex-wrap sm:gap-8 gap-2">
                <ul>
                  <li className="flex items-center text-base font-bold mt-[14px]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
                    />
                    Freight Forwarding
                  </li>
                  <li className="flex items-center text-base font-bold mt-[14px]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
                    />
                    Warehousing & Delivery
                  </li>
                  <li className="flex items-center text-base font-bold mt-[14px]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
                    />
                    Costoms Clearance
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center text-base font-bold mt-[14px]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
                    />
                    Freight Forwarding
                  </li>
                  <li className="flex items-center text-base font-bold mt-[14px]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
                    />
                    Warehousing & Delivery
                  </li>
                  <li className="flex items-center text-base font-bold mt-[14px]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
                    />
                    Costoms Clearance
                  </li>
                </ul>
              </div>
              <Link
                to="/"
                className="pt-4 pr-10 pb-[18px] pl-[39px] capitalize text-white bg-secondary inline-block duration-500 rounded-[5px] mt-11 hover:bg-primary"
              >
                read more
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 -rotate-[45deg]"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ST__Service__Area */}

      <section className="relative pt-[95px] pb-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-2">
            <div>
              <h6 className="sm:text-xl text-[17px] capitalize font-bold text-primary relative inline-block ml-[120px] before:absolute before:content-[''] before:top-[11px] before:-left-[119px] before:bg-primary before:w-[105px]  before:h-1">
                Our Services
              </h6>
              <h3>
                Services We ‘ re Providing <br />
                To Our Customers
              </h3>
            </div>
            <div>
              <p className="lg:text-right leading-[26px] font-medium lg:my-0 my-5">
                There are many variations of passages of Lorem Ipsum <br />
                available, but the majority have readable content suffered
                <br />
                alteration in some
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 mt-[21px] gap-6">
            <Service img={roadService} serviceTitle="road freight" />
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <Service img={trainService} serviceTitle="train freight" />
                <Service img={airService} serviceTitle="sea freight" />
              </div>
              <div>
                <Service img={shipService} serviceTitle="air freight" />
                <Service img={liftService} serviceTitle="other freight" />
              </div>
            </div>
          </div>
          <div className="block text-center">
            <Link
              to="/"
              className=" pt-4 pr-10 pb-[18px] pl-[39px] capitalize text-white bg-secondary inline-block duration-500 rounded-[5px] mt-11 hover:bg-primary "
            >
              explore more
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 -rotate-[45deg]"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ST__Project__Area */}

      <section className="pt-[70px] pb-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div>
              <div className="">
                <h6 className="sm:text-xl text-[17px] capitalize font-bold text-primary relative inline-block ml-[120px] before:absolute before:content-[''] before:top-[11px] before:-left-[119px] before:bg-primary before:w-[105px]  before:h-1">
                  Our Services
                </h6>
                <h3>
                  The Achievement <br />
                  Of Our Project
                </h3>
                <Link
                  to="/"
                  className=" pt-4 pr-10 pb-[18px] pl-[39px] capitalize text-white bg-secondary inline-block duration-500 rounded-[5px] mt-11 hover:bg-primary "
                >
                  explore more
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 -rotate-[45deg]"
                  />
                </Link>
              </div>
            </div>
            <div>
              <Project port={port} title="Professional packing" />
            </div>
            <div>
              <Project port={port3} title="Same-day shipment" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <Project port={port1} title=" Efficient loading" />
            <Project port={port2} title="Tracking information" />
            <Project port={port4} title="Warehouse Inventory" />
          </div>
        </div>
      </section>

      {/* ST__Chose__Area */}
      <section className="relative bg-[url('/src/assets/homeThree/bg.png')] rounded-[30px] bg-no-repeat bg-cover bg-center max-w-[1800px] w-[91%] mx-auto   pt-[100px] pb-[100px] ">
        <div className=" sm:px-10 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h3
              className="sm:text-[38px] text-[27px] text-white mb-[50px] inline-block wow animate__fadeInUp"
              data-wow-duration=".6s"
            >
              Book Transport & Logistics
            </h3>
            <form>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                  <InputField icon={faUser} plc="full name *" type="text" />
                </div>
                <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                  <InputField
                    icon={faEnvelopeOpen}
                    plc="email here *"
                    type="email"
                  />
                </div>

                <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                  <InputField
                    icon={faBagShopping}
                    plc="weight. kg *"
                    type="email"
                  />
                </div>

                <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                  <InputField
                    icon={faLocationDot}
                    plc="distance. km *"
                    type="email"
                  />
                </div>
              </div>
              <div className="mt-5 ">
                <select
                  ref={selectRef}
                  className="wow animate__fadeInUp"
                  data-wow-duration=".6s"
                >
                  <option value="1">Select Freight</option>
                  <option value="2">Air Freight </option>
                  <option value="3">Sea Freight</option>
                  <option value="4">Road Freight</option>
                </select>
              </div>
              <button
                type="submit"
                className=" pt-4 pr-10 pb-[18px] pl-[39px] capitalize text-white bg-secondary inline-block duration-500 rounded-[5px] mt-11 hover:bg-primary "
              >
                explore more
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 -rotate-[45deg]"
                />
              </button>
            </form>
          </div>
          <div className="absolute xl:block hidden right-[95px] bottom-[34px] shape">
            <img src="/src/assets/homeThree/shape.png" alt="" />
          </div>
        </div>
      </section>

      {/* ST__Trusted__Area */}

      <section className="py-[87px]">
        <div className="container">
          <div className=" text-center">
            <h6 className="sm:text-xl text-[17px] capitalize font-bold text-primary relative inline-block ml-[120px] before:absolute before:content-[''] before:top-[11px] before:-left-[119px] before:bg-primary before:w-[105px]  before:h-1">
              Trusted Transport Service
            </h6>
            <h3 className="pb-[52px] ">
              We Provide Quick & Safe <br className="sm:block hidden" />
              Transportation All Over The World
            </h3>
          </div>
          <div className="flex flex-wrap justify-center">
            <Safe img={care} title="Logistics System Complete" />
            <Safe img={box} title="Shipping All Over the world" />
            <Safe img={house} title="Online Product Tracking" />
            <Safe img={world} title="International shipping services" />
            <Safe img={user} title="Great logistical support" />
          </div>
          <div className="block text-center">
            <span className="inline-block sm:text-xl text-[17px] capitalize text-secondary font-medium text-center mt-10">
              Bring them together and you overcome the ordinary-
              <Link to="/" className="text-primary ml-1">
                View More Features
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* ST__Work__Process__Area */}

      <div className="relative pt-[100px] pb-[90px] bg-[url('/src/assets/homeThree/work-bg.png')]">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-6">
            <WorkProcess img={process} serial="01" title="Select Services" />
            <WorkProcess
              img={process2}
              serial="02"
              title="parcel information"
            />
            <WorkProcess img={process3} serial="03" title="transportation" />
            <WorkProcess img={process4} serial="04" title="take our products" />
          </div>
        </div>
      </div>

      {/* ST__Testimonial__Area */}

      <section className="py-[100px]">
        <div className="container">
          <div>
            <h6 className="sm:text-xl text-[17px] capitalize font-bold text-primary relative inline-block ml-[120px] before:absolute before:content-[''] before:top-[11px] before:-left-[119px] before:bg-primary before:w-[105px]  before:h-1">
              Testimonial
            </h6>
            <h3>Customer Insights</h3>
          </div>
          <div className="">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ST__Team__Area */}

      <section className="bg-[#ebebeb] py-[100px]">
        <div className="container">
          <div className="block text-center">
            <h6>Our Most Team</h6>
            <h3 className="mb-11">Meet The Excecutive Panel</h3>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <Team img={tm1} name="Somaiya Akter" />
            <Team img={tm2} name="Abdul Dulal" />
            <Team img={tm3} name="Monio Roman" />
            <Team img={tm4} name="Saad Alam" />
          </div>
        </div>
      </section>

      {/* ST__Blog__Area */}

      <section className="py-[100px]">
        <div
          className="mb-[50px] text-center wow animate__fadeInUp"
          data-wow-duration="1s"
        >
          <h6 className="capitalize">Our News from Blog</h6>
          <h3 className="mb-11">The latest News & Best Blog</h3>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
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
    </div>
  );
};

export default HomeThree;
