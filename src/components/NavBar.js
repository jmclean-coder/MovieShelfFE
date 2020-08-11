import React, { useEffect } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const link = {
  width: "120px",
  padding: "12px",
  margin: "0 6px 6px",

  color: "#FF4545"
};
const brand = {
  width: "120px",
  padding: "12px",

  color: "#FF4545"
};

export default function NavBar(props) {
  const handleChange = (e) => {
    props.changeGenre(e.target.value);
  };
  const onShowGenreClick = () => {
    console.log("Filter genre!");
    // props.fetchMovies()
  };

  const handleClickLibrary = () => {
    console.log("Show the movie library!");
  };

  const handleClickShelf = () => {
    console.log("Show my shelf!");
  };

  const handleClickRandomMovie = () => {
    console.log("Give me a random movie!");
  };

  const handleClickRandomGenre = () => {
    console.log("Give me a random genre!");
  };

  const handleClickSomethingAwesome = () => {
    console.log("Give me something awesome!");
  };

  //map over movies in shelf, return array of arrays of those movies' genres
  const getGenres = props.shelf.map((movie) => {
    return movie.genre;
  });
  
  /*
  define options and assign to empty array 
  loop over getGenres AoAg
  split each genre array on comma + space, assign to temp variable
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
    console.log(options);
    return options;
  };

  const renderOptionTags = (options) => {
    console.log(options);
    return options.map((option) => {
      return <option value={option.toLowerCase()}>{option}</option>;
    });
  };




  return (
    <div>
      {console.log(getGenres)}
      <Navbar fixed="top" style={{backgroundColor: "#2d2d2d"}} variant="dark" expand="md">
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
            {/* <NavDropdown title="Special Features" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={handleClickRandomMovie} value="random">Add Random Movie To My Shelf</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleClickRandomGenre}>Show Me A Random Genre</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleClickSomethingAwesome}>Do Something Really Cool</NavDropdown.Item>
                        </NavDropdown> */}
            {props.shelf.length ? (
              <Form inline onChange={handleChange}>
                <Form.Group controlId="genreSelect">
                  {/* <Form.Label>Genre select</Form.Label> */}
                  <Form.Control
                    as="select"
                    >
                    <option value="all">All</option>
                    {renderOptionTags(getOptionsFromShelfGenres())}
                  </Form.Control>
                </Form.Group>
                <Button style={{color: "#FF4545"}} variant="outline-dark" onClick={onShowGenreClick}>
                  Filter Genre
                </Button>
              </Form>
            ) : null}
          </Nav>
          {/* <Form inline>
                            <FormControl type="text" placeholder="Search Library" className="mr-sm-2" onSubmit={handleClick}/>
                            <Button variant="outline-light" >Search</Button>
                        </Form> */}
        </Navbar.Collapse>
        <Navbar.Brand style={brand}>MovieShelf™</Navbar.Brand>
      </Navbar>
    </div>
  );
}
