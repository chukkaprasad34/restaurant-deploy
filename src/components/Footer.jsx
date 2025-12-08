import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <img className='logo' src="./images/logo.png" alt="logo" />
      <h3>Let's Talk</h3>
      <p>Call us on +91 99 51 911 087</p>
      <p>Email us on</p>
      <p>reservations@prasadrestaurant.com</p>
      <h3>No Days Off, We’re Here All Week!</h3>
      <h4>Weekdays & Weekends - 9:30 AM – 2:00 AM</h4>
      <div className='footer_icon'>
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
    </div>
      <img className='award' src="./Best-Restaurant-Award-1-1.webp" alt="" /><br />
      <button className='location'>FIND US IN GOOGLE MAPS </button>

    </div>
  )

}

export default Footer