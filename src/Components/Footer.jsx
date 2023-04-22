import React from 'react'
import "./footer.scss"
import logo from "../download.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-column">
            <img src={logo} alt="" width={"95px"} height={"95px"} />
            <h3>Guruji Atro</h3>
            </div>
        
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Guruji Astro is a leading astrological consultancy firm that offers a wide range of
            services to its clients.
          </p>
          
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Tarot Reader</a>
            </li>
            <li>
              <a href="#">Vedic Astrology</a>
            </li>
            <li>
              <a href="#">Vaastu</a>
            </li>
            <li>
              <a href="#">Gemology</a>
            </li>
            <li>
              <a href="#">Numerology</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
           <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">T & C</a>
            </li>
            <li>
              <a href="#">Varied Payment</a>
            </li>
            </ul>
        </div>
        <div className="footer-column form">
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Mail Id' />

            <textarea name="" placeholder='Write Query' id="" cols="30" rows="10"></textarea>
            
            <button type="submit">SUBMIT</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Guruji Astro. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
