import React, { Component } from "react";
import { Container } from "reactstrap";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { deleteUserDetail, getUsersList } from "../actions/userAction";

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteUserDetail());
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
