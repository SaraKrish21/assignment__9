import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import './Dashboard.css'


export default function Dashboard() {
    const email = sessionStorage.getItem('email');


  return (
    <div>
    <h3>Welcome to the Dashboard {email}</h3>
    <Navbar/>
    </div>
  )
}
