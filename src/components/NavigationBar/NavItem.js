import React from "react";

import "./NavItem.css";

const NavItem = (props) => {
  return (
    <li className="list">
      <a href="index.html">{props.children}</a>
    </li>
  );
};

export default NavItem;
