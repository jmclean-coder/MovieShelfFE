import React from 'react'
import { Container } from 'react-bootstrap';
import MovieCard from '../components/MovieCard'
import CardGroup from 'react-bootstrap/CardGroup'

function ShelfPage(props) {
        let rowCount = 1
        return (
            <div>
                <h1 className="text-center">My Movies!</h1>
                <Container>
                <CardGroup>
                    {props.myShelf.map(movie => (
                        <MovieCard movie={movie} deleteFromShelf={props.deleteFromShelf} handleEditSubmit={props.handleEditSubmit} />
                    ))}
                </CardGroup>
                </Container>
            </div>
        )

}

export default ShelfPage                                                                                                                                                                                                                                                                                         
