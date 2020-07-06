import React, { useState } from 'react'
import Search from './components/Search'
import axios from 'axios'


function App() {
  

  return (
    <div className="App">
      <header>
        <h1>Movie Library</h1>
        <main>
          <Search />
        </main>
      </header>
    </div>
  );
}

export default App