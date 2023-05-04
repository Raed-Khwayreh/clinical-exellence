import "./HeaderStyle.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import {
  BsChevronCompactDown,
  BsPerson,
  BsSearch,
  BsHeart,
  BsFilterRight,
} from "react-icons/bs";
import CartIcon from "../Cart icon/CartIcon";
const Header = () => {
  const altNavList = ["Home", "Product", "Pricing", "Content"];
  const basicNavList = [
    {
      text: "Home",
      item: <></>,
      class: "nav-item",
    },
    {
      text: "Shop",
      item: (
        <>
          <div
            className="nav-link"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsChevronCompactDown color="white" />
          </div>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </>
      ),
      className: "nav-item dropdown",
    },
    {
      text: "About",
      item: <></>,
      className: "nav-item",
    },
    {
      text: "Blog",
      item: <></>,
      item: <></>,
      className: "nav-item",
    },
    {
      text: "Content",
      item: <></>,
      item: <></>,
      className: "nav-item",
    },
    {
      text: "Pages",
      item: <></>,
      item: <></>,
      className: "nav-item",
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg altNav d-lg-none">
        <p className="navbar-brand ms-3" href="#">
          MEDSONO
        </p>

        <div className="altNavUl">
          <div className="searchIcon">
            <BsSearch />
            <input type="" />
          </div>
          <CartIcon></CartIcon>
          <div>
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
                  <li className={e.class} key={i}>
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
                  <Link to="/dashboard" className="toDash">
                    <div>
                      <BsPerson size={16} />
                      <span className="Login" href="">
                        Login/Register
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item dropdown ">
                  <div className="searchIcon">
                    <BsSearch />
                    <input type="" />
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div>
                    <CartIcon />
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div>
                    <BsHeart size={16} />
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
