import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EditForm extends Component {
  state = {
    poster: "",
  };

  handleChange = (e) => {
    this.setState({
      poster: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleEditSubmit(this.state.poster);
  };

  render() {
    return (
          <Form>
            <Form.Group>
              <Form.Label>New Image</Form.Label>
              <Form.Control
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                type="text"
                placeholder="Enter Image"
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
