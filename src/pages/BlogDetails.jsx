import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCumb from "../components/Others/BreadCumb";
import hero from "/src/assets/blog/blog-details.jpg";
import hero2 from "/src/assets/blog/blog-detail.jpg";
import {
  faAnglesLeft,
  faAnglesRight,
  faArrowRight,
  faComment,
  faMagnifyingGlass,
  faShareNodes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import LatestBlog from "../components/Others/LatestBlog";

import bs1 from "/src/assets/blog/bs1.jpg";
import bs2 from "/src/assets/blog/bs2.jpg";
import bs3 from "/src/assets/blog/bs3.jpg";
const BlogDetails = () => {
  return (
    <div>
      <BreadCumb title="Blog Details" currentPage="Blog Details" />
      <section className="pt-[120px] pb-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8 col-span-12">
              <img src={hero} className="w-full" alt="Blog Details" />

              <div className="flex  items-center justify-between mt-10">
                <div className="flex flex-wrap items-center gap-7 ">
                  <div>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-primary mr-2"
                    />
                    <span className="font-medium text-[#292930] capitalize">
                      by admin
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium xl:ml-0 sm:ml-14">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary"
                    />
                    <span>{6} Comment</span>
                  </div>
                </div>

                <Link
                  to="/"
                  className="w-10 h-10 bg-[#ebeae5] flex justify-center items-center text-black rounded-[50%] duration-500  hover:bg-primary hover:text-white"
                >
                  <FontAwesomeIcon icon={faShareNodes} />
                </Link>
              </div>
              <h3 className="lg:text-[42px] sm:text-[30px] text-2xl">
                Delivering the best web design agency
              </h3>
              <p className="my-10">
                Mauris non dignissim purus, ac commodo diam. Donec sit amet
                lacinia nulla. Aliquam quis purus in justo <br />
                pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod
                nec, feugiat at nisi. Quisque vitae <br />
                odio nec lacus interdum tempus. Phasellus a rhoncus erat.
                Vivamus vel eros vitae
              </p>
              <p className="">
                Mauris non dignissim purus, ac commodo diam. Donec sit amet
                lacinia nulla. Aliquam quis purus in justo <br />
                pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod
                nec, feugiat at nisi. Quisque vitae <br />
                odio nec lacus interdum tempus. Phasellus a rhoncus erat.
                Vivamus vel eros vitae
              </p>
              <div className="border border-solid border-secondary py-[33px] px-[33px] mt-10 sm:mr-[50px]">
                <span className="text-2xl  text-secondary font-medium mr-7 inline-block mb-3">
                  Tags :
                </span>
                <Link
                  to="/"
                  className="sm:inline block text-base font-medium text-secondary mb-3 py-[5px] px-5 border border-solid border-[#eceae5] mr-4 duration-500 hover:bg-secondary hover:text-white"
                >
                  Logistics
                </Link>
                <Link
                  to="/"
                  className="sm:inline block text-base font-medium text-secondary mb-3 py-[5px] px-5 border border-solid border-[#eceae5] mr-4 duration-500 hover:bg-secondary hover:text-white"
                >
                  Cargo
                </Link>
                <Link
                  to="/"
                  className="sm:inline block text-base font-medium text-secondary mb-3 py-[5px] px-5 border border-solid border-[#eceae5] mr-4 duration-500 hover:bg-secondary hover:text-white"
                >
                  Blog
                </Link>
              </div>
              <div className="flex flex-wrap mt-[45px] mb-2">
                <div>
                  <img
                    src={hero2}
                    className="w-[80%] mb-5"
                    alt="Blog Details"
                  />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold text-secondary">
                    Kevin Martin
                  </h5>
                  <p className="text-xl my-4">
                    Lacinia amet nisi ullamcorper eu suspendisse. Mattis nisl
                    dignissim <br /> accumsan consectetur suspendisse amet.
                  </p>
                  <span className="text-lg font-normal text-primary mr-4">
                    Share :
                  </span>
                  <Link
                    to="/"
                    className="inline-block text-lg text-[#9da1b0] mr-4 duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    to="/"
                    className="inline-block text-lg text-[#9da1b0] mr-4 duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    to="/"
                    className="inline-block text-lg text-[#9da1b0] mr-4 duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link
                    to="/"
                    className="inline-block text-lg text-[#9da1b0] mr-[14px] duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap justify-between border-t border-solid border-b border-secondary    ">
                <div className="my-4">
                  <Link
                    to="/"
                    className="inline-block w-[67px] h-[67px] bg-[#f7f6f1] leading-[67px] text-secondary  text-center text-[20px] duration-500 hover:bg-primary hover:text-white"
                  >
                    <FontAwesomeIcon icon={faAnglesLeft} />
                  </Link>
                  <h5 className="inline-block text-xl text-secondary font-medium relative top-2 left-0 ml-5">
                    Cargo flow through better <br /> supply in UK
                  </h5>
                </div>
                <div className="my-4">
                  <h5 className="inline-block text-xl text-secondary font-medium relative top-2 left-0 mb-8 ">
                    Why is supply chain visibility <br />
                    so important?
                  </h5>
                  <Link
                    to="/"
                    className="inline-block w-[67px] h-[67px] bg-[#f7f6f1] leading-[67px] text-secondary   text-center text-[20px] duration-500 ml-5 hover:bg-primary hover:text-white"
                  >
                    <FontAwesomeIcon icon={faAnglesRight} />
                  </Link>
                </div>
              </div>
              <div className="my-11">
                <h3 className="relative sm:text-[30px] text-xl text-[#292930] font-medium inline-block capitalize before:absolute before:content-[''] before:-bottom-2  before:left-0 before:h-[2px] before:w-[90px] before:bg-primary">
                  Recent Comments
                </h3>
                <div className="flex flex-wrap gap-8 mt-[63px]  border-b border-solid border-[#e6e6e6] pb-10">
                  <div>
                    <img
                      src="/src/assets/blog/reply1.png"
                      className="rounded-full"
                      alt="Replay"
                    />
                  </div>
                  <div className=" flex  justify-between">
                    <div>
                      <h5 className="text-xl text-[#292930] font-semibold">
                        Saima Shirin
                      </h5>
                      <span className="text-[#4d4e4f] mb-[6px]  block">
                        March 25, 2024
                      </span>
                      <p className="mt-2">
                        Perspiciatis unde omnis iste natus error sit voluptatem
                        accusant laudantium, totam <br /> rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae <br /> vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia
                      </p>
                    </div>
                    <div>
                      <Link to="#" className="text-primary">
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 mt-[63px]  border-b border-solid border-[#e6e6e6] pb-10 sm:ml-[70px]">
                  <div>
                    <img
                      src="/src/assets/blog/reply2.png"
                      className="rounded-full"
                      alt="Replay"
                    />
                  </div>
                  <div className=" flex  justify-between">
                    <div>
                      <h5 className="text-xl text-[#292930] font-semibold">
                        Humaira Shirin
                      </h5>
                      <span className="text-[#4d4e4f] mb-[6px]  block">
                        March 25, 2024
                      </span>
                      <p className="mt-2">
                        Perspiciatis unde omnis iste natus error sit voluptatem
                        accusant laudantium, totam <br /> rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae <br /> vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia
                      </p>
                    </div>
                    <div>
                      <Link to="#" className="text-primary">
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="relative sm:text-[30px] text-xl text-[#292930] font-medium capitalize inline-block before:absolute before:content-[''] before:-bottom-2  before:left-0 before:h-[2px] before:w-[90px] before:bg-primary">
                  Leave A Comment
                </h3>
                <div className="mt-[52px]">
                  <form>
                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                      <input
                        type="text"
                        placeholder="your name"
                        className="bg-[#f3f3f3] w-full h-[60px] rounded-[5px]  outline-none focus:outline-none px-8 placeholder:capitalize"
                      />
                      <input
                        type="email"
                        placeholder="email address"
                        className="bg-[#f3f3f3] w-full h-[60px] rounded-[5px]  outline-none focus:outline-none px-8 placeholder:capitalize"
                      />
                    </div>

                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      placeholder="write your question here"
                      className="bg-[#f3f3f3] w-full  rounded-[5px]  outline-none focus:outline-none px-8 py-[15px] mt-5 placeholder:capitalize"
                    ></textarea>
                    <button
                      type="submit"
                      to="/"
                      className={` mt-6 relative inline-block bg-primary text-xl capitalize text-white py-[18px] px-[30px] overflow-hidden transition-all duration-500 z-[1]  before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-secondary before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
                    >
                      request quote
                      <FontAwesomeIcon
                        className="icon ml-4 -rotate-[49deg]  text-[18px] text-white "
                        icon={faArrowRight}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 lg:mt-0 mt-10">
              <div className="relative">
                <input
                  type="text"
                  className="bg-[#f3f3f3] w-full h-[60px] rounded-[5px]  outline-none focus:outline-none px-8 placeholder:capitalize"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute text-[24px] text-primary right-0 top-[2px] border border-dashed border-[#d5d5d3] p-[15px] cursor-pointer"
                />
              </div>
              <div className="mt-[30px] bg-[#f7f6f1] pt-[56px] pb-[28px] px-[36px]">
                <h3 className="relative sm:text-[30px] text-xl text-[#292930] font-medium block capitalize before:absolute before:content-[''] before:-bottom-2  before:left-0 before:h-[1px] before:w-full before:bg-[#ece6e6] after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-[90px] after:bg-primary">
                  Latest Post
                </h3>
                <LatestBlog img={bs1} />
                <LatestBlog img={bs2} />
                <LatestBlog img={bs3} />
              </div>
              <div className="mt-[30px] bg-[#f7f6f1] pt-[56px] pb-[28px] px-[36px]">
                <h3 className="relative sm:text-[30px] text-xl text-[#292930] font-medium block capitalize before:absolute before:content-[''] before:-bottom-2  before:left-0 before:h-[1px] before:w-full before:bg-[#ece6e6] after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-[90px] after:bg-primary">
                  Categories
                </h3>
                <ul className="mt-10">
                  <li className="flex items-center justify-between mb-5 border-b border-solid border-[#dddddd] pb-3 capitalize">
                    New Technologies <span>(07)</span>
                  </li>
                  <li className="flex items-center justify-between mb-5 border-b border-solid border-[#dddddd] pb-3 capitalize">
                    Construction Introductions <span>(05)</span>
                  </li>
                  <li className="flex items-center justify-between mb-5 border-b border-solid border-[#dddddd] pb-3 capitalize">
                    Financial Investment <span>(07)</span>
                  </li>
                  <li className="flex items-center justify-between mb-5 border-b border-solid border-[#dddddd] pb-3 capitalize">
                    Parallax Effects <span>(04)</span>
                  </li>
                  <li className="flex items-center justify-between mb-5 border-b border-solid border-[#dddddd] pb-3 capitalize">
                    Payment Processing <span>(08)</span>
                  </li>
                  <li className="flex items-center justify-between mb-5 border-b border-solid border-[#dddddd] pb-3 capitalize">
                    Quality Meterials <span>(05)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[url('/src/assets/blog/query.jpg')] bg-cover bg-no-repeat bg-center">
                <div className="text-center mt-[30px] pt-[56px] pb-[68px]">
                  <h2 className="capitalize text-white">
                    Have Any <br />
                    Query?
                  </h2>
                  <p className="text-white mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                    elit, sed do eiusmod tempor
                  </p>
                  <div className="mt-10">
                    <Link
                      to="#"
                      className=" py-[15px] px-[38px] bg-primary text-white rounded-[5px] font-medium text-lg capitalize  duration-500 hover:bg-white hover:text-primary"
                    >
                      send message
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-[30px] bg-[#f7f6f1] pt-[56px] pb-[28px] px-[36px]">
                <h3 className="relative sm:text-[30px] text-xl text-[#292930] font-medium block capitalize before:absolute before:content-[''] before:-bottom-2  before:left-0 before:h-[1px] before:w-full before:bg-[#ece6e6] after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-[90px] after:bg-primary">
                  Tags Post
                </h3>
                <div className="mt-10">
                  <Link
                    to="#"
                    className="inline-block bg-white py-2 px-5 mb-[15px] text-[17px] text-[#4d4e4f] font-medium mr-[5px] duration-500  hover:bg-primary hover:text-white"
                  >
                    Warehouses
                  </Link>
                  <Link
                    to="#"
                    className="inline-block bg-white py-2 px-5 mb-[15px] text-[17px] text-[#4d4e4f] font-medium mr-[5px] duration-500  hover:bg-primary hover:text-white"
                  >
                    Transport
                  </Link>
                  <Link
                    to="#"
                    className="inline-block bg-white py-2 px-5 mb-[15px] text-[17px] text-[#4d4e4f] font-medium mr-[5px] duration-500  hover:bg-primary hover:text-white"
                  >
                    Business
                  </Link>
                  <Link
                    to="#"
                    className="inline-block bg-white py-2 px-5 mb-[15px] text-[17px] text-[#4d4e4f] font-medium mr-[5px] duration-500  hover:bg-primary hover:text-white"
                  >
                    Logistic
                  </Link>
                  <Link
                    to="#"
                    className="inline-block bg-white py-2 px-5 mb-[15px] text-[17px] text-[#4d4e4f] font-medium mr-[5px] duration-500  hover:bg-primary hover:text-white"
                  >
                    Cargo
                  </Link>
                  <Link
                    to="#"
                    className="inline-block bg-white py-2 px-5 mb-[15px] text-[17px] text-[#4d4e4f] font-medium mr-[5px] duration-500  hover:bg-primary hover:text-white"
                  >
                    Maintenance
                  </Link>
                  <Link
                    to="#"
                    className="inline-block bg-white py-2 px-5 mb-[15px] text-[17px] text-[#4d4e4f] font-medium mr-[5px] duration-500  hover:bg-primary hover:text-white"
                  >
                    Consulting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
