import React from "react";
import Button from "../UI/Button/Button";
import "./Modal.css";

const Modal = (props) => {
  const { title, description, onClick } = props;
  return (
    <>
      <div className="blackdrop" onClick={onClick}></div>
      <div className="modal">
        <h1 className="modal__title">{title}</h1>
        <h2 className="modal__description">{description}</h2>
        <Button onClick={onClick}>OK</Button>
      </div>
    </>
  );
};

export default Modal;
