import React, { useState } from 'react'
import Search from './components/Search'
import axios from 'axios'
import NavBar_Bootstrap from './components/NavBar_Bootstrap'
import Filters from './components/Filters'


function App() {
  

  return (
    <div className="App">
      <header>
        <Filters />
        <h1>Movie Library</h1>
        <main>
          <Search />
        </main>
      </header>
    </div>
  );
}

export default App