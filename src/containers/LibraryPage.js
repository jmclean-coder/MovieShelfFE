import React from 'react';
import Search from "../components/Search";
import Results from '../components/LibraryPage/Results';

function LibraryPage(props) {
        return(
            <div>
                <br></br> 
            <header>
            <h1>Movie Library</h1>
            </header>
            <main>
              <Search handleInput={props.handleInput} search={props.search}/>
              <Results results={props.results} addToShelf={props.addToShelf} postToMovies={props.postToMovies} fetchDetails={props.fetchDetails}/>
            </main>
          </div>
        )

}

export default LibraryPage