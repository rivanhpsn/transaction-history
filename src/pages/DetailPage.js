import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/userAction";
import DetailComponent from "../components/DetailComponent";

class DetailPage extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Transaction</h1>
        <DetailComponent />
      </Container>
    );
  }
}

export default connect()(DetailPage);
