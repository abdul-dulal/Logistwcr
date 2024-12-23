import { Link } from "react-router-dom";
import logo from "../assets/ts_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`    ${
        isSticky ? "fixed top-0 left-0 w-full z-[9] bg-[#d1e4ea] is-sticky" : ""
      }`}
    >
      <div className="relative bg-[#d1e4ea] py-[25px]">
        <div className=" before:absolute before:content-['']  before:top-0 before:right-0 before:bg-secondary before:w-[342px] before:h-[100px] before:z-[1]">
          <div className="relative before:absolute before:content-[' '] before:-top-[25px] before:-left-11 before:bg-secondary before:w-[25%] before:h-[100px] before:z-[1] before:-skew-x-[36deg] after:absolute after:content-[''] after:-top-[25px] after:left-[20.5%] after:bg-[#d1e4ea] after:w-[3%] after:h-[93px] after:z-[1] after:skew-x-[30deg]">
            <div className="container ">
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-2">
                  <div className="relative z-[99] ">
                    <img src={logo} className="w-[201px]" alt="Logo" />
                  </div>
                </div>
                <nav className="col-span-10  ml-[122px]">
                  <div className="flex justify-between items-center">
                    <ul className=" relative ">
                      <li className=" text-secondary text-lg font-medium mr-9  pb-10 inline  ">
                        <Link
                          to="/"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          Home <FontAwesomeIcon icon={faAngleDown} />
                          <ul className="sub-menu bg-secondary rounded-sm w-[250px] z-[9] text-left py-4 mt-9 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                home one
                              </Link>
                            </li>
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/homeTwo"
                              >
                                home two
                              </Link>
                            </li>
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/homeThree"
                              >
                                home three
                              </Link>
                            </li>
                          </ul>
                        </Link>
                      </li>
                      <li className=" text-secondary text-lg font-medium pb-10 mr-9 inline  ">
                        <Link
                          to="/"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          About
                        </Link>
                      </li>
                      <li className=" text-secondary text-lg font-medium mr-9  pb-10 inline  ">
                        <Link
                          to="/"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          Services <FontAwesomeIcon icon={faAngleDown} />
                          <ul className="sub-menu bg-secondary rounded-sm w-[250px] z-[9] text-left py-4 mt-9 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                Service
                              </Link>
                            </li>
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                Service details
                              </Link>
                            </li>
                          </ul>
                        </Link>
                      </li>
                      <li className=" text-secondary text-lg font-medium mr-9  pb-10 inline  ">
                        <Link
                          to="/"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          Pages <FontAwesomeIcon icon={faAngleDown} />
                          <ul className="sub-menu bg-secondary rounded-sm w-[250px] z-[9] text-left py-4 mt-9 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                team
                              </Link>
                            </li>
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                team details
                              </Link>
                            </li>
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                project
                              </Link>
                            </li>
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                project details
                              </Link>
                            </li>
                            <li className="relative  inline-block mr-14 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                FAQ
                              </Link>
                            </li>
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                404 page
                              </Link>
                            </li>
                          </ul>
                        </Link>
                      </li>
                      <li className=" text-secondary text-lg font-medium mr-9  pb-10 inline  ">
                        <Link
                          to="/"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          News <FontAwesomeIcon icon={faAngleDown} />
                          <ul className="sub-menu bg-secondary rounded-sm w-[250px] z-[9] text-left py-4 mt-9 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                blog standard
                              </Link>
                            </li>
                            <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                              <Link
                                className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                                to="/"
                              >
                                blog details
                              </Link>
                            </li>
                          </ul>
                        </Link>
                      </li>
                      <li className=" text-secondary text-lg font-medium pb-10  inline  ">
                        <Link
                          to="/"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                    <div className="relative z-[1] -left-11 flex  items-center gap-8 ">
                      <div>
                        <Link to="/" className="st-contact-icon">
                          <FontAwesomeIcon icon={faPhone} className="" />
                        </Link>
                      </div>
                      <div className="text-white font-medium text-[15px] ">
                        <p className="mb-1">Emergency</p>
                        +56 (201) 555-0124
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
