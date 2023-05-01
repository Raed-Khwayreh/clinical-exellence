import "./AdvantagesStyle.css";
import { BsCreditCard } from "react-icons/bs";
const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <div className="ms-md-5">
          <div className="advantagesText">
            <h6>Practice Advice</h6>
            <h3>Our Main Advantages</h3>
            <p></p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "assets/images/adv.png"}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <div className="advCard">
                    <div className="cardDiv">
                      <BsCreditCard color="white" size="36" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advantages;
