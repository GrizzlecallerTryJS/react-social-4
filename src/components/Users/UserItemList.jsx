import React from "react";
import UserItem from "./UserItem/UserItem";

const UserItemList = (props) => {
  return (
    <div>
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
