import React from "react";
import styles from "../Profile.module.css";
import ProfileImage from "./ProfileImage";

const ProfileInfo = () => {
  return (
    <div>
      <ProfileImage />
      <div>
        <div className={styles.about}>avatar + desc</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
