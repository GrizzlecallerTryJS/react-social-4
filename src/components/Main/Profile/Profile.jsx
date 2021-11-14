import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import { connect } from "react-redux";
import defaultProfileAvatar from "../../../default/images/defaultProfileAvatar.png";

let mapDispatchToProps = (store) => {
  return {
    userProfile: store.profilePage.profileData,
    userId: store.profilePage.userId,
    defaultProfileAvatar,
  };
};

const ProfileInfoContainer = connect(mapDispatchToProps, {})(ProfileInfo);

const Profile = () => {
  return (
    <div>
      <div>Profile</div>
      <ProfileInfoContainer />
      <Posts />
    </div>
  );
};

export default Profile;
