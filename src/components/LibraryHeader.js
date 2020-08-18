import React from "react";
import { Container } from "react-bootstrap";
import Search from "./Search";
export default function LibraryHeader(props) {
  return (
    <Container className="page-header-box">
      <h1 className="page-header">Looking for something good to watch?</h1>
      <Search
        handleSearchInput={props.handleSearchInput}
        search={props.search}
      />
    </Container>
  );
}
