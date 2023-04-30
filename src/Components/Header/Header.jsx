import "./HeaderStyle.css";
import {
  BsChevronCompactDown,
  BsPerson,
  BsSearch,
  BsCart,
  BsHeart,
  BsCart3,
  BsList,
} from "react-icons/bs";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg altNav d-lg-none">
        <p class="navbar-brand ms-3" href="#">
          MEDSONO
        </p>

        <div className="altNavUl">
          <BsSearch />
          <BsCart3 />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BsList />
          </button>
        </div>
        <div
          class="collapse navbar-collapse altNavList"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a href="">Home</a>
            </li>
            <li class="nav-item">
              <a href="">Product</a>
            </li>
            <li class="nav-item">
              <a href="">Pricing</a>
            </li>
            <li class="nav-item">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="header">
        <nav class="navbar navbar-expand-lg py-3 d-none d-lg-block">
          <div class="container">
            <img src="assets/images/Logo.png" alt="" />
            <p class="navbar-brand " href="#">
              MEDSONO
            </p>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link "
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                </li>
                <BsChevronCompactDown />
                <li class="nav-item">
                  <a class="nav-link" href="#work">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#project">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Pages
                  </a>
                </li>
                <li class="nav-item">
                  <img
                    src="assets/images/Vector.png"
                    class="d-none d-md-block"
                    alt=""
                  />
                  <form class="d-flex d-md-none" role="search">
                    <input
                      class="form-control d-inline"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </li>
              </ul>
            </div>
            <div
              class="collapse navbar-collapse icons"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mx-auto list">
                <li class="nav-item">
                  <div>
                    <BsPerson />
                    <span className="Login" href="">
                      Login/Register
                    </span>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <div>
                    <BsSearch />
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <div>
                    <BsCart />
                    <span className="count" href="">
                      1
                    </span>
                  </div>
                </li>
                <li class="nav-item dropdown">
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
