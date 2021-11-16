import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";

export default class DetailPage extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail</h1>
      </Container>
    );
  }
}
