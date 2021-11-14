import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileInfoItems from "./ProfileInfoItems";
import styles from "../Profile.module.css";
import Preloader from "../../../StandartComponent/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return (
      <div>
        <Preloader />
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.about}>
          <ProfileImage
            defaultProfileAvatar={props.defaultProfileAvatar}
            profileAvatar={props.userProfile.photos.large}
          />
        </div>
        <div>
          <ProfileInfoItems {...props} />
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
