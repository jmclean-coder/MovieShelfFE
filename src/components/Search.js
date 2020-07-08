import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <section className="search-wrap">
        <input type="text" placeholder="Search for Movie Title" className="search" onChange={this.props.handleInput} onKeyPress={this.props.search}/>
       </section>
        )
    }
}

export default Search