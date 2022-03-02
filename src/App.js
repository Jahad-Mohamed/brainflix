import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

export default App;
