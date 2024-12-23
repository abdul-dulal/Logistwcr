/* eslint-disable react/prop-types */

const Safe = ({ img, title }) => {
  return (
    <div className=" mb-4">
      <div className="bg-[#054c60] w-[238px] h-[238px] rounded-[50%] flex items-center justify-center text-center mx-[10px]">
        <div className="text-center">
          <img src={img} className="block m-auto -mt-[84]" alt="Trusted" />
          <h5 className="sm:text-xl text-[17px] capitalize text-white mt-3 px-4">
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Safe;
