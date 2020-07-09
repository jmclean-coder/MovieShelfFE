import React, { Component, Fragment } from 'react'


class MovieCard extends Component {
    handleClick = () => {
        this.props.deleteFromShelf(this.props.movie.imdbID)
    }
    render() {
        return (
            <Fragment>
            <div className="movie">
            <h2>{this.props.movie.Title} {this.props.movie.Year}</h2>
            <img src={this.props.movie.Poster} alt="Image Not Found"/>
            <button onClick={this.handleClick}>Delete</button>
            </div>
            </Fragment>
        )
    }
}

export default MovieCard
