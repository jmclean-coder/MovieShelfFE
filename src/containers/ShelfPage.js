import React from "react";
import { Container } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import CardGroup from "react-bootstrap/CardGroup";

const ShelfPage = (props) => {
  console.log(props.myShelf);
  return props.myShelf.length ? (
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
  ) : (
    <>
    <Container className="page-header-box">
      <h1 className="page-header" style={{color: "white" }}>
        You don't have any movies on your shelf yet
      </h1>
    </Container>

    <Container className="content-wrapper">

    </Container>
    </>
  );
};

export default ShelfPage;
