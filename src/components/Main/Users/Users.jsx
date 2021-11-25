import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC } from "../../../redux/usersReducer";
import UsersClass from "./UsersClass";
import { setUserIdAC, setUserProfileAC } from "../../../redux/profileReducer";
import {
  getUserByIdTC,
  getUsersTC,
  setFollowUserStatusTC,
} from "../../../redux/usersFunc/usersThunkCreators";
import { withAuthRedirect } from "../../StandartComponent/hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersState.users,
    totalCount: state.usersState.totalCount,
    usersOnPageCount: state.usersState.usersOnPageCount,
    pagesCount: state.usersState.pagesCount,
    buttonName: "Follow",
    currentPage: state.usersState.currentPage,
    isFetching: state.usersState.isFetching,
    defaultPage: state.usersState.defaultPage,
    followIsFetching: state.usersState.followIsFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    followAction: (userId) => {
      dispatch(followAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setUserProfile: (userProfile) => {
      dispatch(setUserProfileAC(userProfile));
    },
    setUserId: (userId) => {
      dispatch(setUserIdAC(userId));
    },
    getUsers: (usersOnPageCount, pageNumber) => {
      dispatch(getUsersTC(usersOnPageCount, pageNumber));
    },
    setFollowUserStatus: (userId, followed) => {
      dispatch(setFollowUserStatusTC(userId, followed));
    },
    getUserById: (userId) => {
      dispatch(getUserByIdTC(userId));
    },
    /*    FollowButton: (action, userId) => {
      dispatch(ActionButton(action, userId));
    },*/
  };
};

const UserItemContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersClass);

const Users = () => {
  return <UserItemContainer />;
};

export default Users;
