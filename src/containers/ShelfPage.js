import React, { useContext } from "react";
import { FilterContext } from "../App";
import { Container } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import CardGroup from "react-bootstrap/CardGroup";

const ShelfPage = (props) => {
  const filterContext = useContext(FilterContext);
  return (
    <>
      <Container className="page-header-box">
        {props.myShelf.length ? (
          <h1 className="page-header">Nice shelf, you have good taste.</h1>
        ) : (
          <h1 className="page-header">Your shelf is empty!</h1>
        )}
      </Container>
      <Container
        className="content-wrapper"
        // style={{ marginTop: "105px" }}
      >
        <CardGroup style={{ marginBottom: "50px" }}>
          {props.myShelf.map(
            (movie) =>  
                  <MovieCard
                    movie={movie}
                    deleteFromShelf={props.deleteFromShelf}
                    handleEditSubmit={props.handleEditSubmit}
                    key={movie.imdb_id}
                  />
          )}
        </CardGroup>
      </Container>
    </>
  );
};

export default ShelfPage;
