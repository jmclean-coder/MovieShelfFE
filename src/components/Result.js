import React, { Component, Fragment } from 'react'

class Result extends Component {
    handleClick = () => {
        this.props.addToShelf(this.props.result)
    }
    render() {
        // console.log(this.props.result)
        return (
            <Fragment>
                <div className="result">
                    <h4>{this.props.result.Title} {this.props.result.Year}</h4>
                    <img height={300} src={this.props.result.Poster} alt="Image Not Found"/>
                    <br></br>
                    <button className="add" onClick={this.handleClick}>Add To Shelf</button>
                </div>
            </Fragment>
        )
    }
}

export default Result