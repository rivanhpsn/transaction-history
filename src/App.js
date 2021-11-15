import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import TableComponent from "./components/TableComponent";

class App extends Component {
  state = {
    title: "Infracom-Tech",
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
        <TableComponent users={this.state.users} />
      </div>
    );
  }
}

export default App;
