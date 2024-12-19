import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import brand from "/src/assets/HomeOne/b.png";
const STslider = () => {
  return (
    <div className="relative ">
      <div className="wow animate__fadeInUp" data-wow-duration=".6s">
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
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="py-[30px] flex items-center justify-center duration-500 hover:bg-[#ebebeb] hover:duration-500">
              <img src={brand} alt="Bran" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] flex items-center justify-center duration-500 hover:bg-[#ebebeb] hover:duration-500">
              <img src={brand} alt="Bran" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] flex items-center justify-center duration-500 hover:bg-[#ebebeb] hover:duration-500">
              <img src={brand} alt="Bran" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] flex items-center justify-center duration-500 hover:bg-[#ebebeb] hover:duration-500">
              <img src={brand} alt="Bran" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] flex items-center justify-center duration-500 hover:bg-[#ebebeb] hover:duration-500">
              <img src={brand} alt="Bran" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] flex items-center justify-center duration-500 hover:bg-[#ebebeb] hover:duration-500">
              <img src={brand} alt="Bran" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default STslider;
