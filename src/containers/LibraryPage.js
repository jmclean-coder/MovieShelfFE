import React from "react";
import { Container } from "react-bootstrap";
import Results from "../components/LibraryPage/Results";

function LibraryPage(props) {
  return (
    <>
      <Container style={{ minHeight: "88.5em", marginTop: "105px" }}>
        <Results
          results={props.results}
          addToShelf={props.addToShelf}
          postToMovies={props.postToMovies}
          fetchDetails={props.fetchDetails}
        />
      </Container>
    </>
  );
}

export default LibraryPage;
