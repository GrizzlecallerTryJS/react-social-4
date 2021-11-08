import React from "react";
import UserItem from "./UserItem/UserItem";

const UserItemList = (props) => {
  return props.users.map((item) => (
    <UserItem
      {...item}
      followAction={props.followAction}
      buttonName={props.buttonName}
      setUsers={props.setUsers}
    />
  ));
};

export default UserItemList;
