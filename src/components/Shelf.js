import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import CardGroup from "react-bootstrap/CardGroup";

const Shelf = (props) => {
  return (
    <div>
      <h1 className="text-center">My Movies!</h1>
      <Container>
        <CardGroup>
          {props.myShelf.map((movie) => (
            <MovieCard
              movie={movie}
              deleteFromShelf={props.deleteFromShelf}
              handleEditSubmit={props.handleEditSubmit}
            />
          ))}
        </CardGroup>
      </Container>
    </div>
  );
};

export default Shelf;
