import React from 'react'

export default class Filters extends React.Component {
    state = {
        filter : 'all'
    }
    onShowGenreClick = () => {
        this.props.fetchMovies()
    }
    // fetchMovies = () => {
    //     let url = `localhost:3000/movies`
    //     fetch (url).then(r=>r.json()).then(j=>{
    //         if (this.state.filter !== 'all') {
    //             j.filter(movie => {
    //                 movie.genre === this.state.filter
    //             })
    //         } else {
    //                 this.setState({ movies : j })
    //             }
    //         }
    //     })
    // }
    handleChange = (e) => {
        console.log(e.target.value)
        this.props.changeGenre(e.target.value)
    }
    // changeGenre = (newGenre) => {
    //     this.setState({filter:newGenre})
    // }
    render () {
        return (
            <div className="ui form">
                <h3>Genre Filter</h3>
                <div className="field" onChange={this.handleChange}>
                <select name="type" id="type">
                    <option value="all">All</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                </select>
                </div>

                <div className="field">
                <button className="ui secondary button" onClick={this.onFindPetsClick}>Show genre</button>
                </div>
            </div>
        )
    }
}