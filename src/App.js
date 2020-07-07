import React, { useState } from 'react'
import Search from './components/Search'
import axios from 'axios'
import NavBar from './components/NavBar'
import Filters from './components/Filters'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let API = 'http://www.omdbapi.com/?apikey=e742e527&'
  let [state, setState] = useState({
    input: "",
    results: [],
    selected: {},
    filter: 'all'
  })
  let handleInput = (e) => {
    let input = e.target.value
    setState(prevState => {
      return {...prevState, input:input}
    })
    console.log(state.input)
  }

  // BELOW IS JUSTIN'S PLACEHOLDER CALL TO POPULATE MOVIES BASED ON GENRE FILTER
  // fetchMovies = () => {
  //   let url = `localhost:3000/movies`
  //   fetch (url).then(r=>r.json()).then(j=>{
  //       if (this.state.filter !== 'all') {
  //         j.filter(movie => {
  //           movie.genre === this.state.filter
  //         })
  //       } else {
  //         this.setState({ movies : j })
  //       }
  //     }
  //   )
  // }

  // BELOW IS FUNCTION TO CHANGE GENRE IN STATE FOR FILTERING PURPOSES
  // changeGenre = (newGenre) => {
  //   this.setState({filter:newGenre})
  // } 

  return (
    <div>
      <div>
        {/* Commented out until this.changeGenre works}
        {/* <NavBar changeGenre={this.changeGenre}/> */}
        <NavBar />
      </div>
      <div className="App">
        <header>
          <h1>Movie Library</h1>
          <main>
            <Search handleInput={handleInput}/>
          </main>
        </header>
      </div>
    </div>
  );
}

export default App