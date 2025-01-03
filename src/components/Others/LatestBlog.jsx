/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LatestBlog = ({ img }) => {
  return (
    <div className="flex flex-wrap gap-5 p-5 bg-white my-[30px]">
      <div>
        <img src={img} alt="Blog Sidebar" />
      </div>
      <div className="-mt-[7px]">
        <FontAwesomeIcon icon={faCalendar} className="text-primary" />
        <span className="ml-[5px]">Feb 25, 2024</span>
        <p className="text-lg font-medium text-secondary">
          <Link to="#">
            Top crypto exchange <br />
            influencers
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LatestBlog;
