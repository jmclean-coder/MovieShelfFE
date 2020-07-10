import React, { Component } from 'react'
import Result from './Result'
import { Container, Row, Col } from 'react-bootstrap';


class Results extends Component {
    render() {
        // console.log(this.props.results)
        return (
            <section className="results">
                <Container>
                    <Row>
                        {this.props.results.map(result => (
                            <Result md={3} result={result} key={result.imdbID} addToShelf={this.props.addToShelf} />
                        ))}
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Results