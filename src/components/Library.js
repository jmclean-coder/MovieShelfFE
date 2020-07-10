import React from 'react';
import Search from "./Search";
import Results from './Results';

class Library extends React.Component {

    
    
    
    
    render(){
        return(
            <div>
                <br></br> 
            <header>
            <h1>Movie Library</h1>
            </header>
            <main>
              <Search handleInput={this.props.handleInput} search={this.props.search}/>
              {/* WIP <section className="results">
                    {this.state.myShelf.map(movie => (
                        <MovieCard movie={movie}/>
                    ))}
                </section> WIP */}
              <Results results={this.props.results} addToShelf={this.props.addToShelf} postToMovies={this.props.postToMovies} />
            </main>
          </div>
        )
    }

}

export default Library