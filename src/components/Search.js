import React from 'react'

function Search({handleInput, search}) {
    return (
       <section className="search-wrap">
        <input type="text" placeholder="Search for Movie Title" className="search" onChange={handleInput} onKeyPress={search}/>
       </section>
    )
}

export default Search

