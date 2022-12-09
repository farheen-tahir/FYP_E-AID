import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navbar() {
  // const [pop, setPop] = useState(false);
  // function handleClickPop() {
  //   setPop(!pop);
  // }
  // function closePop() {
  //   setPop(false);
  // }

  const [state, handleState] = useState(false);
  function handleClick() {
    return handleState(!state);
  }
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">EAid</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={state ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon} aria-hidden="true"></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          {/* <Router> */}
          <Link to="/signup">
            <button type="button">Sign Up</button>
          </Link>
          {/* </Router> */}
        </ul>
      </nav>
      {/* {pop ? <Form /> : ""} */}
    </>
  );
}
export default Navbar;
