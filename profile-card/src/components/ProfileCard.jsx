import React from "react";
import Skills from "./Skills";

const ProfileCard = () => {
  return (
    <div className="profile-card dark">
      <div className="profile-image">
        <img src="developer.jpg" alt="profile card" />
      </div>
      <div className="profile-name">Tia Developer</div>
      <div className="profile-proficient">Web Developer</div>
      <div className="profile-description">
        A passionate and creative Frontend Web Developer who is looking for new
        challenges to solve and also new thing to learn.
      </div>
      <Skills />
      <div className="profile-email">missdevelopeer@gmail.com</div>
    </div>
  );
};

export default ProfileCard;
