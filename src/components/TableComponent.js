import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container } from "reactstrap";

const columns = [
  {
    dataField: "id",
    text: "ID",
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
  },
  {
    dataField: "category",
    text: "Category",
  },
  {
    dataField: "amount",
    text: "Amount",
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="dark" className="mr-2">
            Detail
          </Button>
          <Button color="dark" className="mr-2">
            Edit
          </Button>
          <Button color="dark" className="mr-2">
            Delete
          </Button>
        </div>
      );
    },
  },
];

const TableComponent = (props) => {
  return (
    <div>
      <Container>
        <h4 className="mt-3 mb-3">Transaction History</h4>
        <BootstrapTable keyField="id" data={props.users} columns={columns} />
      </Container>
    </div>
  );
};

export default TableComponent;
