const STsliderContentOne = ({ icon, title }) => {
  return (
    <div className="container">
      <div className="bg-white px-[33px] pt-[42px] pb-[33px]">
        <div className="relative">
          <img className="relative z-[2]" src={icon} alt="" />
          <div className="relative before:absolute before:-top-12 before:left-8 before:bg-[#f1f1f1] before:w-[50px] before:h-[50px] before:rotate-[45deg] before:z-[1] circle"></div>
        </div>
        <div>
          <h4 className=" mt-[25px] mb-[18px]">{title}</h4>
          <p className="pb-4 text-[#525459]">
            Appropriately enhance principle-cent standards in platforms.
            Credibly orch popular services.
          </p>
          <span className=" relative inline-block w-20 h-[3px] bg-primary  after:absolute after:content-[''] after:h-[4px] after:w-3 after:bg-white after:left-0 after:bottom-0 line"></span>
        </div>
      </div>
    </div>
  );
};

export default STsliderContentOne;
