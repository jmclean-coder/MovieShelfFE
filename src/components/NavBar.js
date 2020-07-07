import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default class NavBar extends React.Component {

    handleChange = (e) => {
        console.log(e.target.value)
        this.props.changeGenre(e.target.value)
    }
    onShowGenreClick = () => {
        this.props.fetchMovies()
    }

    handleClickLibrary = () => {
        console.log("Show the movie library!")
    }

    handleClickShelf= () => {
        console.log("Show my shelf!")
    }

    handleClickRandomMovie = () => {
        console.log("Give me a random movie!")
        this.props.addRandomMovie()
    }
    
    handleClickRandomGenre = () => {
        console.log("Give me a random genre!")
    }
    
    handleClickSomethingAwesome = () => {
        console.log("Give me a random genre!")
    }
    
    render () {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="md">
                <Navbar.Brand href="#home">MovieShelf™</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link onClick={this.handleClickLibrary}>Library</Nav.Link>
                        <Nav.Link onClick={this.handleClickShelf}>My Shelf</Nav.Link>
                        <Form onChange={this.handleChange}>
                            <Form.Group controlId="genreSelect">
                                {/* <Form.Label>Genre select</Form.Label> */}
                                <Form.Control as="select">
                                    <option value="all">All</option>
                                    <option value="action">Action</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="drama">Drama</option>
                                </Form.Control>
                            </Form.Group>
                            <Button className="ui secondary button" onClick={this.onFindPetsClick}>Filter Genre</Button>
                        </Form>
                        <NavDropdown title="Special Features" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={this.handleClickRandomMovie} value="random">Add Random Movie To My Shelf</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={this.handleClickRandomGenre}>Show Me A Random Genre</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleClickSomethingAwesome}>Do Something Really Cool</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search Library" className="mr-sm-2" onSubmit={this.handleClick}/>
                            <Button variant="outline-success" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}