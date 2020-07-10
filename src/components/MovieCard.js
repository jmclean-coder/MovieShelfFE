import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


class MovieCard extends Component {

    state = {
        image: ''
    }

    handleClick = () => {
        this.props.deleteFromShelf(this.props.movie.id)
    }

    handleEditClick = () => {
        this.props.showForm()
    }

    render() {
        return (
            <Fragment>
                <div className="mx-auto">
                    <Card bg={"light"}>
                        <Card.Body>
                    <Card.Title as="h4" className="text-center">{this.props.movie.title} - {this.props.movie.year}</Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src={this.props.movie.poster}/>
                    <Button variant="info" onClick={this.handleEditClick}>Edit Poster</Button>
                    <Button variant="danger" onClick={this.handleClick}>Delete</Button>
                    </Card>
                </div>
            </Fragment>
        )
    }
}

export default MovieCard
