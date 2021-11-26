import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfoItems = (props) => {
  return (
    <div>
      <div>{props.userProfile.fullName}</div>
      <div>{props.userProfile.userId}</div>
      <div>
        <ProfileStatus
          profileStatus={props.profileStatus}
          userId={props.userProfile.userId}
          setUserStatus={props.setUserStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfoItems;
