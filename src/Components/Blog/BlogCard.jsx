import "./BlogStyle.css";
import { RiTimerLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineAreaChart } from "react-icons/ai";
const BlogCard = (props) => {
  return (
    <div className="blogCard">
      <div className="img">
        <img src={process.env.PUBLIC_URL + props.img} alt="" />
        <div className="new">
          <span>New</span>
        </div>
      </div>
      <div className="tag">
        <small>Google</small>
        <small>Trinding</small>
        <small>New</small>
      </div>
      <div className="blogText">
        <h5>Loudest à la Madison #1 (L'integral)</h5>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <div className="icons">
        <div className="icon1">
          <RiTimerLine color="#23A6F0" />
          <small>22 April ..</small>
        </div>

        <div className="icon2">
          <AiOutlineAreaChart color="#23856D" />
          <small>10 com...</small>
        </div>
      </div>

      <div>
        <a href="#">
          <h6>Learn More</h6>
          <FaChevronRight />
        </a>
      </div>
    </div>
  );
};
export default BlogCard;
