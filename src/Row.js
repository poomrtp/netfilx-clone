import React, { useEffect, useState } from 'react'
import axios from './axios'
import './asset/css/Row.css'

function Row({ title, fetchUrl, isLargeRow }) {
  const baseImageUrl = 'https://www.themoviedb.org/t/p/original/'
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])
  
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
