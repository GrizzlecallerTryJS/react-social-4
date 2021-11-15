import React from "react";
import UserItem from "./UserItem/UserItem";
import UsersPagination from "./UsersPagination/UsersPagination";

const UserItemList = (props) => {
  return (
    <div>
      <UsersPagination
        pagesCount={props.pagesCount}
        setCurrentPage={props.setCurrentPage}
        setUsers={props.setUsers}
        currentPage={props.currentPage}
        usersOnPageCount={props.usersOnPageCount}
        getUsers={props.getUsers}
      />
      <div>
        {props.users.map((users) => (
          <div>
            <UserItem
              {...users}
              followAction={props.followAction}
              buttonName={props.buttonName}
              getUserById={props.getUserById}
              otherFollowAction={props.otherFollowAction}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserItemList;
