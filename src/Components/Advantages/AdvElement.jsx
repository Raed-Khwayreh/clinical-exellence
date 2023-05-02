import { BsCreditCard } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
const AdvElement = () => {
  return (
    <div className="advElement">
      <div className="advCard">
        <div className="cardDiv">
          <BsCreditCard color="white" size="36" />
        </div>
        <h5>Work at the speed</h5>
        <div className="advCardLine"></div>
        <p>The gradual accumulation of information about </p>
        <button className="advButton">
          <p>Learn More</p>
          <FaChevronRight color="#23a6f0" />
        </button>
      </div>
    </div>
  );
};
export default AdvElement;
