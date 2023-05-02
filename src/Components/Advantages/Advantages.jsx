import "./AdvantagesStyle.css";
import Title from "../common/Title";
import AdvElement from "./AdvElement";
const Advantages = () => {
  const array = [1, 2, 3, 4];
  return (
    <section className="advantages">
      <div className="container">
        <div className="ms-md-5">
          <Title
            margin="70px"
            text="Practice Advice"
            title="Our Main Advantages"
            parag="
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics"
          />
          <div className="row justify-content-center">
            <div className="col-md-5">
              <img
                className="img-fluid "
                src={process.env.PUBLIC_URL + "assets/images/adv.png"}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="advFlex">
                {array.map(() => (
                  <AdvElement />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advantages;
