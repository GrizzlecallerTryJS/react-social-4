import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileInfoItems from "./ProfileInfoItems";

const ProfileInfo = (props) => {
  return (
    <div>
      <ProfileImage defaultProfileAvatar={props.defaultProfileAvatar} />
      <div>
        <ProfileInfoItems {...props} />
      </div>
    </div>
  );
};

export default ProfileInfo;
