import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.nama}</td>
        </tr>
        <tr>
          <td width="200">Category</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.category}</td>
        </tr>
        <tr>
          <td width="200">Amount</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.amount}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailComponent);
