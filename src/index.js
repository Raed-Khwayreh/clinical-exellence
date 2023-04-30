import App from "./App";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import Popper from "popper.js";
window.jQuery = $;
window.Popper = Popper;

ReactDOM.render(<App />, document.getElementById("root"));
