import React from 'react'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
      <video autoPlay muted loop className="nav-video">
    <source src="/navbg.mp4" type="video/mp4" />
      </video>
      <img className='navlogo' src="/images/logo.png" alt="logo" />
     <div className='nav_con'>
       <img className='insta'src="/images/insta.webp" alt="" />
       <button>BOOK A TABLE</button>
     </div>
     <FaBars className='bars'/>
    </div>
    <div className="nav_meta">
      <p>Experience</p>
      <h1>The magic Of Dining</h1>
      <h2>By The Sea</h2>
       <div className='nav_awar'>
        <img className='award' src="/Best-Restaurant-Award-1-1.webp" alt="" />
       </div>
    </div>
    </div>
  )
}

export default Navbar