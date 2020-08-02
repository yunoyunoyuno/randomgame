import React, { useRef } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import ConfigPage from "./pages/ConfigPage";
import { BrowserRouter, Route } from "react-router-dom";
import { randomData } from "./data/randomData";

const App = () => {
  const DUMMY_DATA = useRef([...randomData]);

  const setDummyData = (array) => {
    DUMMY_DATA.current = [...array];
  };
  return (
    <BrowserRouter basename="https://yunoyunoyuno.github.io/YN-RandomNumber/">
      <Route
        path="/setting"
        render={(props) => (
          <ConfigPage fakeDB={DUMMY_DATA.current} {...props} setDummyData={setDummyData} />
        )}
      />
      <Route path="/" render={(props) => <MainPage fakeDB={DUMMY_DATA.current} {...props} />} />
    </BrowserRouter>
  );
};

export default App;
