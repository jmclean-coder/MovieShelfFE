import React, { Component } from 'react'

class Result extends Component {
    render() {
        console.log(this.props.result.Title)
        return (
            <div className="result">
            <h2>{this.props.result.Title} {this.props.result.Year}</h2>
            <img src={this.props.result.Poster} alt="Image Not Found"/>
            <br></br>
            <button className="add" >Add To Shelf</button>
    
        </div>
        )
    }
}

export default Result