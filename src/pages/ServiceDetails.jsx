import { Link } from "react-router-dom";
import BreadCumb from "../components/Others/BreadCumb";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceDetails = () => {
  return (
    <div>
      <BreadCumb title="Service Details" currentPage="Service Details" />

      {/* ST_Service__Details */}

      <section className="py-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-9">
            <div className="lg:col-span-4 col-span-12">
              <div className="lg:pl-[30px]">
                <div>
                  <Link
                    to="/"
                    className="flex justify-between bg-[#f7f6f1] py-[18px] px-8 lg:text-[22px] text-lg capitalize font-medium text-secondary border border-dashed border-[#f7f6f1] hover:border-primary duration-500 mb-5"
                  >
                    Air Freight
                    <span className="">
                      <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="flex justify-between bg-[#f7f6f1] py-[18px] px-8 lg:text-[22px] text-lg capitalize font-medium text-secondary border border-dashed border-[#f7f6f1] hover:border-primary duration-500 mb-5"
                  >
                    sea freight
                    <span className="">
                      <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="flex justify-between bg-[#f7f6f1] py-[18px] px-8 lg:text-[22px] text-lg capitalize font-medium text-secondary border border-dashed border-[#f7f6f1] hover:border-primary duration-500 mb-5"
                  >
                    road service
                    <span className="">
                      <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="flex justify-between bg-[#f7f6f1] py-[18px] px-8 lg:text-[22px] text-lg capitalize font-medium text-secondary border border-dashed border-[#f7f6f1] hover:border-primary duration-500 mb-5"
                  >
                    other solution
                    <span className="">
                      <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="flex justify-between bg-[#f7f6f1] py-[18px] px-8 lg:text-[22px] text-lg capitalize font-medium text-secondary border border-dashed border-[#f7f6f1] hover:border-primary duration-500 mb-5"
                  >
                    train freight
                    <span className="">
                      <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="flex justify-between bg-[#f7f6f1] py-[18px] px-8 lg:text-[22px] text-lg capitalize font-medium text-secondary border border-dashed border-[#f7f6f1] hover:border-primary duration-500 mb-5"
                  >
                    land transport
                    <span className="">
                      <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                  </Link>
                </div>
                <div className="bg-[url('/src/assets/service-details/s-bg.jpg')] bg-cover bg-no-repeat">
                  <div className="py-12 text-center">
                    <h3 className="lg:text-[36px] text-[25px] text-white font-semibold text-center mb-8">
                      Contact withus for <br /> Any advice
                    </h3>
                    <img
                      src="/src/assets/service-details/telephone.png"
                      className="block m-auto"
                      alt="Telephone"
                    />
                    <span className="inline-block text-center text-[#ededed] mt-[35px] mb-5">
                      Need help? Talk to an expert
                    </span>
                    <h3 className="lg:text-[30px] text-xl text-[#ededed] text-center font-semibold">
                      +892 12311 9999
                    </h3>
                  </div>
                </div>
                <div>
                  <Link
                    to="/"
                    className="flex items-center justify-center bg-primary py-[22px] px-[30px] text-white md:text-2xl text-lg font-semibold mt-[30px] duration-500 hover:bg-secondary"
                  >
                    <img
                      src="/src/assets/service-details/pdf.png"
                      className="mx-[10px]"
                      alt="PDF"
                    />
                    Download PDF File
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12 sm:mt-0 mt-8">
              <div>
                <img
                  src="/src/assets/service-details/service-details.jpg"
                  className="w-full"
                  alt="Service Details"
                />
              </div>
              <h2 className="text-secondary sm:text-[40px] text-xl  font-semibold mt-11">
                Service Overview
              </h2>
              <p className="mt-7">
                Globally optimize highly efficient solution whereas open-source
                application. Completely strategize quality internal or
                organic&quot; sources for virtual e-business. Phosfluorescently
                re-engineer enterprise markets via value-added networks.
                Seamlessly restore inexpensive e-markets vis-a-vis corporate
                intellectual capital. Holisticly reinvent compelling niche
                markets via scalable strategic.
              </p>
              <p className="mt-7">
                Globally optimize highly efficient solution whereas open-source
                application. Completely strategize quality internal or
                organic&quot; sources for virtual e-business. Phosfluorescently
                re-engineer enterprise markets via value-added networks.
                Seamlessly restore inexpensive e-markets vis-a-vis corporate
                intellectual capital. Holisticly reinvent compelling niche
                markets via scalable strategic.
              </p>
              <div className="grid lg:grid-cols-2 items-center mt-9">
                <div>
                  <img
                    src="/src/assets/service-details/thumb2.jpg"
                    className="w-full"
                    alt="Service Thumb"
                  />
                </div>
                <div className=" pl-4 ">
                  <h5 className="text-secondary capitalize border-b border-solid border-[#d5d5d5] pb-7 mt-3">
                    Global Transaction Advisory
                  </h5>
                  <ul className="mt-2">
                    <li className="relative font-medium capitalize mb-[5px] ml-[30px] before:absolute before:content-[''] before:w-[13px] before:h-[13px] before:bg-primary before:top-[9px] before:-left-7">
                      Customer engagement matters
                    </li>
                    <li className="relative font-medium capitalize mb-[5px] ml-[30px] before:absolute before:content-[''] before:w-[13px] before:h-[13px] before:bg-primary before:top-[9px] before:-left-7">
                      The Love Boat promis someg for Plan
                    </li>
                    <li className="relative font-medium capitalize mb-[5px] ml-[30px] before:absolute before:content-[''] before:w-[13px] before:h-[13px] before:bg-primary before:top-[9px] before:-left-7">
                      Research beyond the business plan
                    </li>
                    <li className="relative font-medium capitalize mb-[5px] ml-[30px] before:absolute before:content-[''] before:w-[13px] before:h-[13px] before:bg-primary before:top-[9px] before:-left-7">
                      Transportation across Europe
                    </li>
                    <li className="relative font-medium capitalize mb-[5px] ml-[30px] before:absolute before:content-[''] before:w-[13px] before:h-[13px] before:bg-primary before:top-[9px] before:-left-7">
                      Logistics ground in Asia Pacific
                    </li>
                    <li className="relative font-medium capitalize mb-[5px] ml-[30px] before:absolute before:content-[''] before:w-[13px] before:h-[13px] before:bg-primary before:top-[9px] before:-left-7">
                      Logistics ground in South America
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="text-secondary md:text-[40px] sm:text-[35px] text-[23px] font-semibold mt-11">
                Our Strengths And Advantages
              </h2>
              <p className="mt-7">
                Globally optimize highly efficient solution whereas open-source
                application. Completely strategize <br /> quality internal or
                organic&quot; sources for virtual e-business. Phosfluorescently
                re-engineer <br /> enterprise markets via value-added networks.
                Seamlessly restore inexpensive e-markets vis-a-vis <br />{" "}
                corporate intellectual capital. Holisticly reinvent compelling
                niche markets via scalable strategic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
