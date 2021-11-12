import {
  _followFunc,
  _setCurrentPage,
  _setIsFetching,
  _setTotalCount,
  _setUsers,
} from "./usersFunc/usersFunc";

const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
  users: [],
  totalCount: null,
  usersOnPageCount: 5,
  pagesCount: null,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  let stateCopy = {};
  switch (action.type) {
    case FOLLOW:
      stateCopy = { ...state, users: state.users.map((user) => user) };
      stateCopy.users.forEach((user) => {
        if (user.id === action.userId) {
          _followFunc(user, action.followed);
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
      _setIsFetching(stateCopy, action.is);
      return stateCopy;
    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (userId, followed) => {
  return {
    type: FOLLOW,
    userId,
    followed,
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

export const setIsFetchingAC = (is) => {
  return {
    type: SET_IS_FETCHING,
    is,
  };
};
