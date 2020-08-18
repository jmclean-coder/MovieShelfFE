import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

class Search extends Component {
  render() {
    return (
      <Container>
        <section className="search-wrap">
          <Form.Group>
            <Form.Control
              onChange={this.props.handleSearchInput}
              onKeyPress={this.props.search}
              size="lg"
              type="text"
              placeholder="Search for a Movie Title"
            />
          </Form.Group>
        </section>
      </Container>
    );
  }
}

export default Search;
