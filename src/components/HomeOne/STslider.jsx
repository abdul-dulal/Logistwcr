import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import icon1 from "/src/assets/HomeOne/slider-icon1.png";
import icon2 from "/src/assets/HomeOne/slider-icon2.png";
import icon3 from "/src/assets/HomeOne/slider-icon3.png";
import icon4 from "/src/assets/HomeOne/slider-icon4.png";
import { Link } from "react-router-dom";
import STsliderContentOne from "./STsliderContentOne";

const STslider = () => {
  return (
    <div className="relative bg-secondary pb-[60px]">
      <div className="wow animate__fadeInUp" data-wow-duration=".3s">
        <Swiper
          spaceBetween={2}
          speed={1000}
          loop={true}
          className="relative"
          breakpoints={{
            620: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: -10,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: -10,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: -10,
            },
          }}
        >
          <SwiperSlide>
            <STsliderContentOne icon={icon1} title=" Transparent Pricing" />
          </SwiperSlide>
          <SwiperSlide>
            <STsliderContentOne icon={icon2} title="Packaging Distri" />
          </SwiperSlide>
          <SwiperSlide>
            <STsliderContentOne icon={icon3} title="Real Time Tracking" />
          </SwiperSlide>
          <SwiperSlide>
            <STsliderContentOne icon={icon4} title="Warehoues Storage" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="wow animate__fadeInUp" data-wow-duration=".5s">
        <p className="text-white text-center text-lg font-normal mt-14">
          Our list of services does not end here. Find out how we can help you
          and your business.
          <Link
            className="relative inline-block capitalize text-primary ml-3 before:absolute before:content-[''] before:bottom-0 before:right-0 before:bg-primary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
            to="/"
          >
            more services
          </Link>
        </p>
      </div>
    </div>
  );
};

export default STslider;
