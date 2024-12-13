import FeaturedSlider from "../components/HomeOne/FeaturedSlider";
import STslider from "../components/HomeOne/STslider";

const HomeOne = () => {
  return (
    <div>
      {/* ST Featured Slider */}
      <FeaturedSlider />

      {/* ST Slider */}
      <section className="relative">
        <STslider />
      </section>
    </div>
  );
};

export default HomeOne;
