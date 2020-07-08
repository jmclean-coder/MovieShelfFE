import React, { useState } from 'react'
import Search from './components/Search'
import axios from 'axios'
import NavBar from './components/NavBar'
import Filters from './components/Filters'
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './components/Results'
import OpenPop from './components/OpenPop'


function App() {
  let API = 'http://www.omdbapi.com/?apikey=e742e527&'
  let [state, setState] = useState({
    input: "",
    results: [],
    selected: {},
    filter: 'all'
  })
  let search = (e) => {
    if (e.key === "Enter"){
      axios(API + "&s=" + state.input).then(({data}) => {
        // console.log(data)
        let results = data.Search

        setState(prevState => {
          return {...prevState, results:results}
        })
      })
    }
  }
  let handleInput = (e) => {
    let input = e.target.value
    setState(prevState => {
      return {...prevState, input:input}
    })
    // console.log(state.input)
  }

  let popOut = id => {
    axios(API + "&i=" + id).then(({ data }) => {
      let result = data;

      // console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  let closePop = () => {
    setState(prevState => {
      return {...prevState , selected: {} }
    })
  }

  // addToShelf = () => {
    
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

  // BELOW IS FUNCTION THAT WILL GRAB RANDOM MOVIE FROM DATABASE AND ADD TO USER SHELF
  // addRandomMovie = () => {
  //   let totalNumberMovies = this.state.movies.count
  //   randomMovie = this.state.movies[rand(0..(totalNumberMovies-1))]
  //   // add randomMovie to user's shelf
  // }

  return (
    <div>
      <div>
        {/* Commented out until this.changeGenre works}
        {/* <NavBar changeGenre={this.changeGenre} fetchMovies={this.fetchMovies} addRandomMovie={this.addRandomMovie}/> */}
        <NavBar />
      </div>
      <div className="App">
      <header>
        <h1>Movie Library</h1>
        </header>
        <main>
          <Search handleInput={handleInput} search={search}/>
          <Results results={state.results} popOut={popOut}/>
          {(typeof state.selected.Title != "undefined") ? <OpenPop selected={state.selected} closePop={closePop} /> : false}
        </main>
      </div>
    </div>
  );
}

export default App