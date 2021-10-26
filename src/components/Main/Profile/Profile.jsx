import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  return (
    <div>
      <div>Profile</div>
      <ProfileInfo />
      <Posts
        profileState={props.profileState}
        addPostFunc={props.addPostFunc}
        currentNewPostTextAreaValue={props.currentNewPostTextAreaValue}
      />
    </div>
  );
};

export default Profile;
