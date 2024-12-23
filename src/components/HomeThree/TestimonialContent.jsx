/* eslint-disable react/prop-types */
const TestimonialContent = ({ subTitle, name, designation, img }) => {
  return (
    <div className="relative mt-20">
      <div className="border border-solid border-[rgba(0,0,0,0.2)] pt-[41px]  pb-[46px] pl-[25px] rounded-[10px]">
        <h5 className="text-[19px] font-bold text-secondary">
          Smart Tracking&quot;
        </h5>
        <p className="mb-4 w-[80%]">{subTitle}</p>
        <div className="flex gap-4 mt-10">
          <img src={img} alt="Desinger" />
          <div>
            <h5 className="text-xl text-secondary font-bold">{name}</h5>
            <span className="text-[#090d16] block">{designation}</span>
          </div>
        </div>
      </div>
      <div className="absolute -top-6 right-8">
        <img src="/src/assets/homeThree/quote.png" alt="Testimonial" />
      </div>
    </div>
  );
};

export default TestimonialContent;
