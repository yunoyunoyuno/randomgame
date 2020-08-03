import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Input from "./Form/Input/Input";
import Button from "./UI/Button/Button";

import "./OurForm.css";
import Modal from "./Modal/Modal";

const OurForm = (props) => {
  let { fakeDB, setDummyData } = props;
  const textData = fakeDB.map((d) => {
    return { id: d.id, text: d.text };
  });

  const [formState, setStateForm] = useState(textData);
  const [stateErr, setErrState] = useState(false);
  const [stateSubmit, setSubmitState] = useState(false);

  const onChange = (id, e) => {
    e.preventDefault();
    const text = e.target.value;
    const newArr = [...formState];
    const index = newArr.findIndex((c) => c.id === id);
    newArr[index].text = text;
    newArr[index].isValid = true;
    setStateForm([...newArr]);
  };

  const onClick = (id) => {
    const updatedData = formState.filter((c) => c.id !== id);
    if (updatedData.length + 1 === 1) {
      return setErrState(true);
    }
    setStateForm(updatedData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newDB = [];
    formState.forEach((c) =>
      newDB.push({
        id: c.id,
        text: c.text
      })
    );
    setDummyData(newDB);
    setSubmitState(true);
  };

  const allData = formState.map((dt) => (
    <Input
      key={dt.id}
      id={dt.id}
      value={dt.text}
      isValid={dt.isValid}
      onChange={onChange}
      onClick={onClick}
    />
  ));

  const onSetModal = () => {
    setErrState(false);
  };

  useEffect(() => {
    setDummyData(formState);
  });

  const onAdd = () => {
    return setStateForm((f, i) =>
      f.concat({ id: Math.random() * new Date().getTime(), text: "ไฮ ขอบคุณที่สร้างฉัน" })
    );
  };

  return (
    <>
      {stateSubmit && <Redirect to="/" />}
      {stateErr && (
        <Modal onClick={onSetModal} title="เตือนก่อนนะ" description="ต้องเหลืออย่างน้อย 1 ข้อมูล" />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginRight: "0.2rem"
        }}
      >
        <h1 className="form-title">คัสต้อม ค่าแรนด้อม</h1>
        <Button onClick={onAdd}>+</Button>
      </div>
      <form className="our-form" onSubmit={(e) => onSubmit(e)}>
        {allData}
        <button className="btn-form">โอเค เล้สโก</button>
      </form>
    </>
  );
};

export default OurForm;
