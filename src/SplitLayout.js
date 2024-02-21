import React from 'react';
import './SplitLayout.css'; // Make sure to create this CSS file for styling

const SplitLayout = () => {
  return (
    <div className="split-layout">
      <div className="left-half">
        <img
          src="https://img.freepik.com/premium-vector/male-student-character-sitting-desk-with-laptop-writing-notebook-comfortable-study-space-vector-illustration_1016-15085.jpg?w=740" // Replace with the URL of your image
          alt="Left Half"
        />
      </div>
      <div className="right-half">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SplitLayout;