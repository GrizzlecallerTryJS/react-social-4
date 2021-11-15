import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  newFollowAC,
  setCurrentPageAC,
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
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    followAction: (userId) => {
      dispatch(followAC(userId));
    },
    otherFollowAction: (id) => {
      dispatch(newFollowAC(id));
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
