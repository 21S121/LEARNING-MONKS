import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/learning-monks-179a392a4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/21S121" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <p className="copyright">&copy; 2023 LearningMonks. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
