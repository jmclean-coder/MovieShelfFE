import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import MovieCard from "./MovieCard";
import CardGroup from "react-bootstrap/CardGroup";

const Shelf = (props) => {
    console.log(props.myShelf)
  return props.myShelf.length ? (
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
  ) : (<h1 className="text-center" style={{marginTop: 300}}>You don't have any movies on your shelf yet</h1>
  );
};

export default Shelf;
