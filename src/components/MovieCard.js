import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditForm from "./EditForm";
import Container from "react-bootstrap/Container";
import MovieModal from "../components/ShelfPage/MovieModal";

class MovieCard extends Component {
  state = {
    toggleForm: false,
    toggleModal: false,
  };

  handleImageError = (e) => {
    e.target.src =
      "https://i.pinimg.com/originals/be/58/f5/be58f582e749c1f722df0f38be5e0995.jpg";
  };

  handleDeleteClick = () => {
    this.props.deleteFromShelf(this.props.movie.id);
  };

  handleEditClick = () => {
    this.showForm();
  };

  showForm = () => {
    console.log("hi from show form");
    if (this.state.toggleForm === false) {
      this.setState({
        toggleForm: true,
      });
    } else {
      this.setState({
        toggleForm: false,
      });
    }
  };

  render() {
    return (
        <div className="mx-auto">
          <Container>
          <Card className="movie-card" style={{marginTop: 50}}>
            <Card.Body>
              <Card.Title
                as="h3"
                className="text-center"
                style={{ color: "white" }}
              >
                {this.props.movie.title}
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="top"
              src={this.props.movie.poster}
              onError={this.handleImageError}
              style={{ maxHeight: 410 }}
            />
            <MovieModal movie={this.props.movie} />
            {this.state.toggleForm ? (
              <Button variant="info" onClick={this.handleEditClick}>
                Close
              </Button>
            ) : (
              <Button variant="info" onClick={this.handleEditClick}>
                Edit Poster
              </Button>
            )}
            <Button variant="danger" onClick={this.handleDeleteClick}>
              Delete
            </Button>
          </Card>
        </Container>
        {this.state.toggleForm ? (
          <EditForm
            handleEditSubmit={this.props.handleEditSubmit}
            movie={this.props.movie}
          />
        ) : null}
      </div>
    );
  }
}

export default MovieCard;
