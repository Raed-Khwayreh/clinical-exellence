import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
const Rating = (props) => {
  function starArray() {
    const half = (props.rating * 10) % 10 == 5 ? true : false;
    const fill = half ? props.rating - 0.5 : props.rating;
    const notfill = half ? 5 - props.rating - 0.5 : 5 - fill;
    const bar = [];
    for (let index = 0; index < fill; index++) {
      bar.push(<BsStarFill key={index} color="#F3CD03" />);
    }
    if (half) {
      bar.push(<BsStarHalf key={fill + 1} color="#F3CD03" />);
    }
    if (props.rating != 4.5) {
      for (let index = 0; index < notfill; index++) {
        bar.push(<BsStar color="#F3CD03" key={index + 6} />);
      }
    }
    return bar;
  }
  return (
    <>
      <div className="ratingBar">{starArray().map((e) => e)}</div>
      <div>
        <h6>{props.comment}</h6>
        <div className="profile">
          <div className="profileImage"></div>
          <div className="profileName">
            <a href="">
              <p>{props.user}</p>
            </a>
            <h6>{props.specialist}</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Rating;
