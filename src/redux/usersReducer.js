import { _followFunc, _setUsers } from "./usersFunc/usersFunc";

const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: null,
      firstName: null,
      lastName: null,
      photos: {
        small: null,
        large: null,
      },
      age: null,
      status: null,
      avatar: null,
      followed: null,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  let stateCopy = { ...state, users: state.users.map((user) => user) };
  switch (action.type) {
    case FOLLOW:
      stateCopy.users.map((user) => {
        if (user.id === action.userId) {
          _followFunc(user, action.followed);
        }
      });
      return stateCopy;
    case SET_USERS:
      _setUsers(stateCopy, action.users);
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
