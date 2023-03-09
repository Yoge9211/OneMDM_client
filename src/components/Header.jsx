import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h1>OneMDM</h1>
      </div>
      <div className="right">
        <Link to="/" className="links">
          Car Companies
        </Link>
      </div>
    </div>
  )
}

export default Header
