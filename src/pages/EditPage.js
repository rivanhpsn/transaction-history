import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import swal from "sweetalert";
import { getUserDetail, putUserUpdate } from "../actions/userAction";
import { BackComponent } from "../components/BackComponent";
import FormComponent from "../components/FormComponent";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class EditPage extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }
  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal("Transaction Updated!", "Nama : " + this.props.getResponDataUser.nama + " , Category : " + this.props.getResponDataUser.category + " , Amount : " + this.props.getResponDataUser.amount, "success");
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Transaction</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditPage);
