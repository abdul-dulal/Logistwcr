import BreadCumb from "../components/Others/BreadCumb";

const NotFound = () => {
  return (
    <div>
      <BreadCumb title="404" currentPage="404" />
      <section className="py-[100px]">
        <div className="grid lg:grid-cols-12">
          <div className="col-span-2"></div>
          <div className="lg:col-span-8 col-span-12">
            <img src="/src/assets/404.png" alt="Not Found" />
          </div>
          <div className="col-span-2"></div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
