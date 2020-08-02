import React, { useState, useCallback } from "react";
import { randomData } from "../../data/randomData";
import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../Modal/Modal";
import "./RandomZone.css";

const RandomZone = (props) => {
  const [stateNum, setNumState] = useState("เลขที่ออก");
  const [stateOpenModal, setOpenModalState] = useState(false);
  const [stateIsRandom, setStateIsRandom] = useState(false);

  const randomInt = useCallback((min, max) => {
    setStateIsRandom(true);
    return Math.ceil(Math.random() * (max - min + 1));
  }, []);

  const startRandom = () => {
    setNumState(randomInt(1, randomData.length));
  };

  const handleModal = () => {
    setOpenModalState((b) => !b);
    setStateIsRandom(false);
  };

  let btnStyle = "";
  if (stateIsRandom) {
    btnStyle = "picked";
  }

  let title = "ยังไม่ได้สุ่ม";
  let msg = "รอเพื่อนๆพี่ๆน้องๆหนูๆ เลือกอยู่นะ";
  if (typeof stateNum !== "string") {
    msg = `${randomData[+stateNum - 1].text}`;
    title = `เลข ${stateNum} !`;
  }

  return (
    <>
      {stateOpenModal && <Modal title={title} description={msg} onClick={handleModal} />}
      <div className="gameZone">
        <Title>มาเสี่ยงทายกันเถอะน่า</Title>
        <div className="gameZone__btn-Container">
          <Button onClick={startRandom} style={{ margin: "0.5rem 1.2rem" }}>
            สุ่มเลย!
          </Button>
          <Button style={{ margin: "0.5rem 1.2rem" }} onClick={handleModal} btnType={btnStyle}>
            ผลลัพธ์
          </Button>
        </div>
        <div className="gameZone__result">
          <Card>{stateNum}</Card>
        </div>
      </div>
    </>
  );
};

export default RandomZone;
