import React, { Component } from 'react'
import Search from './components/Search'
import axios from 'axios'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './components/Results'
import Shelf from './components/Shelf'
import Result from './components/Result'
import MovieCard from './components/MovieCard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Library from './components/Library';
import Home from './components/Home';
// import Shelf from './components/Shelf'
// import OpenPop from './components/OpenPop'
let API = 'http://www.omdbapi.com/?apikey=e742e527&'
let localAPI = 'http://localhost:3000/'


class App extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      input: "",
      results: [],
      selected: {},
      myShelf: [],
      filter: 'all'
    }
  }

  componentDidMount = () => {
    this.handleFetch()
  }
  
  handleFetch = () => {
    fetch(`${localAPI}shelves/1`).then(res=>res.json()).then(data=>{
      this.setState({myShelf: data.shelf.movies})
    })
  }

  fetchMovies = () => {
    fetch (`${localAPI}movies`).then(r=>r.json()).then(j=>{
      if (this.state.filter !== 'all') {
        j.filter(movie => {
          // use .includes for multiple genres
          return movie.genre === this.state.filter
          })
        } else {
          this.setState({ movies : j })
        }
      }
    )
  }

  addToShelf = (movie) => {
    let newMovie = [...this.state.myShelf, movie]
    this.setState({
      myShelf: newMovie
    })
    this.postToMovies(movie)
    
  }
  
  postToMovies = (movie) => {
    console.log(movie)
    fetch(`${localAPI}movies`,{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        Accept : "application/json",
        },
        body: JSON.stringify({
          movie : {
            title: movie.Title,
            year: movie.Year,
            runtime: "72 min",
            poster: movie.Poster,
            genre: "Animation, Action, Adventure, Sci-Fi",
            imdb_id: movie.imdbID
          }
        })
      }
    )
    .then(r=>r.json()).then(d=>console.log(d))
    this.handleFetch()
  }

  deleteFromShelf = (id) => {
    console.log("hi")
    this.setState({
      myShelf: [...this.state.myShelf.filter(stateMovie => stateMovie.id !== id)]
    })
    this.findMovieShelf(id)
  }

  
  findMovieShelf = (movieId) =>{
    console.log(movieId)
    fetch(`${localAPI}movie_shelves`)
    .then(res => res.json())
    .then(movieShelves => movieShelves.find(movieShelf => {
      if(movieShelf.movie_id === movieId && movieShelf.shelf_id === 1){
        this.removeShelfedMovie(movieShelf.id)
      }
    }
    ))
  }

  removeShelfedMovie = (movieShelfId) => {
    fetch(`${localAPI}movie_shelves/${movieShelfId}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    )
    .then(res => res.json())
    .then(data => console.log(data))
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
    changeGenre = (newGenre) => {
      this.setState({ filter : newGenre })
    } 
    render() {
    return (
      <div className="App">
      <Router>
        <div>
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/library" render={ routerProps => <Library {...routerProps} handleInput={this.handleInput} search={this.search} results={this.state.results} addToShelf={this.addToShelf}/>}/>
      <Route exact path="/shelf" render={ routerProps => <Shelf {...routerProps} myShelf={this.state.myShelf} deleteFromShelf={this.deleteFromShelf}/>}/>
        </div>
      </Router>
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

  // let fetchMovies = () => {
  //   let url = `localhost:3000/movies`
  //   fetch (url).then(r=>r.json()).then(j=>{
  //       if (state.filter !== 'all') {
  //         j.filter(movie => {
  //           return movie.genre === state.filter
  //         })
  //       } else {
  //         setState(prevState => { 
  //           return {...prevState,movies : j }})
  //       }
  //     }
  //   )
  // }

  // let changeGenre = (newGenre) => {
  //   setState(prevState => {
  //     return { ...prevState, filter:newGenre}
  //   })
  // } 




  // BELOW IS FUNCTION THAT WILL GRAB RANDOM MOVIE FROM DATABASE AND ADD TO USER SHELF
  // let addRandomMovie = () => {
  //   randomMovie = state.movies[rand(0..(state.movies.count-1))]
  //   // add randomMovie to user's shelf


  // }

  // handleClick = () => {
  //   console.log('we clicked :)')
  // }

  // }



