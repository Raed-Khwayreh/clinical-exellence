import FeaturesElement from "./FeaturesElement";
import "./FeaturesStyle.css";
const Features = () => {
  const features = [
    {
      num: "01",
      title: "The typical journey into product management",
      disc: "We are always fully focused on helping your child and you..",
    },
    {
      num: "02",
      title: "The typical journey into product management",
      disc: "We are always fully focused on helping your child and you..",
    },
    {
      num: "03",
      title: "The typical journey into product management",
      disc: "We are always fully focused on helping your child and you..",
    },
    {
      num: "04",
      title: "The typical journey into product management",
      disc: "We are always fully focused on helping your child and you..",
    },
  ];
  return (
    <section className="features">
      <div className="container">
        <div className="flex">
          {features.map((e, i) => (
            <FeaturesElement num={e.num} title={e.title} disc={e.disc} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
