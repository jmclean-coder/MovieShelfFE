import React from "react";
import { Container } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import CardGroup from "react-bootstrap/CardGroup";

const ShelfPage = (props) => {
 
  return (
    <>
      <Container className="content-wrapper">
        <CardGroup style={{ marginBottom: "50px" }}>
          {props.myShelf.map((movie) => (
            <MovieCard
              movie={movie}
              deleteFromShelf={props.deleteFromShelf}
              handleEditSubmit={props.handleEditSubmit}
              key={movie.imdb_id}
            />
          ))}
        </CardGroup>
      </Container>
    </>
  );
};

export default ShelfPage;
