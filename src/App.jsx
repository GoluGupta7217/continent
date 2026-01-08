import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import ImageSlider from "./components/ImageSlider/ImageSlider.jsx";
import About from "./assets/pages/About.jsx";
import Gallery from "./assets/pages/Gallery.jsx";
import Review from "./assets/pages/Review.jsx";
import Contactus from "./assets/pages/Contactus.jsx";
import Footer from "./components/Footer/Footer";
import SuperDeluxeRoom from "./assets/pages/SuperDeluxeRoom.jsx";
import Home from "./assets/pages/Home";







function App() {
  return (

       <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/SuperDeluxeRoom" element={<SuperDeluxeRoom />} /> 
       <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contactus" element={<Contactus />} />
        {/* <Route path="/footer" element={<Footer />} />  */}
         <Footer />
      </Routes>  
     
   
  );
}

export default App;
