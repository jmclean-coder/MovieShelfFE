import React, { Component } from 'react'
import Search from './components/Search'
import axios from 'axios'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './components/Results'
// import Shelf from './components/Shelf'
// import OpenPop from './components/OpenPop'
let API = 'http://www.omdbapi.com/?apikey=e742e527&'


class App extends Component {
  
  constructor(props){
    super(props)
  
    this.state = {
      input: "",
      results: [],
      selected: {},
      // myShelf: [],
      filter: 'all'
    }
  }
  
  search = (e) => {
    if (e.key === "Enter"){
      axios(API + "&s=" + this.state.input).then(({data}) => {
        // console.log(data)
         let results = this.state.results 
         results = data.Search
        // console.log(results)
        this.setState(prevState => {
          return {...prevState, results:results}
        })
      })
    }
  }
  handleInput = (e) => {
    let input = e.target.value
    this.setState(prevState => {
      return {...prevState, input:input}
    })
    // console.log(this.state.input)
  }
  render() {
    

    return (
      <div className="App">
         <div>
        {/* Commented out until this.changeGenre works}
        {/* <NavBar changeGenre={this.changeGenre} fetchMovies={this.fetchMovies} addRandomMovie={this.addRandomMovie}/> */}
        <NavBar changeGenre={changeGenre} fetchMovies={fetchMovies} />
      </div>
      <header>
        <h1>Movie Library</h1>
        </header>
        <main>
          <Search handleInput={this.handleInput} search={this.search}/>
          <Results results={this.state.results}  />
       
        </main>
      </div>
    )
  }
}

export default App




  // let popOut = id => {
  //   axios(API + "&i=" + id).then(({ data }) => {
  //     let result = data;

  //     // console.log(result);

  //     setState(prevState => {
  //       return { ...prevState, selected: result }
  //     });
  //   });
  // }

  // let closePop = () => {
  //   setState(prevState => {
  //     return {...prevState , selected: {} }
  //   })
  // }


  // addToShelf = () => {
    


  // addToShelf = () => {
    

  // BELOW IS JUSTIN'S PLACEHOLDER CALL TO POPULATE MOVIES BASED ON GENRE FILTER
  let fetchMovies = () => {
    let url = `localhost:3000/movies`
    fetch (url).then(r=>r.json()).then(j=>{
        if (state.filter !== 'all') {
          j.filter(movie => {
            return movie.genre === state.filter
          })
        } else {
          setState(prevState => { 
            return {...prevState,movies : j }})
        }
      }
    )
  }

  let changeGenre = (newGenre) => {
    setState(prevState => {
      return { ...prevState, filter:newGenre}
    })
  } 

  // BELOW IS FUNCTION THAT WILL GRAB RANDOM MOVIE FROM DATABASE AND ADD TO USER SHELF
  // let addRandomMovie = () => {
  //   randomMovie = state.movies[rand(0..(state.movies.count-1))]
  //   // add randomMovie to user's shelf


  // }

  // handleClick = () => {
  //   console.log('we clicked :)')
  // }

  // }



