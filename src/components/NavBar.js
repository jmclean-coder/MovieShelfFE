import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component {

    handleChange = (e) => {
        this.props.changeGenre(e.target.value)
    }
    onShowGenreClick = () => {
        console.log("Filter genre!")
        // this.props.fetchMovies()
    }

    handleClickLibrary = () => {
        console.log("Show the movie library!")
    }

    handleClickShelf= () => {
        console.log("Show my shelf!")
    }

    handleClickRandomMovie = () => {
        console.log("Give me a random movie!")
        // this.props.addRandomMovie()
    }
    
    handleClickRandomGenre = () => {
        console.log("Give me a random genre!")
    }
    
    handleClickSomethingAwesome = () => {
        console.log("Give me something awesome!")
    }
    
    render () {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="md">
                <Navbar.Brand href="#home">MovieShelf™</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link to="/" exact onClick={this.handleClickLibrary}>Library</Nav.Link>
                        <Nav.Link onClick={this.handleClickShelf}>My Shelf</Nav.Link>
                        <NavDropdown title="Special Features" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={this.handleClickRandomMovie} value="random">Add Random Movie To My Shelf</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={this.handleClickRandomGenre}>Show Me A Random Genre</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleClickSomethingAwesome}>Do Something Really Cool</NavDropdown.Item>
                        </NavDropdown>
                        <Form inline onChange={this.handleChange}>
                            <Form.Group controlId="genreSelect">
                                {/* <Form.Label>Genre select</Form.Label> */}
                                <Form.Control as="select">
                                    <option value="all">All</option>
                                    <option value="action">Action</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="drama">Drama</option>
                                </Form.Control>
                            </Form.Group>
                        <Button variant="outline-light" onClick={this.onShowGenreClick}>Filter Genre</Button>
                        </Form>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search Library" className="mr-sm-2" onSubmit={this.handleClick}/>
                            <Button variant="outline-light" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}