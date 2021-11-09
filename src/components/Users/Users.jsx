import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC } from "../../redux/usersReducer";
import UsersClass from "./UsersClass";

let mapStateToProps = (state) => {
  return {
    users: state.usersState.users,
    buttonName: "Follow",
  };
};

let mapDispatchToProps = (dispatch) => {
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

const UserItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClass);

const Users = () => {
  return <UserItemContainer />;
};

export default Users;
