import "./HeaderStyle.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  BsChevronCompactDown,
  BsPerson,
  BsSearch,
  BsCart,
  BsHeart,
  BsCart3,
  BsFilterRight,
} from "react-icons/bs";
const Header = () => {
  const altNavList = ["Home", "Product", "Pricing", "Content"];
  const basicNavList = [
    {
      text: "Home",
      item: <></>,
    },
    {
      text: "Shop",
      item: <BsChevronCompactDown />,
    },
    {
      text: "About",
      item: <></>,
    },
    {
      text: "Blog",
      item: <></>,
    },
    {
      text: "Content",
      item: <></>,
    },
    {
      text: "Pages",
      item: <></>,
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg altNav d-lg-none">
        <p className="navbar-brand ms-3" href="#">
          MEDSONO
        </p>

        <div className="altNavUl">
          <BsSearch />
          <BsCart3 />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BsFilterRight />
          </button>
        </div>
        <div
          className="collapse navbar-collapse altNavList"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            {altNavList.map((e, i) => (
              <li className="nav-item" key={i}>
                <a href="">{e}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <header className="header">
        <nav className="navbar navbar-expand-lg py-3 d-none d-lg-block">
          <div className="container">
            <img src="assets/images/Logo.png" alt="" />
            <p className="navbar-brand " href="#">
              MEDSONO
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                {basicNavList.map((e, i) => (
                  <li className="nav-item" key={i}>
                    <div className="special">
                      <a className="nav-link" aria-current="page" href="#">
                        {e.text}
                      </a>
                      {e.item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="collapse navbar-collapse icons"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto list">
                <li className="nav-item">
                  <div>
                    <BsPerson />
                    <span className="Login" href="">
                      Login/Register
                    </span>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div>
                    <BsSearch />
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div>
                    <BsCart />
                    <span className="count" href="">
                      1
                    </span>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div>
                    <BsHeart />
                    <span className="count" href="">
                      1
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className=" Title">
          <h1 className="d-md-block d-none">Clinical Excellence</h1>
          <h1 className="d-md-none d-block">Personalized Care</h1>
          <p>
            We know how large objects will act, but{" "}
            <br className="d-md-block d-none" /> things on a small scale
          </p>
          <div className="headerButtons">
            <button className="first bt">Get Quote Now</button>
            <button type="button " className="second bt">
              Learn More
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
