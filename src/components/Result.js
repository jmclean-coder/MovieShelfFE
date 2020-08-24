import React from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const handleImageError = (e) => {
  e.target.src =
    "https://i.pinimg.com/originals/be/58/f5/be58f582e749c1f722df0f38be5e0995.jpg";
};

function Result(props) {
  const handleClick = () => {
    props.fetchDetails(props.result).then((detailedMovie) => {
      props.postToMovies(detailedMovie);
    });
  };

  return (
    <div className="mx-auto">
      <Container>
        <Card className="movie-card">
          <Card.Body>
            <Card.Title
              as="h3"
              className="text-center"
              style={{ color: "white" }}
            >
              {props.result.Title}
            </Card.Title>
          </Card.Body>
          <Card.Img
            variant="bottom"
            src={props.result.Poster}
            onError={handleImageError}
            style={{ maxHeight: 410 }}
          ></Card.Img>
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
