import React from 'react'

const SearchBar = ({searchMovie, setSearchMovie, fetchMovieData}) => {
  return (
    <div className='main flex justify-center py-5'>
        <input 
            type="text" 
            placeholder='Search' 
            value={searchMovie}
            onChange={(e) => {setSearchMovie(e.target.value)}}
            className='bg-grey-200 placeholder-grey-400 px-2 py-2 outline-none border-2 border-grey-500 text-black rounded-l-lg' 
        />
        <button 
            onClick={fetchMovieData}
            className='bg-[#3e2b57] text-white px-2 py-2 rounded-r-lg'>
            Search
        </button>
    </div>
  )
}

export default SearchBar