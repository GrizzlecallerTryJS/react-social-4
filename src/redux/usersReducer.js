import { _followFunc, _setTotalCount, _setUsers } from "./usersFunc/usersFunc";

const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const initialState = {
  users: [],
  totalCount: null,
  usersOnPageCount: 10,
  pagesCount: null,
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
      stateCopy = { ...state, users: state.users.map((user) => user) };
      _setUsers(stateCopy, action.users);
      return stateCopy;
    case SET_TOTAL_COUNT:
      stateCopy = { ...state, users: state.users.map((user) => user) };
      _setTotalCount(stateCopy, action.totalCount);
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
  debugger;
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
