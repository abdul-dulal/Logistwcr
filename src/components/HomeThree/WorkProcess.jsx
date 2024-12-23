/* eslint-disable react/prop-types */
const WorkProcess = ({ img, serial, title }) => {
  return (
    <div className="text-center">
      <div className="relative inline-block group">
        <img src={img} className="w-full" alt="Work Process" />
        <div className="absolute top-[97px]">
          <span className="text-white bg-primary text-2xl font-medium w-[70px] h-[70px] leading-[70px] flex items-center justify-center rounded-[50%] duration-[.6s] border-[4px] border-solid border-secondary group-hover:bg-secondary">
            {serial}
          </span>
        </div>
      </div>
      <h5 className="text-[22px] text-white capitalize mt-7 block sm:mb-0 mb-5">
        {title}
      </h5>
    </div>
  );
};

export default WorkProcess;
