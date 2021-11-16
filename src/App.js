import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import DetailPage from "./pages/DetailPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Router>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/edit/:id" component={EditPage} />
          <Route exact path="/detail/:id" component={DetailPage} />
        </Router>
      </div>
    );
  }
}
