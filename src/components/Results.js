import React, { Component } from 'react'
import Result from './Result'

class Results extends Component {
    render() {
        console.log(this.props.results)
        return (
            <section className="results">
                {this.props.results.map(result => (
                    <Result result={result} key={result.imdbID} />
                ))}
            </section>
        )
    }
}

export default Results