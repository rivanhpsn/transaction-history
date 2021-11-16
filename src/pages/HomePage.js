import React, { Component } from "react";
import { Container } from "reactstrap";
import TableComponent from "../components/TableComponent";

class Homepage extends Component {
  render() {
    return (
      <Container>
        <TableComponent users={this.props.users} />
      </Container>
    );
  }
}

export default Homepage;
