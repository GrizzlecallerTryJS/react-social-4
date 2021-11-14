import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileInfoItems from "./ProfileInfoItems";
import styles from "../Profile.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={styles.about}>
        <ProfileImage defaultProfileAvatar={props.defaultProfileAvatar} />
      </div>
      <div>
        <ProfileInfoItems {...props} />
      </div>
    </div>
  );
};

export default ProfileInfo;
