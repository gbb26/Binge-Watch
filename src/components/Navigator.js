import React from 'react'
import '../stylesheets/navigator.css'
import { Link } from 'react-router-dom'
const Navigator = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
  <div className="container">
    <a className="navbar-brand" href="/">BINGE-WATCH</a>
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
         <Link to="/" className="nav-link">TOP-100</Link>
        </li>
        <li className="nav-item">
         <Link to="/trending" className="nav-link">TRENDING</Link>
        </li>
        <li className="nav-item">
         <Link to="/search" className="nav-link">SEARCH</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigator
