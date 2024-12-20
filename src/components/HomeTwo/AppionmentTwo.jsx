import { useEffect, useRef } from "react";
import "nice-select2/dist/css/nice-select2.css";
import NiceSelect from "nice-select2";

import {
  faArrowRight,
  faBagShopping,
  faEnvelopeOpen,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../HomeOne/InputField";
const AppionmentTwo = () => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      const niceSelect = new NiceSelect(selectRef.current, {
        // searchable: true,
        placeholder: "Select Freight",
      });

      selectRef.current.addEventListener("change", (event) => {
        console.log("Selected value:", event.target.value);
      });

      return () => {
        niceSelect.destroy();
      };
    }
  }, []);
  return (
    <div>
      <form>
        <div className="grid grid-cols-2 gap-6">
          <div className="wow animate__fadeInUp" data-wow-duration=".6s">
            <InputField icon={faUser} plc="full name *" type="text" />
          </div>
          <div className="wow animate__fadeInUp" data-wow-duration=".6s">
            <InputField icon={faEnvelopeOpen} plc="email here *" type="email" />
          </div>

          <div className="wow animate__fadeInUp" data-wow-duration=".6s">
            <InputField icon={faBagShopping} plc="weight. kg *" type="email" />
          </div>

          <div className="wow animate__fadeInUp" data-wow-duration=".6s">
            <InputField
              icon={faLocationDot}
              plc="distance. km *"
              type="email"
            />
          </div>
        </div>
        <div className="mt-5 ">
          <select
            ref={selectRef}
            className=" wow animate__fadeInUp"
            data-wow-duration=".6s"
          >
            <option value="1">Select Freight</option>
            <option value="2">Air Freight </option>
            <option value="3">Sea Freight</option>
            <option value="4">Road Freight</option>
          </select>
        </div>
        <button
          type="submit"
          className={`group mt-10 relative inline-block wow animate__fadeInUp bg-primary text-lg capitalize text-white py-[18px] px-[27px] overflow-hidden transition-all duration-500 z-[1] hover:text-white before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-secondary before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
          data-wow-duration=".6s"
        >
          request quote
          <FontAwesomeIcon
            className="icon ml-4 -rotate-[49deg]  text-[22px] text-white "
            icon={faArrowRight}
          />
        </button>
      </form>
    </div>
  );
};

export default AppionmentTwo;
