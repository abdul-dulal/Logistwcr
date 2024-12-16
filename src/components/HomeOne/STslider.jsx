import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import STsliderContent from "./STsliderContent";
import icon1 from "/src/assets/HomeOne/icon1.png";
import icon2 from "/src/assets/HomeOne/icon2.png";
import icon3 from "/src/assets/HomeOne/icon3.png";
import icon4 from "/src/assets/HomeOne/icon4.png";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const STslider = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative bg-secondary pb-[60px]">
      <div className="">
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
            <STsliderContent icon={icon1} title=" Transparent Pricing" />
          </SwiperSlide>
          <SwiperSlide>
            <STsliderContent icon={icon2} title="Packaging Distri" />
          </SwiperSlide>
          <SwiperSlide>
            <STsliderContent icon={icon3} title="Real Time Tracking" />
          </SwiperSlide>
          <SwiperSlide>
            <STsliderContent icon={icon4} title="Warehoues Storage" />
          </SwiperSlide>
        </Swiper>
      </div>

      <ScrollTrigger onEnter={() => setVisible(true)}>
        {visible && (
          <div className="move_up">
            <p className="text-white text-center text-lg font-normal mt-14">
              Our list of services does not end here. Find out how we can help
              you and your business.
              <Link
                className="relative inline-block capitalize text-primary ml-3 before:absolute before:content-[''] before:bottom-0 before:right-0 before:bg-primary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                to="/"
              >
                more services
              </Link>
            </p>
          </div>
        )}
      </ScrollTrigger>
    </div>
  );
};

export default STslider;
