/* eslint-disable react/prop-types */
const StSubscribe = ({ img }) => {
  return (
    <section className="relative  pb-[100px]">
      <div className="container">
        <div
          className="bg-white grid grid-cols-12 -mt-[267px] ml-[35px] items-center"
          style={{
            filter: "drop-shadow(0px 1px 20px rgba(0, 0, 0, 0.08))",
          }}
        >
          <div className="lg:col-span-8 col-span-12 lg:pt-0 pt-10">
            <div className="md:px-[70px] px-8 ">
              <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                <h4 className="lg:text-[32px] text-[25px] mb-1 font-semibold">
                  Coverage That Protect Your World!
                </h4>
                <span className="text-lg text-secondary">
                  Not sure which policy suits you the best?
                </span>
              </div>
              <form>
                <div
                  className="relative mt-[55px] wow animate__fadeInUp"
                  data-wow-duration=".6s"
                >
                  <input
                    type="email"
                    placeholder="type your email"
                    className="w-full h-[62px] border border-solid border-[#ebebeb] outline-none focus:outline-none pl-8 placeholder:text-lg placeholder:text-[#747474] placeholder:font-normal placeholder:capitalize"
                  />
                  <button className="bg-primary text-white py-4 px-[38px] text-2xl font-medium sm:absolute right-0 top-0 sm:mt-0 mt-7">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="lg:col-span-4 col-span-12 lg:px-0 px-4 wow animate__fadeInUp"
            data-wow-duration=".6s"
          >
            <img
              src={img}
              className="relative w-full xl:left-[15px] lg:pt-0 pt-10"
              alt="Call To Action"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StSubscribe;
