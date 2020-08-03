import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = (props) => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <img alt="Logo" src={require("./Math.png")} className="main-header__brand" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <NavLink to={`${process.env.PUBLIC_URL}/setting`}>คัสต้อมค่าแรนด้อม</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
