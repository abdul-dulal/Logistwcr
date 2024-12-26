import { Link } from "react-router-dom";
import BreadCumb from "../components/Others/BreadCumb";
import ProgressBar from "../components/Others/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Team from "../components/HomeTwo/Team";
import tm1 from "/src/assets/team/team.png";
import tm2 from "/src/assets/team/team2.png";
import tm3 from "/src/assets/team/team3.png";
import tm4 from "/src/assets/team/team4.png";

const TeamDetails = () => {
  return (
    <div>
      <BreadCumb title="Team Details" currentPage="Team Details" />
      <div className="pt-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img
                src="/src/assets/team/team-detail.jpg"
                className="w-full"
                alt="Team Details"
              />
            </div>
            <div>
              <div className="pt-12">
                <ProgressBar datacount={80} title="Success Rate - 80%" />
                <ProgressBar datacount={50} title="Complete Work - 50%" />
                <ProgressBar datacount={95} title="Satisfied Client - 95%" />
              </div>
              <div className="bg-[#f7f6f1]  pt-10 pb-4 sm:px-[67px] px-8 lg:-ml-[178px] mt-10">
                <div className="flex flex-wrap items-center justify-between">
                  <div>
                    <div>
                      <span className="text-[#8888] text-xl mb-[13px] inline-block">
                        Name
                      </span>
                      <h5 className="text-secondary block mb-7">Saad Alam</h5>
                    </div>
                    <div>
                      <span className="text-[#8888] text-xl mb-[13px] inline-block">
                        position:
                      </span>
                      <h5 className="text-secondary block mb-7">Logistics</h5>
                    </div>
                    <div>
                      <span className="text-[#8888] text-xl mb-[13px] inline-block">
                        Experience
                      </span>
                      <h5 className="text-secondary block mb-7">36 Year</h5>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="text-[#8888] text-xl mb-[13px] inline-block">
                        Phone:
                      </span>
                      <h5 className="text-secondary block mb-7">
                        +52656 656 65
                      </h5>
                    </div>
                    <div>
                      <span className="text-[#8888] text-xl mb-[13px] inline-block">
                        Email:
                      </span>
                      <h5 className="text-secondary block mb-7">
                        youremail@gmail.com
                      </h5>
                    </div>
                    <div>
                      <span className="text-[#8888] text-xl mb-[13px] inline-block">
                        Address
                      </span>
                      <h5 className="text-secondary block mb-7">
                        Jones Street New York
                      </h5>
                    </div>
                  </div>
                  <div className="sm:block hidden">
                    <div className="mb-[13px]">
                      <Link
                        to="/"
                        className="w-[42px] h-[42px] leading-[42px] rounded-full inline-block text-center text-black bg-white text-lg duration-500 hover:bg-primary hover:text-white"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </Link>
                    </div>
                    <div className="mb-[13px]">
                      <Link
                        to="/"
                        className="w-[42px] h-[42px] leading-[42px] rounded-full inline-block text-center bg-white text-lg text-black duration-500 hover:bg-primary hover:text-white"
                      >
                        <FontAwesomeIcon icon={faXTwitter} />
                      </Link>
                    </div>
                    <div className="mb-[13px]">
                      <Link
                        to="/"
                        className="w-[42px] h-[42px] leading-[42px] rounded-full inline-block text-center text-black bg-white text-lg duration-500 hover:bg-primary hover:text-white"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </div>
                    <div className="mb-[13px]">
                      <Link
                        to="/"
                        className="w-[42px] h-[42px] leading-[42px] rounded-full inline-block text-black text-center bg-white text-lg duration-500 hover:bg-primary hover:text-white"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ST__Team__Area */}
      <section className="relative py-[100px]">
        <div className="container">
          <div
            className="mb-[50px] text-center wow animate__fadeInUp"
            data-wow-duration="1s"
          >
            <h5 className="capitalize relative  mb-5 inline-block text-secondary after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Our Most Team
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Meet The Excecutive Panel</h2>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <Team img={tm1} name="Somaiya Akter" />
            <Team img={tm2} name="Abdul Dulal" />
            <Team img={tm3} name="Monio Roman" />
            <Team img={tm4} name="Saad Alam" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetails;
