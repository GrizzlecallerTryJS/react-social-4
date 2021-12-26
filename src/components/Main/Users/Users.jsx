import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC } from "../../../redux/usersReducer";
import UsersClass from "./UsersClass";
import { setUserIdAC, setUserProfileAC } from "../../../redux/profileReducer";
import {
  getUserByIdTC,
  getUsersTC,
  setFollowUserStatusTC,
} from "../../../redux/Func/usersFunc/usersThunkCreators";
import { withAuthRedirect } from "../../StandartComponent/hoc/withAuthRedirect";
import { compose } from "redux";
import {
  currentPageSelector,
  defaultPageSelector,
  followIsFetchingSelector,
  isFetchingSelector,
  pagesCountSelector,
  totalCountSelector,
  usersOnPageCountSelector,
  usersSelector,
} from "../../../redux/Selector/UsersSelectors";

let mapStateToProps = (state) => {
  return {
    users: usersSelector(state),
    totalCount: totalCountSelector(state),
    usersOnPageCount: usersOnPageCountSelector(state),
    pagesCount: pagesCountSelector(state),
    buttonName: "Follow",
    currentPage: currentPageSelector(state),
    isFetching: isFetchingSelector(state),
    defaultPage: defaultPageSelector(state),
    followIsFetching: followIsFetchingSelector(state),
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
