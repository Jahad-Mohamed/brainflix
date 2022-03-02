import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={MainContent} />
        <Route path="/:id" component={MainContent} />
      </Switch>
    </>
  );
};

export default App;
