import React from "react";

import "./Button.css";

const RandomZone = (props) => {
  const { onClick, style, btnType } = props;
  let btnClass = "btn";
  if (btnType === "picked") btnClass = "btn btn-picked";

  return (
    <button className={btnClass} style={{ ...style }} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default RandomZone;
