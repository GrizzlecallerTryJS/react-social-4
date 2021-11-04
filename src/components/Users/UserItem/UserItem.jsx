import React from "react";

const UserItem = (props) => {
  /*const FollowButton = props.FollowButton;*/

  const follow = () => {
    return props.followAction(props.id, props.followStatus);
  };

  return (
    <div>
      <div>
        <div>{props.avatar}</div>
        <div>{props.firstName}</div>
        <div>{props.lastName}</div>
        <div>{props.age}</div>
        <div>{props.country}</div>
        <div>{props.status}</div>
      </div>
      <div>
        <button onClick={follow} name={props.buttonName}>
          {props.followStatus ? "unFollowCustomButton" : "FollowCustomButton"}
        </button>
      </div>
    </div>
  );
};

export default UserItem;
