import React from 'react'
import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <MovieCard />
    </div>
  )
}

export default App