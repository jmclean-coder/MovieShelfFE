import React, { useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";

export default function MovieModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderRatingInfo = () => {
    return props.movie.ratings.map((movieRating) => (
      <p
        style={{ color: "white" }}
        className="movie-rating"
        key={`rating_${movieRating.Source}`}
      >
        {movieRating.Source}: {movieRating.Value}
      </p>
    ));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            backgroundColor: "#212121",
            borderBottom: "3px solid #1E1C1C",
          }}
          closeButton
        >
          <Modal.Title
            style={{ color: "white", width: "100%", textAlign: "center" }}
          >
            {props.movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: "#212121" }}
          className="text-center"
        >
          <Image src={props.movie.poster} thumbnail />
          <h4 style={{ color: "white", marginTop: 20 }}>
            Year released: {props.movie.year}
          </h4>
          <h4 style={{ color: "white" }}>Rated: {props.movie.mpa_rated}</h4>
          <div className="movie-ratings">
            <p style={{ color: "white" }}>Ratings:</p>
            {renderRatingInfo()}
          </div>
          <p style={{ color: "white" }}>Director(s): {props.movie.director}</p>
          <p style={{ color: "white" }}>Plot Summary: {props.movie.plot}</p>
          <p style={{ color: "white" }}>Genre(s):{props.movie.genre}</p>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "#212121", borderTop: "3px solid #1E1C1C" }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
