/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Pricing = ({ title, price }) => {
  return (
    <div
      style={{
        filter: "drop-shadow(0px 1px 20px rgba(0, 0, 0, 0.08))",
      }}
      className="relative pt-[52px] pb-10 px-8 bg-white transition-all duration-500 hover:shadow-lg hover:transition-all hover:duration-500 hover:-translate-y-[10px] after:absolute after:content-[''] after:top-[184px] after:right-0 after:w-0 after:h-[1px] after:z-[99] after:bg-primary after:transition-all after:duration-500 after:hover:bg-secondary after:hover:w-full after:hover:left-0 before:absolute before:content-[''] before:top-[184px] before:left-0 before:w-full before:h-[1px] before:bg-primary before:transition-all before:duration-500"
    >
      <div className="pb-8 ">
        <h4 className=" underline capitalize md:text-[22px] text-xl text-secondary leading-6 font-semibold ">
          {title}
        </h4>
      </div>
      <div className="">
        <span className="text-5xl font-semibold text-secondary">{price}</span>
        <span className="text-[28px] text-primary font-medium relative -top-[19px] left-[7px]">
          $
        </span>
        <span className="text-lg text-primary font-medium relative left-0 top-2">
          /per month
        </span>
      </div>
      <ul className="mt-10">
        <li className="relative pl-7 pb-[13px] md:text-lg text-[15px] font-medium capitalize border-b border-solid border-[#f2f2f2] before:absolute before:content-[''] before:top-[9px] before:left-[2px] before:w-[9px] before:h-[9px] before:bg-primary after:absolute after:content-[''] after:-left-[1px] after:top-[6px] after:h-[15px] after:w-[15px] after:border after:border-solid after:border-primary">
          1 warehouse
        </li>
        <li className="relative pl-7 pb-[13px] md:text-lg text-[15px] font-medium capitalize border-b border-solid border-[#f2f2f2] before:absolute before:content-[''] before:top-[9px] before:left-[2px] before:w-[9px] before:h-[9px] before:bg-primary after:absolute after:content-[''] after:-left-[1px] after:top-[6px] after:h-[15px] after:w-[15px] after:border after:border-solid after:border-primary">
          Custom business rules
        </li>
        <li className="relative pl-7 pb-[13px] md:text-lg text-[15px] font-medium capitalize border-b border-solid border-[#f2f2f2] before:absolute before:content-[''] before:top-[9px] before:left-[2px] before:w-[9px] before:h-[9px] before:bg-primary after:absolute after:content-[''] after:-left-[1px] after:top-[6px] after:h-[15px] after:w-[15px] after:border after:border-solid after:border-primary">
          Real-time rate shopping
        </li>
        <li className="relative pl-7 pb-[13px] md:text-lg text-[15px] font-medium capitalize border-b border-solid border-[#f2f2f2] before:absolute before:content-[''] before:top-[9px] before:left-[2px] before:w-[9px] before:h-[9px] before:bg-primary after:absolute after:content-[''] after:-left-[1px] after:top-[6px] after:h-[15px] after:w-[15px] after:border after:border-solid after:border-primary">
          100 freight shipments
        </li>
        <li className="relative pl-7 pb-[13px] md:text-lg text-[15px] font-medium capitalize line-through border-b border-solid border-[#f2f2f2] before:absolute before:content-[''] before:top-[9px] before:left-[2px] before:w-[9px] before:h-[9px] before:bg-primary after:absolute after:content-[''] after:-left-[1px] after:top-[6px] after:h-[15px] after:w-[15px] after:border after:border-solid after:border-primary">
          Any time 24/7 hour support
        </li>
      </ul>
      <div className="mt-10">
        <Link
          to="/"
          className=" inline-block text-white bg-secondary py-3 px-[30px] text-xl font-medium relative z-[1] capitalize before:absolute before:content-[''] before:bottom-0 before:-z-[1] before:left-0 before:w-full before:h-[0%] before:bg-primary before:duration-500 before:hover:h-full before:hover:top-0"
        >
          order now
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
