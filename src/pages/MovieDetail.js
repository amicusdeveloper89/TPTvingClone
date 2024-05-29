import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increaseFavorAction } from '../redux/Visits'
import Header from '../components/Header'
import '../assets/styles.css'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const apiKey = "453ce998e596cf86038d0f56e2aec791"
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

    fetch(apiUrl)
      .then(res => res.json())
      .then(d => setMovie(d))
      .catch(e => alert(e.message))
  }, [id])

  const favorClick = () => {
    dispatch(increaseFavorAction(id))
  }

  if (!movie) return <div>Loading...</div>

  return (
    <div>
      <Header />
      <main className="main">
        <h1>{movie.title} <button onClick={favorClick}>♡</button></h1>
        <p>{movie.overview}</p>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </main>
    </div>
  )
}

export default MovieDetail
