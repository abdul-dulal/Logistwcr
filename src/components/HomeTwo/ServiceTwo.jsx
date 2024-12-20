/* eslint-disable react/prop-types */
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ServiceTwo = ({ service, icon, title }) => {
  return (
    <div className="group overflow-hidden">
      <img
        src={service}
        className="w-full overflow-hidden duration-500 scale-100 group-hover:scale-[1.1]"
        alt="Service"
      />
      <div className=" bg-white pt-[21px] pb-[52px] px-8 relative left-[25px] bottom-[140px] w-[89%]  z-[1] max-h-[100%]  ">
        <div className="pt-[26px]   xl:pl-[70px]">
          <div className="flex items-center justify-center bg-secondary w-[90px] h-[100px] leading-[90px]  text-center xl:absolute left-0 top-0 rounded-b-[50px]">
            <img src={icon} alt="Icon" />
          </div>
          <div>
            <h5 className="xl:text-[23px] lg:text-xl sm:text-2xl text-[17px]  text-secondary font-semibold xl:pt-0 pt-3 duration-500 hover:text-primary">
              <Link to="/">{title}</Link>
            </h5>
            <p className="mt-15">
              Suspendisse natoque elit in eget amet volutpat, est
            </p>
          </div>
        </div>

        <div className="absolute right-0 -bottom-[27px] z-[1]">
          <Link
            to="/"
            className="inline-block py-[10px] px-[34px] bg-secondary group-hover:bg-primary group-hover:transition-all group-hover:duration-500 group-hover:ease-out text-white text-[20px] relative transition-all duration-500 before:absolute before:content-[''] before:top-[23px] before:right-[87px] before:bg-secondary before:w-8 before:h-[27px] before:z-[1] before:transition-all before:duration-500 before:[clip-path:polygon(0_0,_100%_0%,_100%_100%)] "
          >
            <FontAwesomeIcon icon={faArrowRightLong} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceTwo;
