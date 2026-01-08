import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </h2>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/about">About Us</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/Super Deluxe Room">Super Deluxe Room</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/Banquet Hall">Banquet Hall</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/gallery">Gallery</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/contact">Contact Us</Link></li>
      </ul>

      
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
