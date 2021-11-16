import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";

export default class EditPage extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Edit</h1>
      </Container>
    );
  }
}
