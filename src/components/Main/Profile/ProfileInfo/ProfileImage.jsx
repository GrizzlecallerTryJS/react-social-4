import React from "react";

const ProfileImage = (props) => {
  return (
    <div>
      <img src={props.defaultProfileAvatar} alt="default avatar" />
    </div>
  );
};

export default ProfileImage;
