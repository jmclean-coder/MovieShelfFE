import React, { useState, useEffect } from "react";
import { Button, Modal, Image } from "react-bootstrap";

// let API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&`;

export default function MovieModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderRatingInfo = () => {
    return props.movie.ratings.map((movieRating) => (
      <p className="movie-rating">
        {movieRating.Source}: {movieRating.Value}
      </p>
    ));
  };

  return (
    <>
      {console.log(props.movie)}
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={props.movie.poster} thumbnail />
          <h4>Year released: {props.movie.year}</h4>
          <h4>Rated: {props.movie.mpa_rated}</h4>
          <div className="movie-ratings">
            Ratings:
            {renderRatingInfo()}
          </div>
          <p>Director(s): {props.movie.director}</p>
          <p>Plot Summary: {props.movie.plot}</p>
          <p>Genre(s):{props.movie.genre}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
