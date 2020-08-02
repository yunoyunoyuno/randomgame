import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = (props) => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <Link to="/">
          <img
            alt="Logo"
            src="https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
            className="main-header__brand"
          />
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
