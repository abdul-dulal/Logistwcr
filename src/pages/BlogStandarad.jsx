import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogContent from "../components/HomeTwo/BlogContent";
import BreadCumb from "../components/Others/BreadCumb";
import blog1 from "/src/assets/HomeTwo/b1.jpg";
import blog2 from "/src/assets/HomeTwo/b2.jpg";
import blog3 from "/src/assets/HomeTwo/b3.jpg";
import blog4 from "/src/assets/HomeTwo/blog7.jpg";
import blog5 from "/src/assets/HomeTwo/blog8.jpg";
import blog6 from "/src/assets/HomeTwo/blog9.jpg";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const BlogStandarad = () => {
  return (
    <div>
      <BreadCumb title="Blog Standarad" currentPage="Blog Standarad" />
      <div className="py-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <BlogContent
              blog={blog1}
              bTitle="New Additions to our great Metro trucks."
            />
            <BlogContent
              blog={blog2}
              bTitle="Express delivery is going to slow down in 2024."
            />
            <BlogContent
              blog={blog3}
              bTitle="Varying complexity, provide long-term guarantees"
            />
            <BlogContent
              blog={blog4}
              bTitle="Manufacturing Research in Dublin and Regions"
            />
            <BlogContent
              blog={blog5}
              bTitle="About 9 Stages of Logistical Management"
            />
            <BlogContent
              blog={blog6}
              bTitle="Cargo Flow Through Better Supply in UK"
            />
          </div>
          <div className="py-[70px]">
            <ul>
              <li className="inline-block">
                <Link
                  to="/"
                  className="inline-block leading-10 w-10 h-10 mr-2 text-center border border-solid border-[#dddddd] rounded-[3px] text-[#292930] text-lg font-medium duration-500 hover:bg-primary hover:text-white"
                >
                  <FontAwesomeIcon icon={faAnglesLeft} />
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  to="/"
                  className="inline-block leading-10 w-10 h-10 mr-2 text-center border border-solid border-[#dddddd] rounded-[3px]  text-lg font-medium duration-500 bg-primary text-white"
                >
                  1
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  to="/"
                  className="inline-block leading-10 w-10 h-10 mr-2 text-center border border-solid border-[#dddddd] rounded-[3px] text-[#292930] text-lg font-medium duration-500 hover:bg-primary hover:text-white"
                >
                  2
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  to="/"
                  className="inline-block leading-10 w-10 h-10 mr-2 text-center border border-solid border-[#dddddd] rounded-[3px] text-[#292930] text-lg font-medium duration-500 hover:bg-primary hover:text-white"
                >
                  3
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  to="/"
                  className="inline-block leading-10 w-10 h-10 mr-2 text-center border border-solid border-[#dddddd] rounded-[3px] text-[#292930] text-lg font-medium duration-500 hover:bg-primary hover:text-white"
                >
                  <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogStandarad;
