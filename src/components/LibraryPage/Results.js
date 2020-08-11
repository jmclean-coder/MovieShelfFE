import React from "react";
import Result from "../Result";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";

function Results(props) {
  return (
    <section className="results">
      <Container>
        <CardGroup>
          {props.results ? (
          props.results.map((result) => (
            <Result
              result={result}
              key={result.imdbID}
              addToShelf={props.addToShelf}
              postToMovies={props.postToMovies}
              fetchDetails={props.fetchDetails}
            />
          ))) : <h2 style={{color: "white"}}>We couldn't find that movie.</h2>}
        </CardGroup>
      </Container>
    </section>
  );
}

export default Results;
