import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard'
import CardGroup from 'react-bootstrap/CardGroup'

class Shelf extends Component {
    render() {
        let rowCount = 1
        return (
            <div>
                <h1 className="text-center">My Movies!</h1>
                <Container>
                <CardGroup>
                    {this.props.myShelf.map(movie => (
                        <MovieCard movie={movie} deleteFromShelf={this.props.deleteFromShelf}/>
                    ))}
                </CardGroup>
                </Container>
            </div>
        )
    }
}

export default Shelf
