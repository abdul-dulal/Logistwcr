import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TestimonialContent from "./TestimonialContent";
import designer from "/src/assets/homeThree/designer.png";
import developer from "/src/assets/homeThree/developer.png";
import uiDesinger from "/src/assets/homeThree/ui.png";
import quality from "/src/assets/homeThree/quality.png";

const TestimonialSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative ">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        speed={1000}
        className="relative "
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <TestimonialContent
            subTitle=" Pellentesque fermentum egestas hac malesuada interdum suspendisse.
          Massa at parturient ut ex etiam vel aptent blandit. Dictum donec elit
          etiam malesuada platea fusce fusce."
            name="Misba Rahman"
            designation="Desinger"
            img={designer}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialContent
            subTitle="Pellentesque fermentum egestas hac malesuada interdum suspendisse. Massa at parturient ut ex etiam vel aptent blandit.Dictum donec elit etiam malesuada platea fusce fusce. Arcu hac posuere netus consequat neque sed augue erat. Efficitur quisque curae varius purus nunc laoreet finibus litoe."
            name="Abu Talha"
            designation="Developer"
            img={developer}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialContent
            subTitle=" Pellentesque fermentum egestas hac malesuada interdum suspendisse.
          Massa at parturient ut ex etiam vel aptent blandit. Dictum donec elit
          etiam malesuada platea fusce fusce."
            name="Oliya Rahman"
            designation="UI Desinger"
            img={uiDesinger}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialContent
            subTitle="Pellentesque fermentum egestas hac malesuada interdum suspendisse. Massa at parturient ut ex etiam vel aptent blandit.Dictum donec elit etiam malesuada platea fusce fusce. Arcu hac posuere netus consequat neque sed augue erat. Efficitur quisque curae varius purus nunc laoreet finibus litoe."
            name="Hasnat Lia"
            designation="Quality analyst"
            img={quality}
          />
        </SwiperSlide>
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={`text-white sm:absolute  right-[86px] -top-16 h-[60px] w-[60px] bg-primary leading-[60px] duration-[.6s] hover:bg-secondary   rounded-full cursor-pointer z-10  `}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className={` text-white sm:absolute  -top-16 right-0 h-[60px] w-[60px] bg-primary leading-[60px] duration-[.6s] hover:bg-secondary  rounded-full cursor-pointer  z-10 sm:ml-0 ml-8`}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default TestimonialSlider;
