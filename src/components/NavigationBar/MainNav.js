import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = (props) => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <Link to="/">
          <img alt="Logo" src={require("./Math.png")} className="main-header__brand" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <NavLink to="/setting">Setting</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
