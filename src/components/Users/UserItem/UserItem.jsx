import React from "react";
import styles from "./UserItem.module.css";
import defaultAvatar from "../../../default/images/defaultAvatar.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const UserItem = (props) => {
  const follow = () => {
    return props.followAction(props.id);
  };
  const followNew = () => {
    return props.otherFollowAction(props.id);
  };

  const openUserProfile = () => {
    return props.getUserById(props.id);
  };

  const followInternalFunc = () => {
    if (props.followed) {
      axios
        .delete(
          `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
          {
            withCredentials: true,
            headers: { "API-KEY": "ff303e2a-33e9-4b2c-90a3-a8b22ff8b29b" },
          }
        )
        .then((response) => {
          if (response.data.resultCode === 0) {
            followNew();
          }
        });
    } else {
      axios
        .post(
          `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
          {},
          {
            withCredentials: true,
            headers: { "API-KEY": "ff303e2a-33e9-4b2c-90a3-a8b22ff8b29b" },
          }
        )
        .then((response) => {
          if (response.data.resultCode === 0) {
            followNew();
          }
        });
    }
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
        <button onClick={followInternalFunc} name={props.buttonName}>
          {props.followed ? "unFollowCustomButton" : "FollowCustomButton"}
        </button>
      </div>
    </div>
  );
};

export default UserItem;
