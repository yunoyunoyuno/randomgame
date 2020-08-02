import React from "react";
import "./Input.css";

const Input = (props) => {
  const { type, value, onChange, id, onClick } = props;
  const inputType = type === "password" ? "password" : "text";

  return (
    <div className="inputCtn">
      <input
        type={inputType}
        value={value}
        onChange={(e) => onChange(id, e)}
        placeholder="กรุณาระบุ"
        className="input"
      />
      <span className="input-span" onClick={() => onClick(id)}>
        หายไป
      </span>
    </div>
  );
};

export default Input;
