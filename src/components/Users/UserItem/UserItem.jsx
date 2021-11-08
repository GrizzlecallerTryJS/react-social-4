import React from "react";
import axios from "axios";
import styles from "./UserItem.module.css";
import defaultAvatar from "../../../default/images/defaultAvatar.png";

const UserItem = (props) => {
  /*const FollowButton = props.FollowButton;*/

  axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      props.setUsers(response.data.items);
    });

  const follow = () => {
    return props.followAction(props.id, props.followed);
  };

  return (
    <div>
      <div>
        <div className={styles.userPhoto}>
          <img
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
