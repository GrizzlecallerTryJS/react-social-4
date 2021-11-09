import React from "react";
import UserItem from "./UserItem/UserItem";
import getUsers from "./GetUsers";

const UserItemList = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          getUsers(props.setUsers);
        }}
      >
        getUsers
      </button>
      {props.users.map((item) => (
        <UserItem
          {...item}
          followAction={props.followAction}
          buttonName={props.buttonName}
        />
      ))}
    </div>
  );
};

export default UserItemList;
