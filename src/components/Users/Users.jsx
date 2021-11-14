import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalCountAC,
  setUsersAC,
} from "../../redux/usersReducer";
import UsersClass from "./UsersClass";

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
    followAction: (userId, followed) => {
      dispatch(followAC(userId, followed));
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
