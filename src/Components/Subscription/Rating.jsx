import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = (props) => {
  return (
    <>
      {" "}
      <div className="ratingBar">
        <AiFillStar color="#F3CD03" />
        <AiFillStar color="#F3CD03" />
        <AiFillStar color="#F3CD03" />
        <AiFillStar color="#F3CD03" />
        <AiOutlineStar color="#F3CD03" />
      </div>
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
