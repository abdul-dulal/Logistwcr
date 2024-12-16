/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputField = ({ icon, plc, type }) => {
  return (
    <div className="relative mb-1">
      <input
        type={type}
        placeholder={plc}
        className="w-full h-16 pl-8 rounded-[5px] border-none outline-none focus:outline-0 placeholder:text-base placeholder:capitalize placeholder:text-[#929fa2] placeholder:font-normal"
      />
      <FontAwesomeIcon
        icon={icon}
        className="absolute right-4 bottom-5 text-primary"
      />
    </div>
  );
};

export default InputField;
