import React, { Component } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ShelfPage from "./containers/ShelfPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LibraryPage from "./containers/LibraryPage";
import HomePage from "./containers/HomePage";
import Footer from "./components/Footer";
import HomeHeader from "./components/HomeHeader";
import LibraryHeader from "./components/LibraryHeader";
import ShelfHeader from "./components/ShelfHeader";

const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&`;
const railsAPI = "https://movieshelf-app-api.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      results: [],
      myShelf: [],
      filter: "All",
    };
  }

  componentDidMount = () => {
    this.handleFetch();
  };

  handleFetch = () => {
    console.log("hi");
    fetch(`${railsAPI}shelves/1`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ myShelf: data.shelf.movies });
      });
  };

  fetchMovies = () => {
    fetch(`${railsAPI}movies`)
      .then((r) => r.json())
      .then((j) => {
        if (this.state.filter !== "all") {
          j.filter((movie) => {
            // use .includes for multiple genres
            return movie.genre.this.state.filter;
          });
        } else {
          this.setState({ movies: j });
        }
      });
  };
  //after add to shelf is clicked, fetch the detailed movie resource with the movies imdb_id
  fetchDetails = (movie) => {
    console.log(movie);
    return fetch(`${API}i=${movie.imdbID}`).then((res) => res.json());
  };

  //after the detailed movie is recieved, post selected data to backend
  postToMovies = (movie) => {
    fetch(`${railsAPI}movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        movie: {
          title: movie.Title,
          year: movie.Year,
          genre: movie.Genre,
          poster: movie.Poster,
          imdb_id: movie.imdbID,
          plot: movie.Plot,
          ratings: movie.Ratings,
          mpa_rated: movie.Rated,
          director: movie.Director,
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
    fetch(`${railsAPI}movie_shelves`)
      .then((res) => res.json())
      .then((movieShelves) =>
        movieShelves.find((movieShelf) => {
          if (movieShelf.movie_id === movieId && movieShelf.shelf_id === 1) {
            this.removeShelfedMovie(movieShelf.id);
          }
        })
      );
  };
  //after movie_shelf relationship ID is found, send DELETE request to the backend to delete that specfic relationship only.
  removeShelfedMovie = (movieShelfId) => {
    fetch(`${railsAPI}movie_shelves/${movieShelfId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  //take in user's search string and query the movie API for results that match that parameter
  search = (e) => {
    if (e.key === "Enter") {
      axios(API + "s=" + this.state.input).then(({ data }) => {
        let results = this.state.results;
        results = data.Search;
        this.setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  handleSearchInput = (e) => {
    let input = e.target.value;
    this.setState((prevState) => {
      return { ...prevState, input: input };
    });
  };

  //change filter term in state and filter shelfed movies based on genre
  changeFilter = (term) => {
    this.setState({ filter: term });
  };

  filteredShelf = () => {
    let filter = this.state.filter;
    if (filter === "All") {
      return this.state.myShelf;
    } else {
      return this.state.myShelf.filter((movie) => movie.genre.includes(filter));
    }
  };

  //currently we're only editing the shelf movie's poster, but if you expand the controlled form in EditForm.js(and it's state), the code below should scale with those changes.
  handleEditSubmit = (updatedMovie) => {
    fetch(`${railsAPI}movies/${updatedMovie.id}`, {
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
        this.setState({
          myShelf: updatedShelf,
        });
      }
    }
  };

  //conditionally render header content based on current route location
  Header = () => (
    <>
      <Route path="/" exact component={HomeHeader} />
      <Route
        path="/library"
        eaxct
        render={() => (
          <LibraryHeader
            handleSearchInput={this.handleSearchInput}
            search={this.search}
          />
        )}
      />
      <Route
        path="/shelf"
        eaxct
        render={() => <ShelfHeader myShelf={this.filteredShelf()} />}
      />
    </>
  );

  render() {
    return (
      <div className="App Site">
        <Router>
          {this.Header()}
          <Route
            exact
            path="/shelf"
            render={(routerProps) => (
              <ShelfPage
                {...routerProps}
                myShelf={this.filteredShelf()}
                deleteFromShelf={this.deleteFromShelf}
                handleEditSubmit={this.handleEditSubmit}
              />
            )}
          />
          <>
            <NavBar
              shelf={this.state.myShelf}
              changeFilter={this.changeFilter}
            />
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/library"
              render={(routerProps) => (
                <LibraryPage
                  {...routerProps}
                  handleSearchInput={this.handleSearchInput}
                  search={this.search}
                  results={this.state.results}
                  addToShelf={this.addToShelf}
                  postToMovies={this.postToMovies}
                  fetchDetails={this.fetchDetails}
                />
              )}
            />
          </>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
