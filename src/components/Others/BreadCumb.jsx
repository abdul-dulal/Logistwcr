import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BreadCumb = ({ title, currentPage }) => {
  return (
    <div className="bg-[url('/src/assets/About/breadcumb-bg.jpg')] pt-[155px]">
      <div className="container">
        <div>
          <span className="lg:text-[28px] text-lg text-white text-center block">
            Business Models you can Consider
          </span>
          <h2 className="lg:text-[72px] sm:text-[50px] text-[32px] font-semibold text-white mt-6 text-center mb-16">
            {title}
          </h2>
        </div>
        <ul className="bg-primary inline-block py-5 px-10 rounded-md">
          <li className="inline">
            <Link
              to="/"
              className="sm:text-[22px] text-lg font-medium text-white"
            >
              Home
            </Link>
          </li>
          <li className="inline">
            <Link
              to="/"
              className="sm:text-[22px] text-lg font-medium text-white mx-1"
            >
              /
            </Link>
          </li>
          <li className="inline">
            <Link
              to="/"
              className="sm:text-[22px] text-lg font-medium text-white"
            >
              {currentPage}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCumb;
