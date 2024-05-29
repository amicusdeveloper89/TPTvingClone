import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Team from './pages/About/Team'
import Company from './pages/About/Company'
import Contact from './pages/Contact'
import './assets/styles.css'
import MovieDetail from "./pages/MovieDetail"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="company" element={<Company />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  )
}

export default App
