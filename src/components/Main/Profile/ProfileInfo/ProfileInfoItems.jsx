import React from "react";

const ProfileInfoItems = (props) => {
  return (
    <div>
      <div>{props.userProfile.fullName}</div>
      <div>{props.userProfile.userId}</div>
    </div>
  );
};

export default ProfileInfoItems;
