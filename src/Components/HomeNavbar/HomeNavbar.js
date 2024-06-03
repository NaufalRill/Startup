import React from 'react'
import './HomeNavbar.css'
import Vector from '../Assets/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function HomeNavbar() {
  return (
    <div>
        <div className="homenav">
      <div className="homenav-logo">
        <p>GrowHatch</p>
            <img src={Vector} alt=''/>
        </div>

        <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
     </button>
   </div>

        <div className="nav-world">
        <FontAwesomeIcon icon={faGlobe} />
            <p>English</p>
            </div>
            <div className="nav-login">
            <button>Sign Up</button>
            <button className='register'>Join Us</button>
        </div>
      </div>
    </div>
  )
}
