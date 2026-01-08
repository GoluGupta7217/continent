import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider.jsx';
import About from './About.jsx';
import Gallery from './Gallery.jsx';
import Review from './Review.jsx';
import Contactus from './Contactus.jsx';

const Home = () => {
  return (
    <>
      <ImageSlider />
      <About />
      <Gallery />
      <Review />
      <Contactus />
    </>
  );
};

export default Home;