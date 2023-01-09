import { Link } from "react-router-dom";
import HomePageIcon from "../Assets/home-page-icon.png";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <img src={HomePageIcon} alt="home page icon" />
      </Link>
      <Link to="/transactions">Budget App Index</Link>
      <Link id="link-new" to="/transactions/new">
        New Transaction
      </Link>
    </nav>
  );
}
