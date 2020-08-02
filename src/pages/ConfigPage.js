import React from "react";
import NavigationBar from "../components/NavigationBar/MainNav";
import OurForm from "../components/OurForm";

const ConfigPage = (props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <OurForm fakeDB={props.fakeDB} setDummyData={props.setDummyData} />
    </React.Fragment>
  );
};

export default ConfigPage;
