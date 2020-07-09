import React, { Component } from 'react'

class Result extends Component {
    handleClick = () => {
        this.props.addToShelf(this.props.result)
    }
    render() {
        console.log(this.props.result)
        return (
            <div className="result">
            <h2>{this.props.result.Title} {this.props.result.Year}</h2>
            <img src={this.props.result.Poster} alt="Image Not Found"/>
            <br></br>
            <button className="add" onClick={this.handleClick}>Add To Shelf</button>
    
        </div>
        )
    }
}

export default Result