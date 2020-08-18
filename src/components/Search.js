import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class Search extends Component {
  render() {
    return (
      <div className="search-wrap">
        <Form.Control
          onChange={this.props.handleSearchInput}
          onKeyPress={this.props.search}
          size="lg"
          type="text"
          placeholder="Search Movies"
        />
      </div>
    );
  }
}

export default Search;
