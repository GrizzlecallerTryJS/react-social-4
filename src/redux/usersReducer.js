import { _followFunc, _setUsers } from "./usersFunc/usersFunc";

const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      firstName: "Kolya",
      lastName: "Lupkin",
      photos: {
        small: null,
        large: null,
      },
      age: 18,
      status: "type status here",
      avatar: "",
      followed: false,
    },
    {
      id: 2,
      firstName: "agdfg",
      lastName: "dfg",
      photos: {
        small: null,
        large: null,
      },
      age: 47,
      status: "type status here",
      avatar: "",
      followed: false,
    },
    {
      id: 3,
      firstName: "iiii",
      lastName: "Lupkooooin",
      photos: {
        small: null,
        large: null,
      },
      age: 56,
      status: "type status here",
      avatar: "",
      followed: false,
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
