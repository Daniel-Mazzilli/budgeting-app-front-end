import { useContext } from "react";
import { ContextData } from "../Provider/Provider";
import { Link } from "react-router-dom";
import HomeIconLight from "../Assets/accounting-light.png";
import HomeIconHover from "../Assets/accounting-hover.png";
import "./Nav.css";

export default function Nav() {
  const { balance } = useContext(ContextData);

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
      <p>
        Account Balance:
        <br />
        <span>{balance} <span>USD</span></span>
      </p>
    </nav>
  );
}
