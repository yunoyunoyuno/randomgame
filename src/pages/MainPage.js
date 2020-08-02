import React from "react";
import NavigationBar from "../components/NavigationBar/MainNav";
import RandomZone from "../components/RandomZone/RandomZone";

const MainPage = (props) => {
  const { fakeDB } = props;
  return (
    <React.Fragment>
      <NavigationBar />
      <RandomZone fakeDB={fakeDB} />
    </React.Fragment>
  );
};

export default MainPage;
