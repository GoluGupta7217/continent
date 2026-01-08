import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-box">
          <img src={logo} alt="Hotel Logo" className="footer-logo" />
          {/* <p className="footer-text">
            Continental Hotels Navanshahr offers luxury rooms, banquet halls,
            and premium hospitality services.
          </p> */}
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/rooms">Super Deluxe Room</a></li>
            <li><a href="/banquet">Banquet Hall</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-box">
          <h3>Get In Touch</h3>
          <p>📞 01823-351-010</p>
          <p>✉ reservations@continentalnavanshahr.in</p>
          <p>📍 Continental Hotels Navanshahr, Punjab 144514</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom1">
        <p>© Copyright & Design By ND360PRO - 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;