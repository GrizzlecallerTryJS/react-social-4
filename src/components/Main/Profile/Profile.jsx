import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  return (
    <div>
      <div>Profile</div>
      <ProfileInfo />
      <Posts
        postData={props.profileState.postData}
        addPostFunc={props.addPostFunc}
        addPostTemp={props.addPostTemp}
      />
    </div>
  );
};

export default Profile;
