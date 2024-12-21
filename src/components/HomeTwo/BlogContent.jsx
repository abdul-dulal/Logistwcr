/* eslint-disable react/prop-types */
import { faArrowRightLong, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import meta from "/src/assets/HomeOne/meta.png";

const BlogContent = ({ blog, bTitle }) => {
  return (
    <div className="relative before:absolute before:content-[''] before:right-11 before:top-9 before:w-[76px] before:h-[76px] before:bg-primary before:rotate-[45deg]">
      <img src={blog} className="w-full" alt="Blog" />
      <div className="absolute top-10 right-14">
        <span className="inline-block text-lg font-normal text-white text-center">
          12 <br />
          March
        </span>
      </div>
      <div className="relative mb-5  bg-[#f8f8f8] pt-10 px-10 pb-7 ">
        <div className="flex flex-wrap justify-between mb-4">
          <div className="flex items-center gap-[15px] ">
            <img src={meta} className="rounded-[50%]" alt="Author" />
            <span className="font-medium text-[#292930] capitalize">
              by admin
            </span>
          </div>
          <div className="flex items-center gap-1 font-medium xl:ml-0 ml-14">
            <FontAwesomeIcon icon={faComment} className="text-primary" />
            <span>{6} Comment</span>
          </div>
        </div>
        <div className="block">
          <Link
            to="/"
            className="inline  xl:text-[26px] lg:text-[19px] text-[19px] xl:leading-[42px] leading-[30px] mb-2 text-secondary font-medium mt-[21px] bg-no-repeat bg-[linear-gradient(transparent_calc(100%-1px),currentColor_1px)] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.32,0.15,1.17)] bg-[size:0_100%] capitalize hover:bg-[size:100%_100%] hover:text-primary"
          >
            {bTitle}
          </Link>
        </div>
        <Link
          to="/"
          className="inline mt-2 text-[17px] text-primary capitalize font-medium  bg-no-repeat bg-[linear-gradient(transparent_calc(100%-1px),currentColor_1px)] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.32,0.15,1.17)] bg-[size:0_100%]  hover:bg-[size:100%_100%] hover:text-primary"
        >
          read more
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className="inline-block ml-0 -rotate-[49deg]  relative text-lg top-0 left-[2px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogContent;
