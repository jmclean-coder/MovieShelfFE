import React, { Component } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Shelf from "./components/Shelf";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Library from "./components/Library";
import Home from "./components/Home";

let API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&`;

let localAPI = "http://localhost:3000/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      results: [],
      selected: {},
      myShelf: [],
      filter: "all",
    };
  }

  componentDidMount = () => {
    this.handleFetch();
  };

  handleFetch = () => {
    console.log("hi");
    fetch(`${localAPI}shelves/1`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ myShelf: data.shelf.movies });
      });
  };

  fetchMovies = () => {
    fetch(`${localAPI}movies`)
      .then((r) => r.json())
      .then((j) => {
        if (this.state.filter !== "all") {
          j.filter((movie) => {
            // use .includes for multiple genres
            return movie.genre === this.state.filter;
          });
        } else {
          this.setState({ movies: j });
        }
      });
  };

  //after add to shelf is clicked, POST movie to Database, then add to sehlf
  postToMovies = (movie) => {
    fetch(`${localAPI}movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        movie: {
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
          genre: "Animation, Action, Adventure, Sci-Fi",
          imdb_id: movie.imdbID,
        },
      }),
    })
      .then((r) => r.json())
      .then((d) => this.addToShelf(d.movie));
  };

  //check to see if a movie exists on a shelf, if it doesn't add it.
  addToShelf = (movie) => {
    let newMovie = [...this.state.myShelf, movie];
    const exists = (stateMovie) => stateMovie.id === movie.id;
    console.log(!this.state.myShelf.some(exists));
    if (!this.state.myShelf.some(exists)) {
      this.setState({
        myShelf: newMovie,
      });
    }
  };

  //delete by filtering out the movie that was clicked on
  deleteFromShelf = (id) => {
    this.setState({
      myShelf: [
        ...this.state.myShelf.filter((stateMovie) => stateMovie.id !== id),
      ],
    });
    this.findMovieShelf(id);
  };

  //Get request to backend to determine which specfic movie_shelf join is responsible for the deleted movie
  findMovieShelf = (movieId) => {
    console.log(movieId);
    fetch(`${localAPI}movie_shelves`)
      .then((res) => res.json())
      .then((movieShelves) =>
        movieShelves.find((movieShelf) => {
          if (movieShelf.movie_id === movieId && movieShelf.shelf_id === 1) {
            this.removeShelfedMovie(movieShelf.id);
          }
        })
      );
  };
  //after movie_shelf relationship ID is found, DELETE request to the backend to delete that specfic relationship only.
  removeShelfedMovie = (movieShelfId) => {
    fetch(`${localAPI}movie_shelves/${movieShelfId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  search = (e) => {
    if (e.key === "Enter") {
      axios(API + "s=" + this.state.input).then(({ data }) => {
        // console.log(data)
        let results = this.state.results;
        results = data.Search;
        // console.log(results)
        this.setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  handleInput = (e) => {
    let input = e.target.value;
    this.setState((prevState) => {
      return { ...prevState, input: input };
    });
    // console.log(this.state.input)
  };
  changeGenre = (newGenre) => {
    this.setState({ filter: newGenre });
  };

  //currently we're only editing the shelf movie's poster, but if you expand the controlled form in EditForm.js(and it's state), the code below should scale with those changes.
  handleEditSubmit = (updatedMovie) => {
    console.log(updatedMovie);

    fetch(`${localAPI}movies/${updatedMovie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        movie: updatedMovie,
      }),
    })
      .then((res) => res.json())
      .then((data) => this.updateShelf(data));
  };

  updateShelf = (data) => {
    for (let i = 0; i < this.state.myShelf.length; i++) {
      if (this.state.myShelf[i].id === data.movie.id) {
        let startIndex = i;
        let updatedShelf = [...this.state.myShelf];
        updatedShelf.splice(startIndex, 1, data.movie);
        console.log(updatedShelf);
        //  debugger
        this.setState({
          myShelf: updatedShelf,
        });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/library"
              render={(routerProps) => (
                <Library
                  {...routerProps}
                  handleInput={this.handleInput}
                  search={this.search}
                  results={this.state.results}
                  addToShelf={this.addToShelf}
                  postToMovies={this.postToMovies}
                />
              )}
            />
            <Route
              exact
              path="/shelf"
              render={(routerProps) => (
                <Shelf
                  {...routerProps}
                  myShelf={this.state.myShelf}
                  deleteFromShelf={this.deleteFromShelf}
                  handleEditSubmit={this.handleEditSubmit}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

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
