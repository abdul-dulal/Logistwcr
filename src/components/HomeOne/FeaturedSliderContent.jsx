/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FeaturedSliderContent = ({
  activeIndex,
  setActiveIndex,
  title,
  titleTwo,
  subTitle,
  index,
  bgImg,
  swiperRef,
}) => {
  return (
    <div>
      <div
        className={`  relative  md:h-[850px] h-[550px]   flex items-center  top-0 left-0 w-full  -z-[1] transition-all ease-linear duration-[7000ms]  ${
          activeIndex == index ? "scale-[1.3]" : ""
        }  `}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute md:top-[27%] top-[16%] left-0 w-full h-full">
        <div className="container mx-auto  relative">
          <div className="">
            <h5
              className={`relative sm:text-xl text-base sm:mb-0 mb-3 text-white font-normal left-10 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-white after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-primary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle ${
                activeIndex == index ? "slider_subTitle" : ""
              } `}
            >
              {subTitle}
            </h5>
            <h2
              className={`  text-white lg:text-[72px] md:text-[60px] sm:text-[50px]   text-[26px]  lg:leading-[84px] md:leading-[70px] sm:leading-[60px]  leading-[38px] font-semibold  capitalize  mb-3 relative ${
                activeIndex == index ? "slider_title" : ""
              }  `}
            >
              {title} <br className="sm:block hidden" /> {titleTwo}
            </h2>
            <p
              className={`text-white mt-[25px] text-lg ${
                activeIndex == index ? "slider_desc" : ""
              }`}
            >
              Cursus in hac habitasse platea dictumst. Interdum consectetur
              libero id faucibus nisl <br /> tincidunt eget. Dui vivamus arcu
              felis bibendum ut tristique et egestas quis.
            </p>
            <div className="">
              <Link
                to="/"
                className={`more_btn mt-10 relative inline-block bg-primary text-xl capitalize text-white py-[18px] px-[42px] overflow-hidden transition-all duration-500 z-[1] hover:text-secondary before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-white before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] ${
                  activeIndex == index ? "slider_button" : ""
                }`}
              >
                more details
                <FontAwesomeIcon
                  className="icon ml-4 -rotate-[49deg]  text-[22px] text-white "
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </div>
          <div className="">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="slider-button absolute   sm:top-[65%] xs:top-[43%] top-[42%]   transform -translate-y-1/2 p-4 bg-primary text-white rounded-full cursor-pointer  transition-all ease-out duration-300     xs:right-5 right-3 group-hover:transition-all group-hover:ease-out group-hover:duration-300 z-10  after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
            >
              {/* <FaAngleLeft size={22} />j */}
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="slider-button absolute    sm:top-[92%] xs:top-[85%] top-[83%] transform -translate-y-1/2  p-4 bg-primary text-white rounded-full cursor-pointer  transition-all ease-out duration-300 z-10 hover:bg-primary   xs:right-5 right-3 group-hover:transition-all group-hover:ease-out group-hover:duration-300 after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
            >
              {/* <FaAngleRight size={22} /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSliderContent;
