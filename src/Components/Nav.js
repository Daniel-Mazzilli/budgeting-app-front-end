import { Link } from "react-router-dom";
import HomeIconLight from "../Assets/home-icon-light.png";
import HomeIconHover from "../Assets/home-icon-hover.png";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <div id="home-icon">
          <img id="home-icon-light" src={HomeIconLight} alt="home page icon" />
          <img id="home-icon-hover" src={HomeIconHover} alt="home page icon" />
        </div>
      </Link>
      <Link to="/transactions">Budget App Index</Link>
      <Link id="link-new" to="/transactions/new">
        New Transaction
      </Link>
    </nav>
  );
}
