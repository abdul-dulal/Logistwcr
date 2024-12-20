import { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useRef } from "react";
import FeaturedSliderContent from "./FeaturedSliderContent";

const FeatureSlider = () => {
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
            bgImg="/src/assets/HomeTwo/slider-1.jpg"
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
            bgImg="/src/assets/HomeTwo/slider-2.jpg"
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
            bgImg="/src/assets/HomeTwo/slider-1.jpg"
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
            bgImg="/src/assets/HomeTwo/slider-2.jpg"
            swiperRef={swiperRef}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeatureSlider;
