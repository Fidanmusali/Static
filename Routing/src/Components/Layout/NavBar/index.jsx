import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink className="a" to='/'>Home</NavLink>
        <NavLink className="a" to='/about'>About</NavLink>
        <NavLink className="a" to='/contact'>Contact</NavLink>


      </nav>
    </>
  )
}

export default NavBar