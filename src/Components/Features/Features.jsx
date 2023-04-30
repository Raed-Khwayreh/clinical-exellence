import FeaturesElement from "./FeaturesElement";
import "./FeaturesStyle.css";
const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="flex">
          <FeaturesElement num="01" />
          <FeaturesElement num="02" />
          <FeaturesElement num="03" />
          <FeaturesElement num="04" />
        </div>
      </div>
    </section>
  );
};
export default Features;
