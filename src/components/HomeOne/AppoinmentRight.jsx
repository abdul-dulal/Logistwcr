import bg from "/src/assets/HomeOne/appionment.jpg";
const AppoinmentRight = () => {
  return (
    <div className="relative">
      <div className="absolute top-[33px]  -z-[1] right-0 w-[50%] overflow-hidden">
        <img src={bg} alt="background" />
      </div>
      {/* <div className="right-[4%] bottom-[18%]">
              <img src={shape} className="max-w-[50%]" alt="" />
            </div> */}
    </div>
  );
};

export default AppoinmentRight;
