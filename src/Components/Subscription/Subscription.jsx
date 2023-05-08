import "./Subscription.css";
import Rating from "./Rating";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Subscription = () => {
  const rating = [
    {
      comment:
        " Slate helps you see how many more days you need to work to reach your financial goal.",
      user: "Regina Miles",
      specialist: "Designer",
      rating: 4.5,
    },
    {
      comment: "Very helpful, Thank you",
      user: "Ra'ed Khwayreh",
      specialist: "Computer Engineer",
      rating: 4,
    },
    {
      comment: "Easy to use",
      user: "Ali Ahmad",
      specialist: "Butcher",
      rating: 2.5,
    },
  ];
  return (
    <section className="sub">
      <div className="container">
        <div className="subFlex">
          <div className="rating">
            <Carousel className="main-slide" width="100%">
              {rating.map((e, i) => (
                <Rating
                  key={i}
                  comment={e.comment}
                  user={e.user}
                  specialist={e.specialist}
                  rating={e.rating}
                />
              ))}
            </Carousel>
          </div>
          <div className="subLine"></div>
          <div className="join">
            <p className="joinp1">Problems trying to resolve the conflict</p>
            <h3>Join Us And Get 20% OFF</h3>
            <input type="text" name="" id="" placeholder="Your Email" />
            <button className="subInput">Subscribe</button>
            <p className="joinp2">Problems trying to resolve the conflict </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscription;
