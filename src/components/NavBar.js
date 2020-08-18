import React from "react";
import {
  Nav,
  Navbar,
  // NavDropdown,
  Form,
  // FormControl,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const link = {
  width: "120px",
  padding: "12px",
  margin: "0 6px 6px",

  color: "#FF4545",
};
const brand = {
  width: "120px",
  padding: "12px",

  color: "#FF4545",
};

export default function NavBar(props) {
  const handleChange = (e) => {
    props.changeFilter(e.target.value);
  };

  //map over movies in shelf, return array of arrays of those movies' genres
  const getGenres = props.shelf.map((movie) => {
    return movie.genre;
  });

  /*
  define options and assign to empty array 
  loop over getGenres Array of arrays
  split each genre array on comma and space, assign to temp variable
  loop through temp array of split genres
  add genre to options array unless options array includes genre
  return options
  */

  const getOptionsFromShelfGenres = () => {
    let options = [];
    for (let i = 0; i < getGenres.length; i++) {
      let temp = getGenres[i].split(", ");
      for (let j = 0; j < temp.length; j++) {
        if (options.includes(temp[j])) {
          continue;
        } else {
          options.push(temp[j]);
        }
      }
    }
    return options;
  };

  const renderOptionTags = (options) => {
    return options.map((option) => {
      return (
        <option value={option} key={option}>
          {option}
        </option>
      );
    });
  };

  return (
    <>
      <Navbar
        fixed="top"
        style={{ backgroundColor: "#2d2d2d" }}
        variant="dark"
        expand="md"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={link}>
              Home
            </NavLink>
            <NavLink to="/shelf" style={link}>
              My Shelf
            </NavLink>
            <NavLink to="/library" style={link}>
              Library
            </NavLink>
            {props.shelf.length ? (
              <Form inline onChange={handleChange}>
                <Form.Group controlId="genreSelect">
                  <Form.Control as="select">
                    <option value="All">All</option>
                    {renderOptionTags(getOptionsFromShelfGenres())}
                  </Form.Control>
                </Form.Group>
                <p id="filter-genre">Filter Genre</p>
              </Form>
            ) : null}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand style={brand}>MovieShelf™</Navbar.Brand>
      </Navbar>
    </>
  );
}
