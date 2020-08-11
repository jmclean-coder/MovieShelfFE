import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditForm from "./EditForm";
import Container from "react-bootstrap/Container"
import MovieModal from '../components/ShelfPage/MovieModal'

class MovieCard extends Component {
  state = {
    toggleForm: false,
    toggleModal: false,
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
          <Card style={{marginTop: 30, backgroundColor: "#2d2d2d"}}>
            <Card.Body>
              <Card.Title as="h3" className="text-center" style={{color: "white"}}>
                {this.props.movie.title}
              </Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={this.props.movie.poster} />
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
