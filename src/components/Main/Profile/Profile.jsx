import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Main = () => {
  return (
    <div>
      <div>Profile</div>
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Main;
