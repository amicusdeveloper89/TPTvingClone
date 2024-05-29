import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import '../../assets/styles.css'

const About = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <h2>About Us</h2>
        <nav>
          <ul>
            <li><Link to="team">Team</Link></li>
            <li><Link to="company">Company</Link></li>
          </ul>
        </nav>
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2024 CloneVing. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default About