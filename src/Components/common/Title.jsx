import "./TitleStyle.css";
const Title = (props) => {
  return (
    <div className="title" style={{ marginBottom: props.margin }}>
      <h6>{props.text}</h6>
      <h3>{props.title}</h3>
      <p>{props.parag}</p>
    </div>
  );
};
export default Title;
