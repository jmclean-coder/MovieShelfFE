import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard'

class Shelf extends Component {
    render() {
        let rowCount = 1
        return (
            <div>
                <h1>My Movies!</h1>
                <Container>
                <Row> 
                    {this.props.myShelf.map(movie => (
                        <Col md={3}><MovieCard movie={movie} deleteFromShelf={this.props.deleteFromShelf}/></Col>
                    ))}
                </Row>
            </Container>
            </div>
        )
    }
}

export default Shelf
