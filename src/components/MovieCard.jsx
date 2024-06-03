import React from 'react'

const MovieCard = ({allMovieData, loading}) => {
  return (
    <div>
      <div className='main flex flex-wrap'>

        {
          allMovieData.map((item, index) => {
            return (
              <div className='p-2 child lg:w-1/4 w-full'>
                <div className='sub_child bg-[#002e4b] p-3 rounded-2xl'>
                  <img src={item.Poster} alt="img" className='rounded-lg mb-2 w-full' />
                  <h2 className='text-white text-xl font-bold'>{item.Title}</h2>
                  <h2 className='text-white'>Year: {item.Year}</h2>
                </div>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default MovieCard