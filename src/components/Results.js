import React from 'react'
import Result from './Result'

function Results({results, popOut}) {
    return (
            <section className="results">
                {results.map(result => (
                    <Result result={result} key={result.imdbID} popOut={popOut} />
                ))}
            </section>
    )
}

export default Results
