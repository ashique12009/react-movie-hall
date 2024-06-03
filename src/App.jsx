import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'

function App() {

  const [allMovieData, setAllMovieData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=6852330c`);
      const data = await response.json();
      setAllMovieData(data.Search);
      setLoading(false);
    } 
    catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className='bg'>
        <SearchBar searchMovie={search} setSearchMovie={setSearch} fetchMovieData={fetchMovieData} />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  )
}

export default App