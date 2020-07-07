import React, { useState } from 'react'
import Search from './components/Search'
import axios from 'axios'
import Results from './components/Results'
import OpenPop from './components/OpenPop'


function App() {
  let API = 'http://www.omdbapi.com/?apikey=e742e527&'
  let [state, setState] = useState({
    input: "",
    results: [],
    selected: {}
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
    
  // }

  return (
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
  );
}

export default App