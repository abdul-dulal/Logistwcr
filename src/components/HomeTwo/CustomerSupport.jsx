import { Link } from "react-router-dom";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shape from "/src/assets/HomeTwo/shape2.png";
const CustomerSupport = () => {
  return (
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
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
              <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
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
  );
};

export default CustomerSupport;
