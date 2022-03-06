import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={MainContent} />
        <Route
          path="/videos/:id"
          render={(routerProps) => <MainContent {...routerProps} />}
        />{" "}
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </>
  );
}
