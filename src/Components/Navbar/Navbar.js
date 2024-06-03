import React from 'react'
import './Navbar.css'
import Vector from '../Assets/Vector.png'
import hand from '../Assets/hand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"; 


export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav">
      <div className="nav-logo">
        <p>GrowHatch</p>
            <img src={Vector} alt=''/>
        </div>
        <ul className='nav-menu'>
            <li><a as={Link} to="/dashboard">Home</a></li>


        </ul>
        <div className="nav-world">
        <FontAwesomeIcon icon={faGlobe} />
            <p>English</p>
            </div>
            <div className="nav-login">
            <button>Sign Up</button>
            <button className='register'>Join Us</button>
        </div>
      </div>

      <div className="slogan">
      <h1>Find the right startup
        investors,<br></br> the right way</h1>
      </div>
      
      <div className="jumbotron">

   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
     </button>
   </div>

   <img src={hand} alt=''/>
      </div>

    </div>
  )
}
