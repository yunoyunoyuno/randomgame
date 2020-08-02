import React from "react";
import NavigationBar from "../components/NavigationBar/MainNav";
import RandomZone from "../components/RandomZone/RandomZone";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <RandomZone />
    </React.Fragment>
  );
};

export default MainPage;
