import React, { useState } from 'react';
import './Navbar.css'; 
import profileIcon from './profile.png';
import logoIcon from './logo.png';
  const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  return (
    <div className="navbar">
      <div className="logo">
       <h3>&nbsp;&nbsp;LEARNING MONKS</h3><img src={logoIcon} alt="logo"/>
        </div>
         <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/problem-solving">Problems And Solutions</a></li>
          <li><a href="/repositories">Repositories</a></li>
          <li className="profile-icon"><a href="/profile">
            <img src={profileIcon} alt="Profile" /></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
