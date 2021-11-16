import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

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
          <Button color="dark" className="me-2">
            Detail
          </Button>
          <Button color="dark" className="me-2">
            Edit
          </Button>
          <Button color="dark" className="me-2">
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

const TableComponent = (props) => {
  return (
    <div>
      <Container>
        <h2 className="mt-3 mb-3">Transaction History</h2>
        <ToolkitProvider bootstrap4 keyField="id" data={props.users} columns={columns} defaultSorted={defaultSorted} search>
          {(props) => (
            <div>
              <div className="float-end mb-3">
                <SearchBar {...props.searchProps} placeholder="Search..." />
              </div>
              <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default TableComponent;
