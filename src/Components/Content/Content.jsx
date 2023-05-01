import "./Content.css";
const Content = () => {
  return (
    <section className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 align-self-center text-center">
            <h4 className="p2 d-none d-lg-block">ON ALL GOLD RINGS</h4>
            <h2 className="d-none d-lg-block">
              Our Research <br /> Laboratory
            </h2>
            <h2 className="d-block d-lg-none">Our Research Laboratory</h2>
            <h4 className="p2 d-block d-lg-none">ALL IN ONE BOX</h4>
            <p className="p2 d-block d-lg-none">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <p className="p2 d-none d-lg-block">
              Problems trying to resolve the conflict
              <p>
                between
                <p>
                  the two major realms of Classical physics:
                  <p>Newtonian mechanics.</p>
                </p>
              </p>
            </p>
            <div className="contentButtons">
              <button className="contentFirstBtn bt">Shop now</button>
              <button className="contentSecondBtn bt">View More</button>
            </div>
          </div>
          <div className=" col-lg-6 text-center">
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "assets/images/content.png"}
              alt=""
              dsadas
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Content;
