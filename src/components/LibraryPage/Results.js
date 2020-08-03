import React, { Component } from "react";
import Result from "../Result";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";

function Results(props) {
  return (
    <section className="results">
      <Container>
        <CardGroup>
          {props.results.map((result) => (
            <Result
              result={result}
              key={result.imdbID}
              addToShelf={props.addToShelf}
              postToMovies={props.postToMovies}
            />
          ))}
        </CardGroup>
      </Container>
    </section>
  );
}

export default Results;
