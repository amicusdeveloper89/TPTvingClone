import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increaseVisitAction } from '../redux/Visits'
import Header from '../components/Header'
import '../assets/styles.css'
import { styled } from 'styled-components'

const Home = () => {
  const [movies, setMovies] = useState([])
  const dispatch = useDispatch()
  const visits = useSelector(state => state.items.visits)
  const favors = useSelector(state => state.items.favors)

  useEffect(() => {
    const apiKey = "453ce998e596cf86038d0f56e2aec791"
    const baseUrl = "https://api.themoviedb.org/3"
    const apiUrl = `${baseUrl}/movie/upcoming?api_key=${apiKey}&page=1`

    fetch(apiUrl)
      .then(res => res.json())
      .then(d => setMovies(d.results))
      .catch(e => alert(e.message))
  }, [])

  const movieClick = (movieId) => {
    dispatch(increaseVisitAction(movieId))
  }

  return (
    <div>
      <Header />
      <main className="main">
        <section className="movies-section">
          <h2 className="section-title">개봉 예정 영화</h2>
          <ul className="movies-list">
            {movies.map((movie) => (
              <Card key={movie.id} className="movie-item">
                <Link to={`/movie/${movie.id}`} onClick={() => movieClick(movie.id)}>
                  <h3 className="movie-title">{movie.title}</h3>
                  <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </Link>
                <div className='visits-info'>
                  <span>조회수: {visits[movie.id] || 0}</span>
                  <span style={{ float: 'right' }}>♡: {favors[movie.id] || 0}</span>
                </div>
              </Card>
            ))}
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 CloneVing. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home

const Card = styled.div`
  width: 300px;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: white;
  margin: 1rem 0.5rem;
  color: black;
  font-size: 12px;
  padding: 1rem;
  border-radius: 8px;
`
