import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'
import ImageSlider from '../../components/ImageSlider/ImageSlider.jsx'
import About from './About.jsx'
import Gallery from './Gallery.jsx'
import Review from './Review.jsx'
import Contactus from './Contactus.jsx'
import Footer from '../../components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

const Home = () => {
  return (
    <Routes>
    <Navbar />
      <ImageSlider />
      <About />
      <Gallery />
      <Review />
      <Contactus />
      <Footer />
   </Routes>
    
  )
}

export default Home