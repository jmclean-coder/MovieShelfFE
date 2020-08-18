import React from "react";
import { Container } from "react-bootstrap";

export default function ShelfHeader(props) {
  return (
    <Container className="page-header-box">
      {props.myShelf.length ? (
        <h1 className="page-header">Nice shelf, you have good taste.</h1>
      ) : (
        <h1 className="page-header">Your shelf is empty!</h1>
      )}
    </Container>
  );
}
