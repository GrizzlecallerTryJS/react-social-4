import React from "react";
import UserItem from "./UserItem/UserItem";
import UsersPagination from "./UsersPagination/UsersPagination";

const UserItemList = (props) => {
  return (
    <div>
      <UsersPagination
        pagesCount={props.pagesCount}
        getUsers={props.getUsers}
      />
      <div>
        {props.users.map((users) => (
          <div>
            <UserItem
              {...users}
              buttonName={props.buttonName}
              getUserById={props.getUserById}
              setFollowUserStatus={props.setFollowUserStatus}
              followIsFetching={props.followIsFetching}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserItemList;
