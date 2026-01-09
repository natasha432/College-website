import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
      <div className='about'>
          <div className="about-left">
              <img src={about_img} alt="" className='about-img'/>
              <img src={play_icon} alt="" className='play-img' />
          </div>
          <div className="about-right">
              <h3>About Unversity</h3>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero possimus alias error vel neque corrupti praesentium quis laboriosam odit fugiat molestias, accusantium sit atque velit voluptatem harum sapiente, facilis commodi illo porro nostrum delectus sint. Aspernatur ullam commodi maxime atque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dignissimos minima? Asperiores aliquam, laborum rem, earum alias ea a culpa iusto facilis sit expedita doloremque maxime? Ullam doloribus debitis aperiam.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum, ducimus culpa dignissimos ad repellat nisi ab aut deleniti harum praesentium, perspiciatis vitae molestiae reprehenderit. Eligendi sint molestiae amet facere?</p>
        
      </div>
    </div>
  )
}

export default About
