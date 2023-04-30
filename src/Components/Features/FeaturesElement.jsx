function FeaturesElement(props) {
  return (
    <div className=" element">
      <div className="num">
        <p>{props.num}</p>
      </div>
      <p className="title">The typical journey into product management</p>
      <div className="line"></div>
      <p className="disc">
        We are always fully focused on helping your child and you..
      </p>
    </div>
  );
}
export default FeaturesElement;
