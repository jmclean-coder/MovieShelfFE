import React, { useState } from 'react'
import Search from './components/Search'
import axios from 'axios'
import NavBar_Bootstrap from './components/NavBar_Bootstrap'
import Filters from './components/Filters'


function App() {
  let API = 'http://www.omdbapi.com/?apikey=e742e527&'
  let [state, setState] = useState({
    input: "",
    results: [],
    selected: {}
  })
  let handleInput = (e) => {
    let input = e.target.value
    setState(prevState => {
      return {...prevState, input:input}
    })
    console.log(state.input)
  }

  return (
    <div className="App">
      <header>
        <Filters />
        <h1>Movie Library</h1>
        <main>
          <Search handleInput={handleInput}/>
        </main>
      </header>
    </div>
  );
}

export default App