import React from 'react'
import '../../App.css'
import contactus from '../contactus.jpg'
import logo from '../logo.jpg'
const Contactus = () => {
  return (
   <div className="contact">
  <img src={contactus} alt="contact" className="bg-img" />

  <div className="overlay">
    <img src={logo} alt="logo" className="contact-logo" />
    <h1>Contact Us For Any Function</h1>
    <button>
  <span>Contact Us</span>
</button>

  </div>
</div>


  )
}

export default Contactus