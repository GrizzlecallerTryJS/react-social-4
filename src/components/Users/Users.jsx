import React from "react";
import { connect } from "react-redux";
import UserItemList from "./UserItemList";
import { followAC } from "../../redux/usersReducer";

let mstp = (state) => {
  return {
    userData: state.usersState.userData,
    buttonName: "Follow",
  };
};

let mdtp = (dispatch) => {
  return {
    followAction: (userId, followStatus) => {
      dispatch(followAC(userId, followStatus));
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
