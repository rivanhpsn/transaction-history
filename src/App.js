import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import DetailPage from "./pages/DetailPage";

export default class App extends Component {
  state = {
    users: [
      {
        id: 1,
        nama: "rivan",
        category: "Income",
        amount: 1000000,
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <Router>
          <Route exact path="/">
            <Homepage users={this.state.users} />
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
          <Route exact path="/edit/:id">
            <EditPage />
          </Route>
          <Route exact path="/detail/:id">
            <DetailPage />
          </Route>
        </Router>
      </div>
    );
  }
}
