import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import StSliderContent from "./StSliderContent";

const StSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative ">
      <Swiper
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        speed={1000}
        className="relative "
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },

          1024: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
          1536: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <StSliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <StSliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <StSliderContent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StSlider;
