import {
  _followFunc,
  _setCurrentPage,
  _setFollowIsFetching,
  _setIsFetching,
  _setTotalCount,
  _setUsers,
} from "./usersFunc/usersFunc";

const FOLLOW_ACTION = "FOLLOW_ACTION";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOW_IS_FETCHING = "SET_FOLLOW_IS_FETCHING";

const initialState = {
  users: [],
  totalCount: null,
  usersOnPageCount: 5,
  pagesCount: null,
  currentPage: 1,
  isFetching: false,
  defaultPage: 1,
  followIsFetching: [],
};

const usersReducer = (state = initialState, action) => {
  let stateCopy = {};
  switch (action.type) {
    case FOLLOW_ACTION:
      stateCopy = { ...state, users: state.users.map((user) => user) };
      stateCopy.users.forEach((user) => {
        if (user.id === action.userId) {
          _followFunc(user);
        }
      });
      return stateCopy;
    case SET_USERS:
      stateCopy = { ...state };
      _setUsers(stateCopy, action.users);
      return stateCopy;
    case SET_TOTAL_COUNT:
      stateCopy = { ...state };
      _setTotalCount(stateCopy, action.totalCount);
      return stateCopy;
    case SET_CURRENT_PAGE:
      stateCopy = { ...state };
      _setCurrentPage(stateCopy, action.currentPage);
      return stateCopy;
    case SET_IS_FETCHING:
      stateCopy = { ...state };
      _setIsFetching(stateCopy, action.fetchingStatus);
      return stateCopy;
    case SET_FOLLOW_IS_FETCHING:
      stateCopy = { ...state };
      _setFollowIsFetching(stateCopy, action.userId, action.isFetching);
      return stateCopy;
    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (userId) => {
  return {
    type: FOLLOW_ACTION,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setTotalCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setIsFetchingAC = (fetchingStatus) => {
  return {
    type: SET_IS_FETCHING,
    fetchingStatus,
  };
};

export const setFollowIsFetchingAC = (userId, isFetching) => {
  return {
    type: SET_FOLLOW_IS_FETCHING,
    userId,
    isFetching,
  };
};
