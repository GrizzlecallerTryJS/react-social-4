import React from "react";
import UserItem from "./UserItem/UserItem";

const UserItemList = (props) => {
  return props.userData.map((item) => (
    <UserItem
      {...item}
      followAction={props.followAction}
      buttonName={props.buttonName}
    />
  ));
};

export default UserItemList;
