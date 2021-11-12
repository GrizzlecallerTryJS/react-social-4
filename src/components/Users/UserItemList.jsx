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
      />
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
