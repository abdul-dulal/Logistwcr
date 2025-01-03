const Subscribe = () => {
  return (
    <section className="relative">
      <div className="bg-[#f3f3f9]">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-0 gap-10 items-center">
            <div
              className="lg:px-[75px] sm:px-4 lg:pt-0 pt-8 wow animate__fadeInUp"
              data-wow-duration=".7s"
            >
              <h2>Join Our Mailing List</h2>
              <span className="text-secondary text-xl font-normal">
                Ut enim ad minim veniam, quis nostruyd
              </span>
              <form>
                <div className="relative mt-8">
                  <input
                    type="email"
                    placeholder="type your email"
                    className=" w-full h-[62px] border border-solid bg-secondary border-[#ebebeb] pl-8 outline-none focus:outline-none placeholder:capitalize placeholder:text-white"
                  />
                  <button
                    type="submit"
                    className="bg-primary  text-white py-[17px] px-[38px] sm:absolute lg:-right-[53px] right-2 sm:top-[7px] sm:mt-0 mt-5 text-[22px] font-semibold leading-[0.6]"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img
                src="/src/assets/HomeTwo/call.png"
                className="relative w-full ml-[15px]"
                alt="Call To Action"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
