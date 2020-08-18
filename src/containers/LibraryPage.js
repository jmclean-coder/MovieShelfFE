import React from "react";
import { Container } from "react-bootstrap";
import Search from "../components/Search";
import Results from "../components/LibraryPage/Results";

function LibraryPage(props) {
  return (
    <>
      <Container style={{ minHeight: "100em", marginTop: "105px" }}>
        <div className="text-center">
          <h1 style={{ color: "white" }}>Movie Library</h1>
        </div>
        <Search handleInput={props.handleInput} search={props.search} />
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
