import "./Footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-3">
            <h3>Get In Touch </h3>
            <p>the quick fox jumps over the lazy dog</p>
            <div className="footerIcons">
              <BsFacebook color="white" />
              <BsInstagram color="white" />
              <BsTwitter color="white" />
            </div>
          </div>
          <div className="col-md-3">
            <h3>Company info</h3>
            <p>About US</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className="col-md-3">
            <h3>Features</h3>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h6>Made With Love By Finland All Right Reserved </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
