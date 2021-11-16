import React, { Component } from "react";
import { Container } from "reactstrap";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getUsersList } from "../actions/userAction";

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    // this.props.dispatch(deleteDataUser());
  }
  render() {
    return (
      <Container>
        <TableComponent />
      </Container>
    );
  }
}

export default connect()(Homepage);
