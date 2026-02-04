import React from 'react'
import './Hero.css'

import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
      <div className='hero container'>
          <div className="hero-text">
              <h1>We Ensure better education for a better world</h1>
              <p>We are committed to delivering quality higher education that nurtures innovation, critical thinking, and leadership. Our institution prepares students with the knowledge, skills, and values required to excel in a rapidly evolving global society.</p>
              <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
          </div>
      
    </div>
  )
}

export default Hero
