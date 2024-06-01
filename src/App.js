import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Team from './pages/About/Team'
import Company from './pages/About/Company'
import Board from './pages/Board'
import NewPost from './pages/NewPost'
import './assets/styles.css'
import MovieDetail from "./pages/MovieDetail"

function App() {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="company" element={<Company />} />
        </Route>
        <Route path="/board" element={<Board />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  )
}

export default App
