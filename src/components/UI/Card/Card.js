import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="class__header">{props.children}</h1>
    </div>
  );
};

export default Card;
