import React from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Result(props) {
  const handleClick = () => {
    console.log(props.result)
    props.fetchDetails(props.result)
    .then(detailedMovie => {
      console.log(detailedMovie)
        props.postToMovies(detailedMovie)
    });
  };

  // console.log(props.result)
  return (
    <div className="mx-auto">
      <Container>
        <Card bg={"light"}>
          <Card.Body>
            <Card.Title as="h3" className="text-center">
              {props.result.Title}
            </Card.Title>
          </Card.Body>
          <Card.Img variant="bottom" src={props.result.Poster}></Card.Img>
          <br></br>
          <Button variant="success" onClick={handleClick}>
            Add To Shelf
          </Button>
        </Card>
      </Container>
    </div>
  );
}

export default Result;
