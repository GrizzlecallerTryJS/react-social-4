import React from "react";
import styles from "./UserItem.module.css";
import defaultAvatar from "../../../default/images/defaultAvatar.png";

const UserItem = (props) => {
  /*const FollowButton = props.FollowButton;*/

  const follow = () => {
    return props.followAction(props.id, props.followed);
  };

  return (
    <div>
      <div>
        <div className={styles.userPhoto}>
          <img
            alt={"user"}
            src={
              props.photos.small !== null ? props.photos.small : defaultAvatar
            }
          />
        </div>
        <div>{props.name}</div>
        <div>{props.age}</div>
        <div>{props.status}</div>
      </div>
      <div>
        <button onClick={follow} name={props.buttonName}>
          {props.followed ? "unFollowCustomButton" : "FollowCustomButton"}
        </button>
      </div>
    </div>
  );
};

export default UserItem;
