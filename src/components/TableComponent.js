import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container, Row, Col } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "category",
    text: "Category",
    sort: true,
  },
  {
    dataField: "amount",
    text: "Amount",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="primary" className="me-2">
              Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="primary" className="me-2">
              Edit
            </Button>
          </Link>

          <Button color="danger" className="me-2">
            Delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const TableComponent = (props) => {
  return (
    <div>
      <Container>
        <h2 className="mt-3 mb-4">Transaction History</h2>
        <ToolkitProvider bootstrap4 keyField="id" data={props.users} columns={columns} defaultSorted={defaultSorted} search>
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={"/create"}>
                    <Button color="success" className="">
                      + Create Transaction
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-end mb-3">
                    <SearchBar {...props.searchProps} placeholder="Search..." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
