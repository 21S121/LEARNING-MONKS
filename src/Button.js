// Button.js

import React, { useState } from 'react';
import './Button.css';
import Courses from './Courses';

const Button = () => {
  const [showCourses, setShowCourses] = useState(false);

  const handleButtonClick = () => {
    setShowCourses(true);
  };

  return (
    <div>
      <center>
        <button className="normal-button" onClick={handleButtonClick}>
          My Courses
        </button>
        {showCourses && <Courses />}
      </center>
    </div>
  );
}; 

export default Button;
