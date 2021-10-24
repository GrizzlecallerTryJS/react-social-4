import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  debugger;
  return (
    <div>
      <div>Profile</div>
      <ProfileInfo />
      <Posts postData={props.postData} />
    </div>
  );
};

export default Profile;
