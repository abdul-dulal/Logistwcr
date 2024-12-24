import AccrodianTwo from "../components/HomeTwo/AccodianTwo";
import BreadCumb from "../components/Others/BreadCumb";

const Faq = () => {
  return (
    <div>
      <BreadCumb title="FAQ" currentPage="FAQ" />
      <section className="py-[100px]">
        <div className="grid lg:grid-cols-12">
          <div className="col-span-2"></div>
          <div className="lg:col-span-8 col-span-12">
            <AccrodianTwo />
          </div>
          <div className="col-span-2"></div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
