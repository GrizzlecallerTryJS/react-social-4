import React from "react";

const ProfileImage = (props) => {
  if (props.profileAvatar) {
    return (
      <div>
        <img src={props.profileAvatar} alt="profile avatar" />
      </div>
    );
  } else {
    return (
      <div>
        <img src={props.defaultProfileAvatar} alt="default avatar" />
      </div>
    );
  }
};

export default ProfileImage;
