import React from "react";

import "./MainNav.css";
import NavItem from "./NavItem";

const MainNav = (props) => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <a href="index.html">
          <img
            alt="Logo"
            src="https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
            className="main-header__brand"
          />
        </a>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <NavItem>Setting</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
