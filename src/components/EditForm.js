import { React, Component, Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EditForm extends Component {
  state = {
    poster: "",
    showing: false,
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

  showForm = () => {
    if (this.state.poster === false) {
      this.setState({
        showing: true,
      });
    } else {
      this.setState({
        showing: false,
      });
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.showing === false ? null : (
          <Form>
            <Form.Group>
              <Form.Label>New Image</Form.Label>
              <Form.Control
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                type="image"
                placeholder="Enter Image"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
        <MovieCard showForm={this.showForm}/>
      </Fragment>
    );
  }
}

export default EditForm;
