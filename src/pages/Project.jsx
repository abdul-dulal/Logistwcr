import Projects from "../components/HomeOne/Projects";
import BreadCumb from "../components/Others/BreadCumb";
import project1 from "/src/assets/HomeOne/p1.jpg";
import project2 from "/src/assets/HomeOne/p2.jpg";
import project3 from "/src/assets/HomeOne/p3.jpg";
import project4 from "/src/assets/HomeOne/p4.jpg";
const Project = () => {
  return (
    <div>
      <BreadCumb title="Project Grid" currentPage="Project Grid" />

      {/* ST__Project__Area */}
      <section className="py-[100px]">
        <div className="container">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration=".6s"
          >
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Deltvering Results
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Proud to Deliver Excellence</h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-8 ">
            <div className="wow animate__fadeInUp" data-wow-duration=".6s">
              <Projects img={project1} title="Experts in technology fields" />
            </div>

            <div className="wow animate__fadeInUp" data-wow-duration=".6s">
              <Projects img={project2} title="Experts in technology fields" />

              <div
                className=" mt-1 wow animate__fadeInUp"
                data-wow-duration=".6s"
              >
                <Projects img={project3} title="Experts in technology fields" />
              </div>
            </div>

            <div className="wow animate__fadeInUp" data-wow-duration=".6s">
              <Projects img={project4} title="Experts in technology fields" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
