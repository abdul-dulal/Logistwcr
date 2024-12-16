import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = ({ img, client }) => {
  return (
    <div className="group relative bg-accent pt-[47px] px-[29px] transition-all duration-500 ease-out before:absolute before:h-0 before:w-full before:top-0 before:left-0 before:bg-secondary before:transition-all before:ease-out before:duration-500 hover:before:h-full hover:before:bottom-0 hover:before:transition-all hover:before:duration-500 hover:before:ease-out">
      <div className=" relative flex gap-5 items-center pb-[30px] mb-[35px] transition-all duration-500 ease-out border-b  border-solid border-[rgba(219,219,219,0.9)] group-hover:border-[rgba(219,219,219,0.2)] group-hover:transition-all group-hover:duration-500 group-hover:ease-out">
        <img src={img} className="block" alt="Testimonial" />
        <div>
          <h5 className="text-secondary pb-1 transition-all duration-500 ease-out group-hover:text-white group-hover:transition-all group-hover:duration-500 group-hover:ease-out">
            {client}
          </h5>
          <p className="transition-all duration-500 ease-out group-hover:text-white group-hover:transition-all group-hover:duration-500 group-hover:ease-out">
            Dramatically enhance
          </p>
        </div>
      </div>
      <p className="relative  text-base leading-[26px] z-[99] transition-all duration-500 ease-out group-hover:text-white group-hover:transition-all group-hover:duration-500 group-hover:ease-out">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse
      </p>
      <div className="relative text-right text-[100px] text-[#e8e7ec] transition-all duration-500 ease-out group-hover:text-[rgba(219,219,219,0.2)] group-hover:transition-all group-hover:duration-500 group-hover:ease-out">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
    </div>
  );
};

export default Testimonial;
