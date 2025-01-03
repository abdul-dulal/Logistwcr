import {
  faEnvelope,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BreadCumb from "../components/Others/BreadCumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div>
      <BreadCumb title="Contact" currentPage="Contact" />
      <section className="py-[100px]">
        <div
          style={{ filter: "drop-shadow(0px 1px 25.5px rgba(0, 0, 0, 0.15))" }}
          className="bg-white py-[60px] sm:px-[25px]"
        >
          <div className="container">
            <div className="grid lg:grid-cols-12 lg:gap-9 items-center">
              <div className="lg:col-span-5 col-span-12">
                <div className="pt-[78px] pr-[36px] pb-[46px] pl-[36px] bg-secondary">
                  <h3 className="sm:text-4xl text-[25px] text-white font-semibold border-b border-solid border-primary  capitalize pb-[26px] mb-10">
                    Contact Informatlon
                  </h3>
                  <div className="sm:flex gap-5  items-center group mb-[30px] bg-white p-4 sm:text-left text-center">
                    <div className="inline-block w-[59px] h-[59px] leading-[59px] text-center  bg-secondary text-white text-[22px] duration-500 group-hover:bg-primary">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                      <h5 className="text-secondary capitalize">Address</h5>
                      <span className="block">
                        7515 Carriage Court, Coachella, CA, 92236 USA
                      </span>
                    </div>
                  </div>
                  <div className="sm:flex gap-5  items-center group mb-[30px] bg-white p-4 sm:text-left text-center">
                    <div className="inline-block w-[59px] h-[59px] leading-[59px] text-center  bg-secondary text-white text-[22px] duration-500 group-hover:bg-primary">
                      <FontAwesomeIcon icon={faMobileScreen} />
                    </div>
                    <div>
                      <h5 className="text-secondary capitalize">
                        Contact Number
                      </h5>
                      <span className="block">+6656 1598596969</span>
                    </div>
                  </div>
                  <div className="sm:flex gap-5  items-center group mb-[30px] bg-white p-4 sm:text-left text-center">
                    <div className="inline-block w-[59px] h-[59px] leading-[59px] text-center  bg-secondary text-white text-[22px] duration-500 group-hover:bg-primary">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h5 className="text-secondary capitalize">Email Us</h5>
                      <span className="block">Example@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 col-span-12">
                <h2 className="relative sm:mt-0 mt-5 before:absolute before:content-[''] before:left-2 before:-bottom-2 before:w-[125px] before:h-[1px] before:bg-secondary">
                  Get A Quote
                </h2>
                <form>
                  <div className="grid md:grid-cols-2 gap-6 mt-10">
                    <input
                      type="text"
                      placeholder="your name"
                      className="bg-[#f3f3f3] w-full h-[60px] rounded-[5px]  outline-none focus:outline-none px-8 placeholder:capitalize wow animate__fadeInUp"
                      data-wow-duration=".8s"
                    />
                    <input
                      type="email"
                      placeholder="email address"
                      className="bg-[#f3f3f3] w-full h-[60px] rounded-[5px]  outline-none focus:outline-none px-8 placeholder:capitalize wow animate__fadeInUp"
                      data-wow-duration=".8s"
                    />
                    <input
                      type="tel"
                      placeholder="phone number"
                      className="bg-[#f3f3f3] w-full h-[60px] rounded-[5px]  outline-none focus:outline-none px-8 placeholder:capitalize wow animate__fadeInUp"
                      data-wow-duration=".8s"
                    />
                    <input
                      type="text"
                      placeholder="subject"
                      className="bg-[#f3f3f3] w-full h-[60px] rounded-[5px]  outline-none focus:outline-none px-8 placeholder:capitalize wow animate__fadeInUp"
                      data-wow-duration=".8s"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="write your question here"
                    className="bg-[#f3f3f3] w-full h-[60px] rounded-[5px]  outline-none focus:outline-none px-8 mt-5 placeholder:capitalize wow animate__fadeInUp"
                    data-wow-duration=".8s"
                  />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="write your question here"
                    className="bg-[#f3f3f3] w-full  rounded-[5px]  outline-none focus:outline-none px-8 py-[15px] mt-5 placeholder:capitalize wow animate__fadeInUp"
                    data-wow-duration=".8s"
                  ></textarea>
                  <button
                    type="submit"
                    to="/"
                    className={` mt-6 relative inline-block bg-primary text-xl capitalize text-white py-[18px] px-[42px] overflow-hidden transition-all duration-500 z-[1]  before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-secondary before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] wow animate__fadeInUp `}
                    data-wow-duration=".8s"
                  >
                    request quote
                    <FontAwesomeIcon
                      className="icon ml-4 -rotate-[49deg]  text-[18px] text-white "
                      icon={faArrowRight}
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grap-map grayscale relative leading-[.8] overflow-hidden">
        <iframe
          style={{ filter: "grayscale(100%)" }}
          className="w-full h-[550px] border-none"
          src="https://www.google.com/maps/embed/v1/place?q=West+Englewood+Chicago,+IL+60636+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
