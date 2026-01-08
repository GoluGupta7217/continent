import React, { useState } from 'react'
import '../../App.css'
import gallery1 from '../gallery1.jpg'
import gallerty2 from '../gallerty2.jpg'
import icon1 from '../icon1.png'
import icon2 from '../icon2.png'
import icon3 from '../icon3.png'
import icon4 from '../icon4.png'
import icon5 from '../icon5.png'
import wifiimage from '../wifiimage.jpg'
import breakfast from '../breakfast.jpg'
import gym from '../gym.jpg'
import transpot from '../transpot.jpg'
import swimingpool from '../swimingpool.jpg'
import makemytrip from '../makemytrip.png'
import goibibo from '../goibibo.png'
import tripa from '../tripa.png'
import img from '../img.png'
import iconbreak from '../iconbreak.png'
import iconlunch from '../iconlunch.png'
import icondinner from '../icondinner.png'

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className='main-container'>
      <h3>Gallery</h3>
      <h1>Rooms & Suites</h1>

      <div className='gallerypick'>
        <img src={gallery1} alt="" />
        <img src={gallerty2} alt="" />
      </div>

      <div className='feature-container'>
        <h3>Features</h3>
        <h1>Core Features</h1>
      </div>

      <div className="icon">
        <div onClick={() => setSelectedImage(wifiimage)}>
          <img src={icon1} alt="" />
          <h3>Free Wifi</h3>
        </div>

        <div onClick={() => setSelectedImage(breakfast)}>
          <img src={icon2} alt="" />
          <h3>Breakfast</h3>
        </div>

        <div onClick={() => setSelectedImage(gym)}>
          <img src={icon3} alt="" />
          <h3>Gym Center</h3>
        </div>

        <div onClick={() => setSelectedImage(transpot)}>
          <img src={icon4} alt="" />
          <h3>Transport</h3>
        </div>

        <div onClick={() => setSelectedImage(swimingpool)}>
          <img src={icon5} alt="" />
          <h3>Swimming Pool</h3>
        </div>
      </div>


      {selectedImage && (
        <div className="preview">
          <img src={selectedImage} alt="Feature" />
        </div>
       
      )}
       {/* feature special */}
      <div className='feature'>

      </div>
      {/* online platform */}
      <div className='onlineplatform'>
        <h1>Online Platform</h1>
        <div className='online'>
          <img src={makemytrip} alt="" />
          <img src={goibibo} alt="" />
          <img src={tripa} alt="" />
        </div>
      </div>
      {/* timing */}
      <div className='timing'>
        <div className='time-shedule'>
          <img src={img} alt="" />
          <div className='time'>
            <p>Time & Shedule</p>
            <h1>Opening Hours</h1>
          </div>
        </div>
        <div className='tim'>
         <div className='time1'><img src={iconbreak} alt="" /><p>Breakfast : 07:30 - 10:00</p></div>
         <div className='time1'><img src={iconlunch} alt="" /><p>
Lunch : 12:30 - 15:00</p></div>
         <div className='time1'><img src={icondinner} alt="" /><p>Dinner : 18:30 - 2:00</p></div>
        </div>
      </div>
      
    </div>



  )
}

export default Gallery
