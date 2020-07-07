import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default class NavBar extends React.Component {
    handleClick = () => {
        console.log("Click")
    }
    render () {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="md">
                <Navbar.Brand href="#home">MovieShelf™</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#library">Library</Nav.Link>
                        <Nav.Link href="#shelf">My Shelf</Nav.Link>
                        <Form>
                            <Form.Group controlId="genreSelect">
                                <Form.Label>Genre select</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>NavBar
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <NavDropdown title="Special Features" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Add Random Movie To My Shelf</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Show Me A Random Genre</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Do Something Really Cool</NavDropdown.Item>
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