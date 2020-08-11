import React from "react";
import { Container } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import CardGroup from "react-bootstrap/CardGroup";

const ShelfPage = (props) => {
  console.log(props.myShelf);
  return (
    <>
      <Container 
      className="content-wrapper"
     // style={{ marginTop: "105px" }}
      
      >
        <CardGroup style={{ marginBottom: "50px" }}>
          {props.myShelf.map((movie) => (
            <MovieCard
            movie={movie}
            deleteFromShelf={props.deleteFromShelf}
            handleEditSubmit={props.handleEditSubmit}
            />
            ))}
        </CardGroup>
      </Container>
         
    </>
  ) 
};

export default ShelfPage;
