import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard'

class Shelf extends Component {
    render() {
        return (
            <div>
                <h1>My Movies!</h1>
<Container>
        <Row> 
        {this.props.myShelf.map(movie => (
                    <Col><MovieCard movie={movie} deleteFromShelf={this.props.deleteFromShelf}/></Col>
                ))}
        <Col></Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
</Container>
            </div>
        )
    }
}

export default Shelf
