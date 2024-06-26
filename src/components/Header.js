import React from "react"
import { Link } from 'react-router-dom'
import '../assets/styles.css'

const Header = ()=>{
    return(
      <header className="header">
        <h1 className="logo">CloneVing</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/board">Board</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header
