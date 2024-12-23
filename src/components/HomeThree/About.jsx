import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div>
      <div className="flex flex-wrap sm:gap-8 gap-2">
        <ul>
          <li className="flex items-center text-base font-bold mt-[14px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
            />
            Freight Forwarding
          </li>
          <li className="flex items-center text-base font-bold mt-[14px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
            />
            Warehousing & Delivery
          </li>
          <li className="flex items-center text-base font-bold mt-[14px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
            />
            Costoms Clearance
          </li>
        </ul>
        <ul>
          <li className="flex items-center text-base font-bold mt-[14px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
            />
            Freight Forwarding
          </li>
          <li className="flex items-center text-base font-bold mt-[14px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
            />
            Warehousing & Delivery
          </li>
          <li className="flex items-center text-base font-bold mt-[14px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 h-6 leading-6  text-primary  rounded-[50px] text-center mr-[17px]"
            />
            Costoms Clearance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
