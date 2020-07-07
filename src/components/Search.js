import React from 'react'

function Search(props) {
    return (
       <section className="search-wrap">
        <input type="text" placeHolder="Search for Movie Title" className="search" onChange={props.handleInput}/>
       </section>
    )
}

export default Search

