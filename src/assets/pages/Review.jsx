import React from 'react'
import '../../App.css'
import user1 from '../user1.png'
import user2 from '../user2.png'
import user3 from '../user3.png'
const Review = () => {
  return (
    <div className='main-cont'>
      <p>Testimonials</p>
      <h1>User Feedbacks</h1>
      <div className='usercard'>
        <div className='user1'>
          <img src={user1} alt="" />
          <h2>“ Janat Mothra ”</h2>
          <p>I stayed in the Hotel for 7days and it was such a comfortable and great experience.The staff was very helpful and friendly.The food was really great and fresh.Its been a pleasure stay and will recommend my family and friends too.</p>
        </div>
        <div className='user2'>
          <img src={user2} alt="" />
          <h2>“ Vinay Bangar ”</h2>
          <p>The Continent Hotel has a rooftop restaurant called Papa Whisky. I went there to have my dinner with a friend. The ambiance was perfect for a night out with friends. The menu offered a variety of options, including veg and non-veg dishes. The food was delicious and well presented. </p>
        </div>
        <div className='user3'>
          <img src={user3} alt="" />
          <h2>“Mehar G ”</h2>
          <p>Had a short two day stay all facilities to make a good stay pool was good bar was good food was good staff on hand to help all round perfect!</p>
        </div>
      </div>

    </div>
  )
}

export default Review