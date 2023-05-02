function FeaturesElement(props) {
  return (
    <div className=" element">
      <div className="num">
        <p>{props.num}</p>
      </div>
      <p className="titleFeatures">{props.title}</p>
      <div className="line"></div>
      <p className="disc">{props.disc}</p>
    </div>
  );
}
export default FeaturesElement;
