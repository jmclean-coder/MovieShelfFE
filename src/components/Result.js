import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class Result extends Component {
  handleClick = () => {
    // this.props.addToShelf(this.props.result)
    this.props.postToMovies(this.props.result);
  };
  render() {
    // console.log(this.props.result)
    return (
      <div className="mx-auto">
        <Container>
          <Card bg={"light"}>
            <Card.Body>
              <Card.Title as="h3" className="text-center">
                {this.props.result.Title} - {this.props.result.Year}
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src={this.props.result.Poster}
            ></Card.Img>
            <br></br>
            <Button variant="success" onClick={this.handleClick}>
              Add To Shelf
            </Button>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Result;
