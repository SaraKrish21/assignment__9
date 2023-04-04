import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Login from '../../Login/Login'


export default function Navbar() {
  return (
    <div className='container'>
        <Link to="/home">Home</Link>
        <Link to="/" component={Login}>Login</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/jobs">Jobs</Link>
    </div>
  )
}
