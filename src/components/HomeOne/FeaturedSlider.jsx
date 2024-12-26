import { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useRef } from "react";
import FeaturedSliderContent from "./FeaturedSliderContent";

import slider1 from "/src/assets/slider/slider-1.jpg";
import slider2 from "/src/assets/slider/slider-2.jpg";
const FeaturedSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className=" group">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <FeaturedSliderContent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title="Experience The Best "
            titleTwo=" Logistic & Transport"
            subTitle="We Specialise in the transportation"
            index={0}
            bgImg={slider1}
            swiperRef={swiperRef}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedSliderContent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title="Experience The Best "
            titleTwo=" Logistic & Transport"
            subTitle="We Specialise in the transportation"
            index={1}
            bgImg={slider2}
            swiperRef={swiperRef}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedSliderContent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title="Experience The Best "
            titleTwo=" Logistic & Transport"
            subTitle="We Specialise in the transportation"
            index={2}
            bgImg={slider1}
            swiperRef={swiperRef}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedSliderContent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title="Experience The Best "
            titleTwo=" Logistic & Transport"
            subTitle="We Specialise in the transportation"
            index={3}
            bgImg={slider2}
            swiperRef={swiperRef}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedSlider;
