import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setFollowIsFetchingAC,
  setIsFetchingAC,
  setTotalCountAC,
  setUsersAC,
} from "../../redux/usersReducer";
import UsersClass from "./UsersClass";
import { setUserIdAC, setUserProfileAC } from "../../redux/profileReducer";

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
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
    setCurrentPage: (currentPagw) => {
      dispatch(setCurrentPageAC(currentPagw));
    },
    setIsFetching: (fetchingStatus) => {
      dispatch(setIsFetchingAC(fetchingStatus));
    },
    setUserProfile: (userProfile) => {
      dispatch(setUserProfileAC(userProfile));
    },
    setUserId: (userId) => {
      dispatch(setUserIdAC(userId));
    },
    setFollowIsFetching: (userId, isFetching) => {
      dispatch(setFollowIsFetchingAC(userId, isFetching));
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
