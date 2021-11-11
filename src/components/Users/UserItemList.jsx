import React from "react";
import UserItem from "./UserItem/UserItem";
import UsersPagination from "./UsersPagination/UsersPagination";

const UserItemList = (props) => {
  return (
    <div>
      <UsersPagination pagesCount={props.pagesCount} />
      <div>
        {props.users.map((item) => (
          <UserItem
            {...item}
            followAction={props.followAction}
            buttonName={props.buttonName}
          />
        ))}
      </div>
    </div>
  );
};

export default UserItemList;
