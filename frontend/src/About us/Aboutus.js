/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Aboutus.css'
import axios from 'axios';

import Card from '../Components/Card/Card';
import Navbar from '../Components/Navbar/Navbar';
 // eslint-disable-next-line
 

export default function Aboutus() {

  return (
    <div>
      <Navbar/>
      <Card title={"About Page"}
      desc={"This is about us."}/>
      <body>
        <p>
            This is Sneaker Website.
        </p>
        <img src = "https://media.tenor.com/tcSPw5nnxTgAAAAC/air-jordan.gif" alt=" jordan "></img>
      </body>
    </div>
  )
}
