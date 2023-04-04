import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Home.css'
import Card from '../Components/Card/Card';

export default function Home() {
    const email = sessionStorage.getItem('email');
    return (
        <div>
            <h1>Welcome {email}</h1>
            <Navbar />
            <Card title={"Home"}
                desc={"Welcome to my home page"}
                body={"Dark Star Welcomes you"} />
            <body>
                <img src="https://wildmontana.org/wp-content/uploads/2022/11/northern-lights_William-Moore_web-e1669072525287.jpg" alt="skull"></img>
            </body>

        </div>
    )
}
