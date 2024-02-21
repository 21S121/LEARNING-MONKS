import React, { useState } from 'react';
import './newPhoto.jpg';
const Profile = ({ name, username, bio, backgroundImage, profilePhoto }) => {
  const [currentPhoto, setCurrentPhoto] = useState(profilePhoto);

  const handlePhotoChange = () => {
    // In a real application, you would implement logic to change the profile photo.
    // For simplicity, we'll just toggle between two photos for demonstration purposes.
    setCurrentPhoto((prevPhoto) =>
      prevPhoto === profilePhoto ? 'newPhoto.jpg' : profilePhoto
    );
  };

  return (
    <div className="profile-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Background Image */}
      </div>
      <div className="profile-details">
        <img
          className="profile-photo"
          src={currentPhoto}
          alt={`${name}'s Profile`}
        />
        <div className="user-info">
          <h2>{name}</h2>
          <p>@{username}</p>
          <p>{bio}</p>
        </div>
        <button onClick={handlePhotoChange}>Change Photo</button>
      </div>
    </div>
  );
};

export default Profile;
