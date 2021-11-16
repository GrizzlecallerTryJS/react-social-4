import React from "react";
import styles from "./UserItem.module.css";
import defaultAvatar from "../../../default/images/defaultAvatar.png";
import { NavLink } from "react-router-dom";

const UserItem = (props) => {
  const follow = () => {
    return props.setFollowUserStatus(props.id, props.followed);
  };

  const openUserProfile = () => {
    return props.getUserById(props.id);
  };

  return (
    <div>
      <div>
        <div className={styles.userPhoto}>
          <span onClick={openUserProfile}>
            <NavLink to={`/profile/${props.id}`}>
              <img
                alt={"user"}
                src={
                  props.photos.small !== null
                    ? props.photos.small
                    : defaultAvatar
                }
              />
            </NavLink>
          </span>
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
