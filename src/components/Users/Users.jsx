import React from "react";
import { connect } from "react-redux";
import UserItemList from "./UserItemList";
import { followAC, setUsersAC } from "../../redux/usersReducer";

let mstp = (state) => {
  return {
    users: state.usersState.users,
    buttonName: "Follow",
  };
};

let mdtp = (dispatch) => {
  return {
    followAction: (userId, followed) => {
      dispatch(followAC(userId, followed));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    /*    FollowButton: (action, userId) => {
      dispatch(ActionButton(action, userId));
    },*/
  };
};

const UserItemContainer = connect(mstp, mdtp)(UserItemList);

const Users = () => {
  return <UserItemContainer />;
};

export default Users;
