import React from 'react'
import './Footer.css'
// import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    // <div className='footer'>
    //       <p>Lorem ipsum dolor sit amet consectetur.</p>
    //       <ul>
    //           <li>Tearms of service</li>
    //           <li>privicy and policy</li>
    //       </ul>
    // </div>
    
    <div className='footers'>
        <footer className="footer">
      <div className="footer-top">

        <div className="footer-col">
          <h4>PRODUCTS</h4>
          <ul>
            <li>Drag and Drop</li>
            <li>Visual Studio X</li>
            <li>Easy Content</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>RESOURCES</h4>
          <ul>
            <li>Industries and tools</li>
            <li>Use cases</li>
            <li>Blog</li>
            <li>Online events</li>
            <li>Trusted execution</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>COMPANY</h4>
          <ul>
            <li>Diversity & inclusion</li>
            <li>About us</li>
            <li>Press</li>
            <li>Customer Stories</li>
            <li>Online communities</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>SUPPORT</h4>
          <ul>
            <li>Documentation</li>
            <li>Tutorials & guides</li>
            <li>Webinars</li>
            <li>Open source</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Appy. All rights reserved.</p>

        <div className="footer-links">
          <span>Terms</span>
          <span>Privacy Policy</span>
        </div>

        {/* <div className="footer-socials">
          <FaFacebookF />
          <FaTwitter />
          <FaGithub />
          <FaLinkedinIn />
        </div> */}
      </div>
    </footer>

   </div>


  );
};

export default Footer
