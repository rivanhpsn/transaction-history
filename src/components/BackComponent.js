import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

export const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to={"/"}>
          <Button color="dark" className="">
            Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
