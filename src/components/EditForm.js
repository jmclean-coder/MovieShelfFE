import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EditForm extends Component {
  state = {
    poster: "",
  };

  handleChange = (e) => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    //if edit form state is expanded to include all attributes of a movie, and the keys in state EXACTLY MATCH the keys in movie obj, can change below to either send or overwrite the entire movie, or overwrite specific attributes in relation to the form.
    let updatedMovie = {...this.props.movie, poster: this.state.poster}
    console.log(updatedMovie)
  
    this.props.handleEditSubmit(updatedMovie);
  };

  render() {
    return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>New Image</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                placeholder="Enter Image Url"
                name="poster"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
    );
  }
}

export default EditForm;
