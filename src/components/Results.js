import React, { Component } from 'react'
import Result from './Result'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'


class Results extends Component {
    render() {
        // console.log(this.props.results)
        return (
            <section className="results">
                <Container>
                <CardGroup>
                {this.props.results.map(result => (
                    <Result result={result} key={result.imdbID} addToShelf={this.props.addToShelf} />
                ))}
                </CardGroup>
                </Container>
            </section>
        )
    }
}

export default Results