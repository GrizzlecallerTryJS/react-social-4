import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  return (
    <div>
      <div>Profile</div>
      <ProfileInfo />
      <Posts postData={props.postData} />
    </div>
  );
};

export default Profile;
