import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="footer-container">
        <div className="footer-box1">
          {/* <div className="footer-box1-item">
            <a href="https://github.com/gsnyarko" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div> */}
          <div className="footer-box1-item">
            <Link to='/contacts'>CONTACT US
            </Link>
          </div>
          
        </div>
        <div className="footer-box2">
          <p> © Gideon Nyarko 2020 </p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;