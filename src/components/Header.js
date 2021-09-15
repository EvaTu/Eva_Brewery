import React from "react"
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <h1> <img src='images/beer-logo-header.png' /> <span></span>
                Find Breweries in NY
            </h1>
            {/* <h3>Home </h3> 
            <h3>About Us </h3> */}
           
            <Link to='/' className='header-link'>Home</Link>

            <Link to='/about-us' classNmae='header-link'>About Us</Link>
                
            
        </div>
    )
}


export default Header